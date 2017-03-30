import React, { Component } from 'react';

import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';


export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({inputValue: e.target.value})
  }

  render() {
    const filteredArtists = this.props.artists.filter(artist =>
      artist.name.includes(this.state.inputValue)
    );
    
   return (
          <div>
            <FilterInput handleInput={this.handleInput} /*inputValue={this.state.inputValue}*/ />
            <Artists artists={filteredArtists} />
          </div>
          )
  }

}
