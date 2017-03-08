import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
// import classes from '../../layouts/CoreLayout/CoreLayout.scss';

export default class ImageUploader extends Component {
    allowedTypes = [
        'image/jpeg',
        'image/gif',
        'image/png'
    ];
    allowedSize = 10000000;
    constructor(props) {
        super(props);

        this.state = {
            // file: null
        };
    }

    onDrop = (accepted, rejected) => {
        if (rejected.length > 0 ) {
            return alert("Something went wrong.");
        }
        return this.props.addImage(accepted[0]);
    };

    onOpenClick = () => {
        this.refs.dropzone.open();
    };

    render() {

        const img_upload = this.props.file
            ?
            <div>
                <img
                    height='200px'
                    width='200px'
                    style={{
                        'display': 'block'
                    }}
                    src={this.props.file.preview || this.props.file}
                />
            </div>
            :
            <div className="downloadImgBtn">
                <Dropzone
                    ref="dropzone"
                    accept={this.allowedTypes}
                    maxSize={this.allowedSize}
                    multiple={false}
                    onDrop={this.onDrop}
                    className='downloadImgBtn'
                >
                    <div className='iconBlock'>
                        <span className='icon'></span>
                        <h4>{this.props.title}</h4>
                        <p>We recommend JPG, PNG or GIF.</p>
                    </div>
                </Dropzone>
            </div>;

        return (
            <div>
                {img_upload}
            </div>
        );
    }
}