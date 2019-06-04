import React, { Component } from "react";
import "../assets/sass/components/like.scss";

class Like extends Component {
  state = {};
  render() {
    let classes = "icon-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        onClick={this.props.onLikeToggle}
        className={classes}
        style={{ cursor: "pointer" }}
      />
    );
  }
}

export default Like;
