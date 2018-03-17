import React, { Component } from "react";
import IteratableCards from "./IteratableCards.js";
import cardData from "../../mocks/mockCards.json";

export default class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: false
    };
  }
  renderDetails(content) {
    // console.log(this.state.showDetails);
    // this.setState({
    //   showDetails: !this.state.showDetails,
    //   content
    // });
  }
  render() {
    console.log(cardData);
    return (
      <div className="container-fluid cards-container">
        <div className="cards-heading-block">CLAIMS</div>
        <div className="row">
          <IteratableCards
            cardData={cardData}
            whichCard={"green"}
            cardColorClass={"green-card-color"}
            openDetails={this.renderDetails}
          />
        </div>
        {this.state.showDetails && (
          <div className="row">
            <div className="card">
              <h5 className="card-header">{this.state.content}</h5>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        )}
        <div className="cards-heading-block">CARE</div>
        <div className="row">
          <IteratableCards
            cardData={cardData}
            whichCard={"blue"}
            cardColorClass={"blue-card-color"}
            openDetails={this.renderDetails}
          />
        </div>
        <div className="cards-heading-block">{"EM&B"}</div>
        <div className="row">
          <IteratableCards
            cardData={cardData}
            whichCard={"navyBlue"}
            cardColorClass={"navyblue-card-color"}
            openDetails={this.renderDetails}
          />
        </div>
      </div>
    );
  }
}
