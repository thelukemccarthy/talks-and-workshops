import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { toBeVisible } from "@testing-library/jest-dom";

import AddComments from "../AddComments";

expect.extend({ toBeVisible });

describe("AddComments", () => {
  it("should render", () => {
    const { container } = render(<AddComments setComments={jest.fn()} />);

    expect(container.querySelector(".blog-post-add-comment")).toBeVisible();
  });

  describe("inputs", () => {
    describe("Author", () => {
      it("should display an input and label for specifying an author", () => {
        const { getByText, container } = render(
          <AddComments setComments={jest.fn()} />
        );

        expect(getByText("Name")).toBeVisible();
        expect(container.querySelector('input[name="author"]')).toBeVisible();
      });

      it("should display the inputted text", () => {
        let comments = { "1": [{}, {}] };

        const { getByDisplayValue, getByLabelText } = render(
          <AddComments
            blogPostId="1"
            comments={comments}
            setComments={jest.fn()}
          />
        );

        fireEvent.change(getByLabelText("Name"), {
          target: { value: "Testy McTestface" }
        });

        expect(getByDisplayValue("Testy McTestface")).toBeVisible();
      });
    });

    describe("Comment", () => {
      it("should display a textarea and label for writing a comment", () => {
        const { getByText, container } = render(
          <AddComments setComments={jest.fn()} />
        );

        expect(getByText("Comment")).toBeVisible();
        expect(
          container.querySelector('textarea[name="comment"]')
        ).toBeVisible();
      });

      it("should display the inputted text", () => {
        let comments = { "1": [{}, {}] };

        const { getByDisplayValue, getByLabelText } = render(
          <AddComments
            blogPostId="1"
            comments={comments}
            setComments={jest.fn()}
          />
        );

        fireEvent.change(getByLabelText("Comment"), {
          target: { value: "Example comment" }
        });

        expect(getByDisplayValue("Example comment")).toBeVisible();
      });
    });
  });

  it('should display a submit button', () => {
    const { getByDisplayValue, container } = render(
      <AddComments setComments={jest.fn()} />
    );

    expect(getByDisplayValue("Submit")).toBeVisible();
  })

  it("should update the comments' state when submit is clicked", () => {
    const comments = { "1": [{}, {}] };
    const setComments = jest.fn();

    const { getByDisplayValue } = render(
      <AddComments
	  	  blogPostId="1"
		    comments={comments}
		    setComments={setComments}
      />
    );

    fireEvent.click(getByDisplayValue("Submit"), {
      target: { value: "Example comment" }
    });

    expect(setComments).toBeCalledWith({"1": [{}, {}, { blogPostId: '1', author: '', text: '' }]});
  });
});
