import React, { Component } from "react";
import { HousesList } from "./Components/HousesList";

//App function called from index.js
//Looks for data in HousesList component
class App extends Component {
  render() {
    return (
      <div>
        <HousesList />
      </div>
    );
  }
}

export default App;
