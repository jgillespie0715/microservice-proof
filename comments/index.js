const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// comments service "database"
const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
	res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', async (req, res) => {
	const commentId = randomBytes(4).toString('hex');
	const { content } = req.body;

	const comments = commentsByPostId[req.params.id] || [];

	comments.push({ id: commentId, content, status: 'pending' });

	commentsByPostId[req.params.id] = comments;

	try {
		await axios.post('http://event-bus-srv:4005/events', {
			type: 'CommentCreated',
			data: {
				id: commentId,
				content,
				status: 'pending',
				postId: req.params.id,
			},
		});
	} catch (error) {
		console.log('error in comments service: ', error);
	}

	res.status(201).send(comments);
});

app.post('/events', async (req, res) => {
	console.log('received event: ', req.body.type);
	const { type, data } = req.body;
	if (type === 'CommentModerated') {
		const { postId, content, id, status } = data;
		console.log('comment moderated status in comments svc: ', status);
		const comments = commentsByPostId[postId];
		const comment = comments.find((comment) => {
			return comment.id === id;
		});
		comment.status = status;
		try {
			await axios.post('http://event-bus-srv:4005/events', {
				type: 'CommentUpdated',
				data: {
					id,
					status,
					postId,
					content,
				},
			});
		} catch (error) {
			console.log('error in comments service: ', error);
		}
	}
	res.send({});
});
app.listen(4001, () => {
	console.log('Listening on 4001');
});
