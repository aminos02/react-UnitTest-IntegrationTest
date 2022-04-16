import { Provider } from "react-redux";
import getStore from "./app";

export default function Root({ children,initialState }) {
  return <Provider store={getStore(initialState)}>{children}</Provider>;
}
