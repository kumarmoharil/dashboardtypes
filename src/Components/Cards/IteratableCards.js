import React, { Component } from "react";
import "./Cards.css";
import isArray from "lodash/isArray";
import map from "lodash/map";
import cx from "classnames";

export default class IteratableCards extends Component {
  cardButtonClick(content) {
    this.props.openDetails(content)
  }
  renderNormalButtons(content) {
    return (
      <a
        href="#"
        className="btn btn-primary"
        onClick={() => this.cardButtonClick(content)}
      >
        {content}
      </a>
    );
  }
  renderArrayButtons(content) {
    return map(content, (item, index) => {
      return (
        <a key={index} href="#" className="btn btn-primary">
          {item}
        </a>
      );
    });
  }
  renderContent(content) {
    if (isArray(content)) {
      return this.renderArrayButtons(content);
    } else {
      return this.renderNormalButtons(content);
    }
  }
  renderCards(item, index) {
    const cardColor = cx("card card-block", this.props.cardColorClass);
    return (
      <div key={index}>
        <div className={`${cardColor}`}>
          <div className="card-header">{item.cardTitle}</div>
          <div className="card-body card-buttons">
            {this.renderContent(item.gridContent)}
          </div>
          <div className="card-footer" />
        </div>
      </div>
    );
  }
  render() {
    const { whichCard, cardData } = this.props;
    if (whichCard === "green") {
      return cardData.greenCard.map((item, index) => {
        return this.renderCards(item, index);
      });
    } else if (whichCard === "blue") {
      return cardData.blueCard.map((item, index) => {
        return this.renderCards(item, index);
      });
    } else if (whichCard === "navyBlue") {
      return cardData.navyBlue.map((item, index) => {
        return this.renderCards(item, index);
      });
    }
  }
}
