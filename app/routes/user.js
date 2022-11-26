const express = require('express');
const router = express.Router();
const user = require('../controllers/user');

//Test router
router.get('/test', function (req, res) {
    res.send('Hello World!');
})

/* router.get('/', isAdmin, controller.getAdminPage); */

// Get all students
router.get('/', user.getUsers);

// Create new User
router.post('/add-user', user.createUser);

// Update User
router.put('/update-user/:id', user.updateUser);

// Delete User
router.delete('/delete-user/:id', user.deleteUser);

// Get all admin
router.get('/is-admin', user.getAdmins);


module.exports = router;