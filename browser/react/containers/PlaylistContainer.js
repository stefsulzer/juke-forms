import React, { Component } from 'react';

import NewPlaylist from '../components/NewPlaylist';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      playlistName: '',
      disabled: true,
      initialLoad: true
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      playlistName: e.target.value,
      initialLoad: false
    })
    this.state.playlistName.length === 0 || this.state.playlistName.length > 16 ?
      this.setState({ disabled: true }) :
      this.setState({ disabled: false })
  }

  onSubmit(e) {
    e.preventDefault(); // Why e? e.preventDefault() : null;
    console.log("form value", this.state.playlistName);
    this.setState({
      playlistName: ''
    });
  }

  render() {
    const playlistName = this.state.playlistName;
    const disabled = this.state.disabled;
    const initialLoad = this.state.initialLoad;
    const inputLength = this.state.playlistName.length;


    return (
      <div>
        <NewPlaylist value={playlistName} disabled={disabled} onChange={this.onChange} onSubmit={
          (!initialLoad && inputLength > 0 && inputLength < 16) ?
            this.onSubmit :
            null
        } />
        {
          ( !initialLoad && (inputLength === 0 || inputLength > 16) ) ?
            <div className="alert alert-warning">Name is not valid</div> :
            null
        }
      </div>

    )
  }
}
