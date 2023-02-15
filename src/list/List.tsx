import React from "react";
import * as si from "simple-icons";
import Card from "./card/Card";
import "./List.scss";
export default class List extends React.Component {
  render() {
    return (
      <div className="list">
        {Object.entries(si).map(([key, icon], index) => {
          return (
            <div>
              {index}
              <Card key={key} icon={icon} />
            </div>
          );
        })}
      </div>
    );
  }
}
