import React, {Component} from 'react';

import './App.css';
import ImageUploader from './components/ImageLoader'

export default class AppImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edit_mode: false,
            profile: props.profile,
            errors: {},
            confirmation_dialog: false,
            data_loaded: false,
            submit_button: true

        }
    }

    render() {
        return (
            <div className="App">
                <ImageUploader
                    title="Upload company logo"
                    addImage={this._addImage}
                    file={this.state.logo}
                />
            </div>
        );
    }

    _addImage = (logo) => {
        this.setState({logo});
    };
}

