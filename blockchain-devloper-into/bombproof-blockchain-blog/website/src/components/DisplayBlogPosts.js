import React  from 'react';

import AddComment from './AddComments'
import DisplayComments from './DisplayComments';

const DisplayBlogPosts = (blogPosts, comments, setComments) => (
  blogPosts.map((blogPost, index) => (
    <div key={`blogpost-${index}`} className="blog-post">
      <h1 className="blog-post-title">{blogPost.title}</h1>
      <div className="blog-post-publish-date">Publish: {blogPost.published}</div>
      <div className="blog-post-content"><p>{blogPost.content}</p></div>
      <div className="blog-post-author">Written by {blogPost.author}</div>
      { DisplayComments(comments, blogPost.id) }
      { AddComment(blogPost.id, comments, setComments) }
    </div>
  ))
);

export default DisplayBlogPosts;