import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ImageUploader from './components/ImageLoader'

class App extends React.Component {

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
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to Reac322t2</h2>
                </div>
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

export default App;
