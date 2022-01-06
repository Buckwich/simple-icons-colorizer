import React from "react";
import * as si from "simple-icons";
import Card from "./card/Card";
import "./List.scss";
export default class List extends React.Component {
  render() {
    console.log(Object.keys(si).length);
    return (
      <div className="list">
        {Object.keys(si).map((key, index) => {
          return (
            <div>
              {index}
              <Card key={key} icon={si.get(key)} />
            </div>
          );
        })}
      </div>
    );
  }
}
