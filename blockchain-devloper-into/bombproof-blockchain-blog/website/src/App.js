import React, { useState } from 'react';
import './App.css';
import AddBlogPost from './components/AddBlogPost';
import DisplayBlogPosts from './components/DisplayBlogPosts';
import getBlogPosts from './data/blog-posts';
import getComments from "./data/comments";

function App() {
  const struturedComments = {};
  getComments.forEach(comment => {
    struturedComments[comment.blogPostId]?
      struturedComments[comment.blogPostId].push(comment):
      struturedComments[comment.blogPostId] = [comment];
  });

  const [blogPosts, setBlogPosts] = useState(getBlogPosts);
  const [comments, setComments] = useState(struturedComments);

  return (
    <div className="App">
      <header className="App-header centerAlign">
        Bulletproof Blockchain Blog
      </header>
      { DisplayBlogPosts(blogPosts, comments, setComments) }
      { AddBlogPost(blogPosts, setBlogPosts, comments, setComments) }
    </div>
  );
}

export default App;
