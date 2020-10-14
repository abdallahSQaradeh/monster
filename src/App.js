import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/searchBox/searchBox.component"
class App extends Component {
  constructor()
  {
    super ();
    this.state = {
    monsters: [],
    searchField: "",
  };
  this.onchangeHandleronchangeHandler = this.onchangeHandler.bind(this);
  }
  
  onchangeHandler = (e)=>
  {
    this.setState({ searchField: e.target.value }, () => {
      console.log(this.state);
    });
  }
  render() {
    const {searchField, monsters} = this.state;
    const filteredMonsters = monsters.filter((monster, index)=>
    {
     return  monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search monsters" handleChange={this.onchangeHandler}/>
        <CardList monsters={filteredMonsters} />
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
