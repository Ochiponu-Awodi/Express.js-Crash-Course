const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

let posts = [{
    id: 1,
    title: 'Post 1',
},
{
    id: 2,
    title: 'Post 2',
},
{
    id: 3,
    title: 'Post 3',
}
]

// Get all posts
app.get('/api/posts/', (req, res) => {
    res.json(posts);
})

// Get single post
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.json(posts.filter((post) => post.id === id));
})

app.listen(port, () => console.log(`Server is running on port ${port}`));