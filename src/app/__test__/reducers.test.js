import commentReducer from "../commentsReducer";
import { saveComment } from "../actions";

it("handles actions of type SAVE_COMMENT", () => {
  const action = saveComment("My First Comment");
  const state = commentReducer([], action);
  expect(state).toContain("My First Comment");
});

it("handles action with wrong action types", () => {
  const action = { type: "Delete Comment", payload: "My First Comment" };
  const state = commentReducer([], action);
  expect(state).toEqual([]);
});
