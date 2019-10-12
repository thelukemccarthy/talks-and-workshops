import React from 'react';

import AddComment from './AddComments';
import DisplayComments from './DisplayComments';

const DisplayBlogPosts = ({ blogPosts, comments }, /*setComments*/) => (
  (blogPosts || []).map(({ id, title, published, content, author }, index) => (
    <div key={`blogpost-${index}`} className="blog-post">
      <h1 className="blog-post-title">{title}</h1>
      <div className="blog-post-publish-date">Published: {published}</div>
      <div className="blog-post-content"><p>{content}</p></div>
      <div className="blog-post-author">Written by {author}</div>
      <DisplayComments comments={comments} blogPostId={id} />
      <AddComment />
      {/* { AddComment(blogPost.id, comments, setComments) } */}
    </div>
  ))
);

export default DisplayBlogPosts;