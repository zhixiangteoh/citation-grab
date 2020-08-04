import React from "react";

class List extends React.Component {
  render() {
    return (
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
    );
  }
}

export default List;
