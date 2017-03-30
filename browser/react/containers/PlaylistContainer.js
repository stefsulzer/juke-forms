import React, { Component } from 'react';

import NewPlaylist from '../components/NewPlaylist';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      playlistName: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

    onChange (e) {
      this.setState({
        playlistName: e.target.value })
    }

    onSubmit (e) {
      e.preventDefault(); // Why e? e.preventDefault() : null;
      console.log("form value", this.state.playlistName);
      this.setState({
        playlistName: ''
      });
    }

  render() {
    const playlistName = this.state.playlistName;
    const inputLength = this.state.playlistName.length;


    return (
              <NewPlaylist value={ playlistName }onChange={ this.onChange } onSubmit={
                  (inputLength > 0 &&  inputLength < 16) ?
                  this.onSubmit :
                  null
              }/>

              )
  }
}
