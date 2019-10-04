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
    </div>
  ))
);

const getComments = (blogPostId) => {
  let relevant = comments.filter(comment => comment.blogPostId === blogPostId);
  return relevant.map((item, index) => {
    return (<div key={`${blogPostId}-${index}`}>
      <span>Author {item.author} </span>
      <span> {item.comment} </span>
    </div>)
  });
};

function App() {
  return (
    <div className="App">
      <header className="App-header centerAlign">
        Bulletproof Blockchain Blog
      </header>
      { getBlogPosts() }
    </div>
  );
}

export default App;
