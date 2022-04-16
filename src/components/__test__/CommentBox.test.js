import React from "react";
import CommentBox from "components/CommentBox";
import { mount } from "enzyme";
import Root from "../../Root";
let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("show a button and text area", () => {
  expect(wrapped.find("button").length).toEqual(2);
  expect(wrapped.find("textarea").length).toEqual(1);
});

describe("textarea", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: {
        value: "hello Aminos",
      },
    });
    wrapped.update();
  });
  it("has a textarea that user can type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("hello Aminos");
  });

  it("empty textarea when user click submit", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
