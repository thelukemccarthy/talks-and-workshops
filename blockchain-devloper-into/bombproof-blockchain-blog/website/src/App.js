import React from 'react';
import './App.css';
import blogPosts from './data/blog-posts';

const getBlogPosts = () => (
  blogPosts.map(item => (
    <div class="blog-post">
      <h1 class="blog-post-title">{item.title}</h1>
      <div class="blog-post-publish-date">Publish: {item.published}</div>
      <div class="blog-post-content"><p>{item.content}</p></div>
      <div class="blog-post-author">Written by {item.author}</div>
    </div>
  ))
);

function App() {
  return (
    <div className="App">
      <header className="App-header centerAlign">
        Bulletproof Blockchain Blog
      </header>
      <body>
      {
        getBlogPosts()}
      </body>
    </div>
  );
}

export default App;
