import React from "react";
import { SimpleIcon } from "simple-icons";
import "./Card.scss";

export default class Card extends React.Component<{ icon: SimpleIcon }> {
  render() {
    return (
      <div className="card">
        <div
          className="svg"
          style={{ fill: "#" + this.props.icon.hex }}
          dangerouslySetInnerHTML={{ __html: this.props.icon.svg }}
        ></div>
      </div>
    );
  }
}
