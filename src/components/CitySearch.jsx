import React, { Component } from "react";
import { InfoAlert } from "./Alert.jsx";

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],    
    showSuggestions: undefined,
    infoText: '...',
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'No such city',
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: '...',
      });
    }
  };
  
  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
    });
    this.props.updateEvents(suggestion);
  }

  render() {
    return (
      <div className="CitySearch">
        <input
          type="text"
          className="city" 
          placeholder="Search for a city..."
          value={this.state.query}
          onChange={this.handleInputChange}
          onFocus={() => { this.setState({ showSuggestions: true }) }}
        />
        <ul className="suggestions" 
            style={this.state.showSuggestions ? {} : { display: 'none' }}>
          {this.state.suggestions.map((suggestion) => (
            <li key={suggestion}
                onClick={() => this.handleItemClicked(suggestion)}
                >{suggestion}
            </li>
          ))}
          <li onClick={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
          </li>
          <InfoAlert text={this.state.infoText} />  
        </ul>
                  
      </div>
    );
  }
}

export default CitySearch;