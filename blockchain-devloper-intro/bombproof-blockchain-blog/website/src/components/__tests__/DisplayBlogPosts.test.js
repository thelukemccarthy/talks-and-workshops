import React from 'react';
import { render } from '@testing-library/react';
import { toBeVisible } from '@testing-library/jest-dom';

import DisplayBlogPosts from "../DisplayBlogPosts";

expect.extend({toBeVisible});

describe('DisplayBlogPosts', () => {
  it('should render an array of posts', () => {
    const posts = [{}, {}];

    const { container } = render(<DisplayBlogPosts blogPosts={posts} setComments={jest.fn()}/>);

    expect(container.querySelectorAll('.blog-post')).toHaveLength(2);
  });

  it('should render a title for a post', () => {
    const posts = [{ title: 'Title' }];

    const { getByText } = render(<DisplayBlogPosts blogPosts={posts} setComments={jest.fn()}/>);

    expect(getByText('Title')).toBeVisible();
  });

  it('should render a published date for a post', () => {
    const posts = [{ published: '19-Sep-2019' }];

    const { getByText } = render(<DisplayBlogPosts blogPosts={posts} setComments={jest.fn()}/>);

    expect(getByText('Published: 19-Sep-2019')).toBeVisible();
  });

  it('should render content for a post', () => {
    const posts = [{ content: 'This is a blog post' }];

    const { getByText } = render(<DisplayBlogPosts blogPosts={posts} setComments={jest.fn()} />);

    expect(getByText('This is a blog post')).toBeVisible();
  });

  it('should render the author of a post', () => {
    const posts = [{ author: 'Testy McTestface' }];

    const { getByText } = render(<DisplayBlogPosts blogPosts={posts} setComments={jest.fn()}/>);

    expect(getByText('Written by Testy McTestface')).toBeVisible();
  });

  describe('comments', () => {
    it('should display comments', () => {
      const posts = [{id: '1'}];
      const comments = {'1': [{}, {}]};

      const { container } = render(<DisplayBlogPosts blogPosts={posts} comments={comments} setComments={jest.fn()} />);

      expect(container.querySelectorAll('.blog-post-comment')).toHaveLength(2);
    });

    it('should display an input to add a comment', () => {
      const posts = [{}];

      const { container } = render(<DisplayBlogPosts blogPosts={posts} setComments={jest.fn()} />);

      expect(container.querySelectorAll('.blog-post-add-comment')).toHaveLength(1);
    });
  });
});