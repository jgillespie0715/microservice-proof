const express = require('express');
const bodyParser = require('body-parser');

const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
	const { type, data } = req.body;
	console.log('received event: ', req.body.type);

	if (type === 'CommentCreated') {
		const status = data.content.includes('orange') ? 'rejected' : 'approved';
		console.log('status in moderation svc: ', status);
		// docs shoudl list properties of each event
		try {
			await axios.post('http://event-bus-srv:4005/events', {
				type: 'CommentModerated',
				data: {
					id: data.id,
					postId: data.postId,
					status,
					content: data.content,
				},
			});
		} catch (error) {
			console.log('error in moderation service: ', error);
		}
	}
	res.send({});
});

app.listen(4003, () => {
	console.log('listening on 4003');
});
