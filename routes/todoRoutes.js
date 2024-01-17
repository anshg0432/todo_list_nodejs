const express = require('express');
const router = express.Router();
const todoControllers = require('../controllers/todoControllers');

router.get('/',todoControllers.todo_list)
router.post('/',todoControllers.create_task)

module.exports = router;