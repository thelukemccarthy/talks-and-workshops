import React, { useState } from 'react';

const CreateNewBlogPost = (blogPosts, setBlogPosts)=> {
  const blankBlogPost = {
    id:"",
    title: "",
    published: "",
    author: "",
    content: ""
  };

  const [newBlogPost, setNewBlogPost] = useState(blankBlogPost);

  const updateNewBlogPost = (event) => {
    const updatedBlogPost = Object.assign({}, newBlogPost, {[event.target.name]: event.target.value});
    setNewBlogPost(updatedBlogPost);
  };

  const postBlog = () => {
    setBlogPosts([...blogPosts, {...newBlogPost}]);
    setNewBlogPost(blankBlogPost);
  };

  return <div className="add-blog-post">
    <h3>Create new post</h3>
    <div>
      <label>
        <span>Title</span>
        <input type="text" name="title" value={newBlogPost.title} onChange={updateNewBlogPost} />
      </label>
    </div>
    <div>
      <label>
        <span>Publish Date</span>
        <input type="text" name="published" value={newBlogPost.published} onChange={updateNewBlogPost} />
      </label>
    </div>
    <div>
      <label>
        <span>Author</span>
        <input type="text" name="author" value={newBlogPost.author} onChange={updateNewBlogPost} />
      </label>
    </div>
    <div>
      <label>
        <span>Content</span>
        <textarea name="content" value={newBlogPost.content} onChange={updateNewBlogPost} />
      </label>
    </div>
    <div>
      <input type="submit" value="Post Blog" onClick={postBlog}/>
    </div>
  </div>
};

export default CreateNewBlogPost;