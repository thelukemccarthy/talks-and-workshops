import React from 'react';
import './App.css';
import blogPosts from './data/blog-posts';
import comments from './data/comments'

const getBlogPosts = () => (
  blogPosts.map((item, index) => (
    <div key={`blogpost-${index}`} className="blog-post">
      <h1 className="blog-post-title">{item.title}</h1>
      <div className="blog-post-publish-date">Publish: {item.published}</div>
      <div className="blog-post-content"><p>{item.content}</p></div>
      <div className="blog-post-author">Written by {item.author}</div>
      { getComments(item.id) }
      { addComment(item.id) }
    </div>
  ))
);

const getComments = (blogPostId) => {
  let relevant = comments.filter(comment => comment.blogPostId === blogPostId);
  return relevant.map((comment, index) => {
    return (<div key={`${blogPostId}-${index}`} className="blog-post-comment">
      <span>Name {comment.author} </span>
      <span> {comment.text} </span>
    </div>)
  });
};

const addComment = (blogPostId) => {
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

const createNewBlogPost = ()=> {
  return <div className="add-blog-post">
    <h3>Create new post</h3>
    <div>
      <label>
        <span>Title</span>
        <input type="text" name="blog-post-Title"/>
      </label>
    </div>
    <div>
      <label>
        <span>Publish Date</span>
        <input type="text" name="blog-post-publish-date"/>
      </label>
    </div>
    <div>
      <label>
        <span>Author</span>
        <input type="text" name="blog-post-author"/>
      </label>
    </div>
    <div>
      <label>
        <span>Content</span>
        <textarea name="blog-post-content"/>
      </label>
    </div>
    <div>
      <input type="submit" value="Post Blog"/>
    </div>
  </div>
};

function App() {
  return (
    <div className="App">
      <header className="App-header centerAlign">
        Bulletproof Blockchain Blog
      </header>
      { getBlogPosts() }
      { createNewBlogPost() }
    </div>
  );
}

export default App;
