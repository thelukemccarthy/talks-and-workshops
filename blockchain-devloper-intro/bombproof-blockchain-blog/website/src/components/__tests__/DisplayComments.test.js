import React from 'react';
import { render } from '@testing-library/react';
import { toBeVisible } from '@testing-library/jest-dom';

import DisplayComments from "../DisplayComments";

expect.extend({toBeVisible});

describe('DisplayComments', () => {
  it('should render an array of comments', () => {
    const comments = {'1': [{}, {}]};

    const { container } = render(<DisplayComments blogPostId='1' comments={comments} />);

    expect(container.querySelectorAll('.blog-post-comment')).toHaveLength(2);
  });

  it('should only render comments for a particular blog post', () => {
    const comments = {'1': [{}], "2": [{}]};

    const { container } = render(<DisplayComments blogPostId='1' comments={comments} /> );

    expect(container.querySelectorAll('.blog-post-comment')).toHaveLength(1);
  });

  it('should only render published comments', () => {
    const comments = {'1': [{ unpublished: true }]};

    const { container } = render(<DisplayComments blogPostId='1' comments={comments}/>);

    expect(container.querySelectorAll('.blog-post-comment')).toHaveLength(0);
  });

  it('should display the comment\'s author', () => {
    const comments = {'1': [{ author: 'Testy McTestface' }]};

    const { getByText } = render(<DisplayComments blogPostId='1' comments={comments}/>);

    expect(getByText('Name: Testy McTestface')).toBeVisible();
  })

  it('should display the comment\'s text', () => {
    const comments = {'1': [{ text: 'Comment' }]};

    const { getByText } = render(<DisplayComments blogPostId='1' comments={comments}/>);

    expect(getByText('Comment')).toBeVisible();
  })
});
