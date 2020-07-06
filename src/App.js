import React, { Component } from "react";
import "./App.css";
import CardList from "./components/cards-list/cards-list.component.jsx";
import Search from "./components/search-component/search.component.jsx"

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ users: users }));
  }

  // eslint-disable-next-line react/require-render-return
  render() {

    return (<div className="App">
      <h1>Monsters</h1>
      <Search placeholder="search here" handleChange={e => this.setState({
        searchField: e.target.value
      })}></Search>

      <CardList users={this.state.users} searchElement={this.state.searchField}></CardList>
    </div>);
  }
}

export default App;
