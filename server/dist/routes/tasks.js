"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = require("../controllers/tasks");

var router = (0, _express.Router)(); //Creacion de las rutas

router.get("/tasks", _tasks.getTasks);
router.get("/tasks/count", _tasks.getTaskCount);
router.post("/tasks", _tasks.saveTask);
router.get("/tasks/:id", _tasks.getTask);
router["delete"]("/tasks/:id", _tasks.deleteTask);
router.put("/tasks/:id", _tasks.updateTask);
var _default = router;
exports["default"] = _default;