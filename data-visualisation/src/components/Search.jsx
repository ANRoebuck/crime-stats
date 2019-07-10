import React, { Component } from "react";

class Search extends Component {
  state = {
    search: ""
  };
  render() {
    return (
      <div>
        <form className="search" onSubmit={this.handleSubmit}>
          <input
            className="searchInput"
            type="text"
            placeholder="Enter Postcode"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button
            className="searchButton"
            type="submit">Submit
          </button>
        </form>
      </div>
    );
  }

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { updateSearch } = this.props;
    const { search } = this.state;

    updateSearch(search);
    this.setState({
      search: ""
    });
  };
}

export default Search;
