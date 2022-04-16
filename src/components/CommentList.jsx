import React from "react";
import { connect } from "react-redux";

class CommentList extends React.Component {
  render (){
  return <div>CommentList : 
    <ul>

  {
    this.props?.comments && 
    this.props.comments.map((item,index)=><li key={index}>{item}</li>)
  }    
  </ul>
    </div>;
  }

}

export default connect((state)=>({comments:state.comments}))(CommentList);
