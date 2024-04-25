const router = require("express").Router();

const formController = require("../controllers/form.controller");

router.post("/add", formController.addPost);
router.get("/all", formController.getAllPosts);
router.get("/fetch/:id", formController.getPostById);


module.exports = router;