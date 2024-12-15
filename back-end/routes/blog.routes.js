const blogController = require('../controllers/blog.controller');
const router = require('express').Router();
const authMiddleware = require('../middlewares/auth-midleware');

// create a blog 
router.post('/', authMiddleware, blogController.createBlog);
// get all blogs
router.get('/', blogController.getAllBlogs);

// get blog by id
router.get('/:id', blogController.getBlogById);

// delete a blog
router.delete('/:id', blogController.deleteBlog);

// update a blog
router.put('/:id', blogController.updateBlog);

// get all blogs for a specific user
router.get('/user/:id', blogController.getAllUserBlogs);

module.exports = router;