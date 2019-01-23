const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.js')

router.post("/", userController.create);
router.get("/new", userController.new);
router.get("/:id", userController.show);
router.put("/:", userController.update);

module.exports = router;