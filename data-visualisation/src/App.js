import "./App.css";
import React, { Component } from "react";
import Heading from "./components/Heading";
import Search from "./components/Search";
import axios from "axios";

class App extends Component {
  state = {
    crimes: [],
    search: "YO17 7YQ",
    long: 0,
    lat: 0
  };
  render() {
    return (
      <div className="App">
        <Heading search={this.state.search} />
        <Search updateSearch={this.updateSearch} />
      </div>
    );
  }

  updateSearch = search => {
    this.setState({ search });
  };

  fetchLongLat = async () => {
    const { search } = this.state;
    const { data } = await axios.get(
      `http://api.postcodes.io/postcodes/${search}`
    );
    console.log(data);
    return { long: data.result.longitude, lat: data.result.latitude };
  };

  fetchCrimes = async () => {
    const { long, lat } = this.state;
    const { data } = await axios.get(
      `https://data.police.uk/api/crimes-street/all-crime?lat=${lat}&lng=${long}`
    );
    return data;
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (this.state.search !== prevState.search) {
      const longLat = await this.fetchLongLat();
      this.setState({ ...longLat });
    }
    if (
      this.state.lat !== prevState.lat ||
      this.state.long !== prevState.long
    ) {
      const crimes = await this.fetchCrimes();
      this.setState({ crimes });
      console.log(crimes);
    }
  };
}

export default App;
