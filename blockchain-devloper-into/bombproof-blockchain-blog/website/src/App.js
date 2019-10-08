import React, { useState } from 'react';
import './App.css';
import CreateNewBlogPost from './components/CreateNewBlogPost';
import DisplayBlogPosts from './components/DisplayBlogPosts';
import getBlogPosts from './data/blog-posts';
import getComments from './data/comments';

function App() {
  const [blogPosts, setBlogPosts] = useState(getBlogPosts);
  const [comments, setComments] = useState(getComments);

  return (
    <div className="App">
      <header className="App-header centerAlign">
        Bulletproof Blockchain Blog
      </header>
      { DisplayBlogPosts(blogPosts, comments, setComments) }
      { CreateNewBlogPost(blogPosts, setBlogPosts) }
    </div>
  );
}

export default App;
