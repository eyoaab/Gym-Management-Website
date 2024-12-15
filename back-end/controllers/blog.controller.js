const Blog = require('../models/blog.model');

// create a new blog
exports.createBlog = async (req, res) => {
    try {
        // Check if the request body has the required fields
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({
                message: 'Title and desc are required fields.'
            });
        }

        
        // Create a new blog post with the provided data and author (userId)
        const blog = new Blog(req.body)

        // Save the blog post to the database
        await blog.save();

        
        res.status(201).json({
            message: 'Blog created successfully!',
            blog
        });
    } catch (error) {
        // Handle validation errors
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                message: 'Validation error',
                errors: messages
            });
        }

        // Handle other errors (e.g. server or database errors)
        res.status(500).json({
            message: 'An unexpected error occurred while creating the blog.',
            error: error.message || error
        });
    }
};
;

// to get all blogs
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author');
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// to get blog by id
exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate('author');
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// to update a  blog
exports.updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// to finds all blogs with spasfic userid
exports.getAllUserBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ author: req.params.id }).populate('author');
        if (!blogs) return res.status(404).json({ message: 'Blogs not found for this user' });
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// to delete a blog
exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};