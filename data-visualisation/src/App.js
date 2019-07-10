import "./App.css";
import React, { Component } from "react";
import Heading from "./components/Heading";
import Search from "./components/Search";
import Chart from "./components/Chart";
import axios from "axios";
import Table from "./components/Table";

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
        <Chart crimes={this.state.crimes} />
        <Table crimes={this.state.crimes} />
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchLongLat().then(longLat => {
      this.setState({ ...longLat });
    });
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
    }
  };
  updateSearch = search => {
    this.setState({ search });
  };

  fetchLongLat = async () => {
    const { search } = this.state;
    const { data } = await axios.get(
      `http://api.postcodes.io/postcodes/${search}`
    );
    return { long: data.result.longitude, lat: data.result.latitude };
  };

  fetchCrimes = async () => {
    const { long, lat } = this.state;
    const { data } = await axios.get(
      `https://data.police.uk/api/crimes-street/all-crime?lat=${lat}&lng=${long}`
    );
    return data;
  };
}

export default App;
