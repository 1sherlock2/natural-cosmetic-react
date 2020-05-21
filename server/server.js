const express = require('express');
const app = express();


app.use('/api', require('./api'));

app.get('/api', (req,res) => {
	res.send('Hello World')
})

app.listen(4000, () => {
	console.log('server is listening')
})

