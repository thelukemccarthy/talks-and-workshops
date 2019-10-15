import React, { useState } from 'react';
import './App.css';
import AddBlogPost from './components/AddBlogPost';
import DisplayBlogPosts from './components/DisplayBlogPosts';
import getBlogPosts from './data/blog-posts';
import getComments from "./data/comments";

function App() {
  const [blogPosts, setBlogPosts] = useState(getBlogPosts());
  const [comments, setComments] = useState(getComments());

  return (
    <div className="App">
      <header className="App-header centerAlign">
        Bulletproof Blockchain Blog
      </header>
        <DisplayBlogPosts
          blogPosts={blogPosts}
          comments={comments}
          setComments={setComments}
        />
        <AddBlogPost
          blogPosts={blogPosts}
          setBlogPosts={setBlogPosts}
          comments={comments}
          setComments={setComments}
        />
    </div>
  );
}

export default App;
