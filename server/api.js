const express = require('express');
const router =  express.Router();


router.get('/socks', (request,response) => {
	response.send({method: 'GET'})
});
//
// router.post('/socks', (request,response) => {
// 	response.send({method: 'POST'})
// });
//
// router.put('/socks/:id', (request,response) => {
// 	response.send({method: 'PUT'})
// });
//
// router.delete('/socks/:id', (request,response) => {
// 	response.send({method: 'DELETE'})
// });
//

module.exports = router;
