import React from "react";
import { connect } from "react-redux";
import * as actions from "../app/actions";
class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = { comment: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  }
  render() {
    return (
      <div>

      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea
          value={this.state.comment}
          onChange={(e) => {
            this.setState({ comment: e.target.value });
          }}
          />
        <div>
          <button type="submit">Submit Comment</button>
        </div>
      </form>
      <button className="fetcher" onClick={this.props.fetchComment}>Fetch Comments</button>
          </div>
    );
  }
}

export default connect(null, actions)(CommentBox);
