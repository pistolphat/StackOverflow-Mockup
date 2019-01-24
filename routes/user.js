const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.js')



// Render a form to create a new User in the DB
router.get("/new", userController.new);

router.get("/login", userController.login);

//create a new user and save it to the DB
// router.post("/", userController.create);

// router.get("/:id", userController.show);

// router.put("/:id", userController.update);

// router.delete('/:id', userController.destroy)


module.exports = router;