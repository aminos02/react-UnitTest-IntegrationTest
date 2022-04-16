import { FETCH_COMMENT, SAVE_COMMENT } from "./actions/type";
export default function reducer(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
      case FETCH_COMMENT:

        return [...state,...action.payload.data.map(comment=>comment.name)]
    default:
      return state;
  }
}
