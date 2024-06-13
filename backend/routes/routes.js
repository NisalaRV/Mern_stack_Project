const express =require('express');
const route =express.Router();
const controller = require('../controllers/user_controller');
const  router  = require('../app/app');


router.get('/getUsers',controller.getUsers);
router.post('/createUser',controller.createUser);
router.put('/updateUser',controller.updateUser);
router.get('/getUserById',controller.getUserById);
router.delete('/deleteUser',controller.deleteUser);

module.exports = router;
