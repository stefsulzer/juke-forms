import React, { Component } from 'react';
import axios from 'axios';

import NewPlaylist from '../components/NewPlaylist';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      playlistName: '',
      disabled: true,
      onInitialLoad: true
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const clickValue =  e.target.value;

    this.setState({
      playlistName: clickValue,
      onInitialLoad: false
    });

    (!clickValue || clickValue.length > 16) ?
      this.setState({ disabled: true }) :
      this.setState({ disabled: false });

  }

  onSubmit(e) {
    e.preventDefault(); // Why e? e.preventDefault() : null;
    this.props.createPlaylist(this.state.playlistName);
    this.setState({
      playlistName: "",
      onInitialLoad: true
    });
  }


  render() {
    const playlistName = this.state.playlistName;
    const disabled = this.state.disabled;
    const onInitialLoad = this.state.onInitialLoad;
    const inputLength = this.state.playlistName.length;


    return (
      <div>
        <NewPlaylist value={playlistName} disabled={disabled} onChange={this.onChange} onSubmit={
          (!onInitialLoad && inputLength > 0 && inputLength < 16) ?
            this.onSubmit :
            null
          }
         />
        {
          ( !onInitialLoad && (inputLength === 0 || inputLength > 16) ) ?
            <div className="alert alert-warning">Name is not valid</div> :
            null
        }
      </div>

    )
  }
}
