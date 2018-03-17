import React, { Component } from "react";
import { classNames as cx } from 'classnames/bind';

export default class Skeleton extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true
    }
  }
  _toggleFunc = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render() {
    const toggleHide = this.state.isHidden ? 'menu hidden' : 'menu';
    return (
      <div className="App">
        <div className={"gwos-header fill blacks"}>
          <div className={"brand-box fill blacks"}>
            <a>
              <img src={require('../assets/logo.png')}/>
              <span className={"white"}>
                Enterprise <strong>Reporting</strong>
              </span>
            </a>
          </div>

          <div className={"controls"}>
            <ul className={"menu dropdown"}>
              <li>
                <a>
                  See Alternate Motion &amp; Scroller{" "}
                  <i className={"fa fa-leaf gw-yellow"} />
                </a>
              </li>
            </ul>

            <ul className={"menu tool-bar dropdown right"}>
              <li>
                <a href={"#"} className={"button round"} onClick={this._toggleFunc}>
                  {" "}
                  User name
                </a>
                <ul className={toggleHide}>
                  <li>
                    <a href={"#"}>
                      <i className={"fa fa-cogs"} /> Account Settings
                    </a>
                  </li>
                  <li>
                    <a href={"#"}>
                      <i className={"fa fa-comments"} /> Feedback
                    </a>
                  </li>
                  <li>
                    <a href={"#"}>
                      <i className={"fa fa-question-circle"} /> Help Center
                      &amp; F.A.Q
                    </a>
                  </li>
                  <li>
                    <a href={"#"}>
                      <i className={"fa fa-power-off"} /> Sign Out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={"gwos-sub-header fill black marqueetainer"}
          style={{ borderTop: "1px #333 solid", overflow: "hidden" }}
        >
          <div className={"marquee"}>
            <p>
              <i className={"fa fa-cog fa-spin"} /> REMIDER! Reports need to BE
              DELIVERED TODAT…{" "}
            </p>
            <p className={"gw-yellow"}>
              Remember to label and reports accurately…{" "}
            </p>
            <p>
              {" "}
              Be <b>SURE</b> your <b>DATA</b> <i className={"fa fa-table"} /> is{" "}
              <b>COMPLETE</b> <i>before</i> exporting!{" "}
            </p>
          </div>
        </div>
        <div className={"gwos-body"}>
          <div className={"row expanded"}>
            <div className={"small-24 columns"}>&nbsp;</div>
          </div>
        </div>
      </div>
    );
  }
}
