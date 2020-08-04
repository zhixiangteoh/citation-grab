import React from "react";

class List extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>This page is under development. Please come back later!</h2>
        <div className="ui divided list">
          <div className="item">
            <div className="content">
              <div className="header">Result 1</div>
              Citations
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header">Result 2</div>
              Citations
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default List;
