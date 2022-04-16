import React from "react";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { shallow } from "enzyme";
// import "../../setupTests";

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it("render One CommentBox", async () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});
it("render One CommentList", async () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
