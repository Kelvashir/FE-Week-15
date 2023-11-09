import React from "react";
import { House } from "./House";
import { housesApi } from "../rest/HousesApi";

//Performs GET and PUT operations from HousesApi
//Looks for data from House component
export class HousesList extends React.Component {
  state = {
    houses: [],
  };

  componentDidMount() {
    this.fetchHouses();
  }

  fetchHouses = async () => {
    const houses = await housesApi.get();
    this.setState({ houses });
  };

  updateHouse = async (updatedHouse) => {
    await housesApi.put(updatedHouse);
    this.fetchHouses();
  };

  render() {
    return (
      <div>
        {this.state.houses.map((house) => (
          <House house={house} key={house._id} updateHouse={this.updateHouse} />
        ))}
      </div>
    );
  }
}