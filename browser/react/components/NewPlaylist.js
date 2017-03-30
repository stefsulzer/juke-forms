import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const onSubmit = this.props.onSubmit;
        const onChange = this.props.onChange;
        const playlistName = this.props.value;

        // console.log("we are setting the playlistName from the Container's State", playlistName);

        return (
            <div className="well">
                <form className="form-horizontal" onSubmit={ onSubmit } >
                    <fieldset>
                        <legend>New Playlist</legend>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">Name</label>
                            <div className="col-xs-10">
                                <input className="form-control" type="text" onChange = { onChange } value={ playlistName } />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-10 col-xs-offset-2">
                                <button type="submit" className="btn btn-success" disabled={ !onSubmit } >Create Playlist</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}
