import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
class App extends Component {
  state = {
    monsters: [],
    searchField: "",
  };
  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Searc monsters"
          onChange={(event) => {
            this.setState({ searchField: event.target.value }, () => {
              console.log(this.state);
            });
          }}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((users) => this.setState({ monsters: users }));
  }
}

export default App;
