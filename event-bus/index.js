const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {
	const event = req.body;
	// posts service
	try {
		axios.post('http://localhost:4000/events', event);
	} catch (error) {
		console.log('error in event bus posts endpoint', error);
	}
	// comments service
	try {
		axios.post('http://localhost:4001/events', event);
	} catch (error) {
		console.log('error in event bus comments endpoint', error);
	}
	// query service
	try {
		axios.post('http://localhost:4002/events', event);
	} catch (error) {
		console.log('error in event bus query endpoint', error);
	}
	// moderation
	try {
		axios.post('http://localhost:4003/events', event);
	} catch (error) {
		console.log('error in event bus moderation endpoint', error);
	}
	res.send({ status: 'OK' });
});

app.listen(4005, () => {
	console.log('Listening on 4005');
});
