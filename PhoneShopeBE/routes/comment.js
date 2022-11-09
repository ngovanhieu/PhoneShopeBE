const comment = require("../controllers/comments")
const router = require("express").Router();

router.post("/add-comment",comment.addCmt)
router.delete("/:id",comment.Deletecmt)


module.exports = router