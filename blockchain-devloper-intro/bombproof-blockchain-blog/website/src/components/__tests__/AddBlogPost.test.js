import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { toBeVisible } from "@testing-library/jest-dom";

import AddBlogPost from "../AddBlogPost";

expect.extend({ toBeVisible });

describe("AddBlogPost", () => {
  it("should render", () => {
    const { container } = render(<AddBlogPost />);

    expect(container.querySelector(".add-blog-post")).toBeVisible();
  });

  it("should display a header", () => {
    const { getByText } = render(<AddBlogPost />);

    expect(getByText("Create new post")).toBeVisible();
  });

  describe("title input", () => {
    it("should display an input for a title", () => {
      const { container, getByLabelText } = render(<AddBlogPost />);

      expect(getByLabelText("Title")).toBeVisible();
      expect(container.querySelector('input[name="title"]')).toBeVisible();
    });

    it("should display the entered title", () => {
      const { getByLabelText, getByDisplayValue } = render(<AddBlogPost />);

      fireEvent.change(getByLabelText("Title"), {
        target: { value: "Example title" }
      });

      expect(getByDisplayValue("Example title")).toBeVisible();
    });
  });

  describe("publish date", () => {
    it("should display an input for a publish date", () => {
      const { container, getByLabelText } = render(<AddBlogPost />);

      expect(getByLabelText("Publish Date")).toBeVisible();
      expect(container.querySelector('input[name="published"]')).toBeVisible();
    });

    it("should display the entered date", () => {
      const { getByLabelText, getByDisplayValue } = render(<AddBlogPost />);

      fireEvent.change(getByLabelText("Publish Date"), {
        target: { value: "2019-09-08" }
      });

      expect(getByDisplayValue("2019-09-08")).toBeVisible();
    });
  });

  describe("author", () => {
    it("should display an input for an author", () => {
      const { container, getByLabelText } = render(<AddBlogPost />);

      expect(getByLabelText("Author")).toBeVisible();
      expect(container.querySelector('input[name="author"]')).toBeVisible();
    });

    it("should display the text", () => {
      const { getByLabelText, getByDisplayValue } = render(<AddBlogPost />);

      fireEvent.change(getByLabelText("Author"), {
        target: { value: "Testy McTestface" }
      });

      expect(getByDisplayValue("Testy McTestface")).toBeVisible();
    });
  });

  describe("content", () => {
    it("should display a textarea for content", () => {
      const { container, getByLabelText } = render(<AddBlogPost />);

      expect(getByLabelText("Content")).toBeVisible();
      expect(container.querySelector('textarea[name="content"]')).toBeVisible();
    });

    it("should display the entered text", () => {
      const { getByLabelText, getByDisplayValue } = render(<AddBlogPost />);

      fireEvent.change(getByLabelText("Content"), {
        target: { value: "Example content" }
      });

      expect(getByDisplayValue("Example content")).toBeVisible();
    });
  });

  it("should display a submit button", () => {
    const { getByDisplayValue } = render(<AddBlogPost />);

    expect(getByDisplayValue("Post Blog")).toBeVisible();
  });

  it("should be able to submit a new blog post", () => {
    let comments = [];
    let blogPosts = [];

    const setComments = jest.fn(c => comments = c);
    const setBlogPosts = jest.fn(p => blogPosts = p);

    const { getByLabelText, getByDisplayValue } = render(
      <AddBlogPost
        blogPosts={blogPosts}
        setBlogPosts={setBlogPosts}
        comments={comments}
        setComments={setComments}
      />
    );

    fireEvent.change(getByLabelText("Title"), {
      target: { value: "Example title" }
    });
    fireEvent.change(getByLabelText("Publish Date"), {
      target: { value: "2019-09-08" }
    });
    fireEvent.change(getByLabelText("Author"), {
      target: { value: "Testy McTestface" }
    });
    fireEvent.change(getByLabelText("Content"), {
      target: { value: "Example content" }
    });
    fireEvent.click(getByDisplayValue("Post Blog"));

    expect(blogPosts).toEqual([expect.objectContaining({
      title: 'Example title',
      published: '2019-09-08',
      author: 'Testy McTestface',
      content: 'Example content'
    })]);
    expect(comments).toEqual({[blogPosts[0].id]: []});
  });
});
