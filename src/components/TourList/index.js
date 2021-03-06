import React, { Component } from "react";
import Tour from "../Tour";
import {tourData} from "../../tourData";
import "./tourlist.scss";

class TourList extends Component {
  state = {
    tours: tourData
  };
   removeTour = (id)  => {
    const filteredTours = this.state.tours.filter(tour => tour.id !== id);
    this.setState({
      tours: filteredTours
    })
  };
  render() {
    const { tours } = this.state;

    return (
      <section className="tour-list">
        {tours.map(tour => (
          <Tour handleRemove={this.removeTour} key={tour.id} tour={tour}>
          </Tour>
        ))}
      </section>
    );
  }
}

export default TourList;
