import React, { Component } from "react";

class ShowLiked extends Component {
  render() {
    const { onButtonSelect } = this.props;

    return (
      <button
        onClick={() => {
          onButtonSelect(this.props.toSelectItem);
        }}
      >
        {"show " + this.props.toSelectItem + " countries"}
      </button>
    );
  }
}

export default ShowLiked;
