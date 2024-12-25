const Blog = require('../models/blog.model');
const cloudinary = require('../configurations/cloudinary.config');

// create a new blog
exports.createBlog = async (req, res) => {
    try {
        // Check if the request body has the required fields
        const { title, description ,author ,readTime } = req.body;
        if (!title || !description) {
            return res.status(400).json({
                message: 'Title and desc are required fields.'
            });
        }
        let imageUrl = ''; 
            if (req.file) {
            try {
                const result = await cloudinary.uploader.upload(req.file.path);
                imageUrl = result.secure_url;
            } catch (error) {
                return res.status(500).json({
                message: 'Error uploading image to Cloudinary.',
                error: error.message,
                });
            }
            }

            const blog = new Blog({
                imageUrl:imageUrl,
                title,
                description,
                author,
                readTime
            });

        await blog.save();

        
        res.status(201).json({
            message: 'Blog created successfully!',
            blog
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                message: 'Validation error',
                errors: messages
            });
        }

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
      const blog = await Blog.findById(req.params.id);
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      let imageUrl = blog.imageUrl; 
      if (req.file) {
        try {
          const result = await cloudinary.uploader.upload(req.file.path);
          imageUrl = result.secure_url; 
        } catch (error) {
          return res.status(500).json({
            message: 'Error uploading image to Cloudinary.',
            error: error.message,
          });
        }
      }
  
      const { title, description, author, readTime } = req.body;
  
      const updatedFields = {
        imageUrl,
        title: title || blog.title,
        description: description || blog.description,
        author: author || blog.author,
        readTime: readTime || blog.readTime,
      };
  
      const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, updatedFields, { new: true });
  
      res.status(200).json(updatedBlog);
    } catch (error) {
      res.status(400).json({
        message: 'Failed to update the blog.',
        error: error.message,
      });
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