import { Component } from "react";

export default class Card extends Component  {
  render() {
    let { image, name, meta, description } = this.props;

    return (
      <div className="card">
        <div className="content">
          <img
            src={image}
            alt="Random Image"
            className="right floated mini ui image"
          />
          <div className="header">{name}</div>
          <div className="meta">{meta}</div>
          <div className="desciption">{description}</div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Approve</div>
            <div className="ui basic red button">Decline</div>
          </div>
        </div>
      </div>
    );
  }
}

