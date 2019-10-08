import React, { useState } from 'react';
import './App.css';
import getBlogPosts from './data/blog-posts';
import getComments from './data/comments'

const DisplayBlogPosts = (blogPosts, comments) => (
  blogPosts.map((blogPost, index) => (
    <div key={`blogpost-${index}`} className="blog-post">
      <h1 className="blog-post-title">{blogPost.title}</h1>
      <div className="blog-post-publish-date">Publish: {blogPost.published}</div>
      <div className="blog-post-content"><p>{blogPost.content}</p></div>
      <div className="blog-post-author">Written by {blogPost.author}</div>
      { DisplayComments(comments, blogPost.id) }
      { AddComment(blogPost.id) }
    </div>
  ))
);

const DisplayComments = (comments, blogPostId) => {
  let relevant = comments.filter(comment => comment.blogPostId === blogPostId);
  return relevant.map((comment, index) => {
    return (<div key={`${blogPostId}-${index}`} className="blog-post-comment">
      <span>Name {comment.author} </span>
      <span> {comment.text} </span>
    </div>)
  });
};

const AddComment = (blogPostId) => {
  return <div key={`add-comment-${blogPostId}`} className="blog-post-add-comment">
    <div>
      <label>
        <span>Name</span>
        <input type="text" name="comment-name" />
      </label>
      <div>
        <label>
          <span>Comment</span>
          <textarea name="comment-text"></textarea>
        </label>
      </div>
      <div>
        <input type="submit" value="Comment"/>
      </div>
    </div>
  </div>
};

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

function App() {
  const [blogPosts, setBlogPosts] = useState(getBlogPosts);
  const [comments, setComments] = useState(getComments);

  return (
    <div className="App">
      <header className="App-header centerAlign">
        Bulletproof Blockchain Blog
      </header>
      { DisplayBlogPosts(blogPosts, comments, setBlogPosts) }
      { CreateNewBlogPost(blogPosts, setBlogPosts) }
    </div>
  );
}

export default App;
