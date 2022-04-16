import axios from "axios";
import { SAVE_COMMENT,FETCH_COMMENT } from "./type";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export function fetchComment()
{
  const response=axios.get('http://jsonplaceholder.typicode.com/comments')
  return {
    type:FETCH_COMMENT,
    payload:response
  }
}