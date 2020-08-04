import React from "react";

import Accordion from "./Accordion";
import serp from "../api/serp";

const KEY = "114815a4f5169d815ce522585ba6bbee133edc39e6348c97413cca21ac47f483";

class Search extends React.Component {
  state = {
    value: "Rubik's Cube",
    searches: [],
  };

  componentDidMount() {
    this.onFormSubmit(new Event("submit"));
  }

  onFormSubmit = async (event) => {
    event.preventDefault();

    this.setState({ searches: null });

    const sch_response = await serp.get("/search", {
      params: {
        engine: "google_scholar",
        q: this.state.value,
        hl: "en",
        api_key: KEY,
      },
    });

    this.setState({ searches: sch_response.data.organic_results });
  };

  getCitations = async (value) => {
    const cit_response = await serp.get("/search", {
      params: {
        engine: "google_scholar_cite",
        q: value,
        hl: "en",
        api_key: KEY,
      },
    });

    return cit_response.data.citations;
  };

  renderResults() {
    if (!this.state.searches) return <h2>Loading...</h2>;

    return (
      <Accordion
        searches={this.state.searches}
        getCitations={this.getCitations}
      />
    );
  }

  render() {
    return (
      <form ref={this.formRef} className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <label>Search citations</label>
          <div className="ui icon input">
            <input
              type="text"
              value={this.state.value}
              placeholder="Example: Functional Programming"
              onChange={(e) => this.setState({ value: e.target.value })}
            />
            <i className="search icon" />
          </div>
          {this.renderResults()}
        </div>
      </form>
    );
  }
}

export default Search;
