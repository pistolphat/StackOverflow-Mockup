const express = require('mongoose')
const router = express.Router()
const userController = require('../controllers/user.js')

router.post("/", userController.create);

router.get("/new", userController.new);

router.get("/:id", userController.show);

router.put("/:id", userController.update);

module.exports = router;