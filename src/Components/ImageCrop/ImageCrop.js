import React, {Component} from 'react';

import {Cropper} from 'react-image-cropper';

import './ImageCrop.css';

const styles = {
    source_img: {
      WebkitFilter: 'blur(3.5px)',
      filter: 'blur(3.5px)'
    },
    modal: {
      opacity: 0.5,
      backgroundColor: '#fff'
    },
    dotInner: {
      borderColor: '#ff0000'
    },
    dotInnerCenterVertical: {
      backgroundColor: '#ff0000'
    },
    dotInnerCenterHorizontal: {
      backgroundColor: '#ff0000'
    }
  }

export default class ImageCrop extends Component {
  constructor () {
    super();
    this.state = {
      crop: {
        aspect: 34 / 13
      },
      image: ''
    };
  }
  componentDidMount = () => {
    // Assuming only image
    var file = this.props.image;
    var reader = new window.FileReader();
    var url = reader.readAsDataURL(file);
    var root = this
    reader.onloadend = function (e) {
      root.setState(prevState => {
        prevState.image = e.srcElement.result;
        return prevState;
      })
    }
  }
  handleSubmit = () => {
    const img = this.refs.imageCropper.crop();
    const croppedImage = new Image();
    croppedImage.src = img;
    document.body.appendChild(croppedImage);
    console.log(croppedImage)
    this.props.handleUpload(croppedImage)
  }
  render () {
      return (
        <div className='crop-modal'>
          <div className='image-cropper'>
            <Cropper src={this.state.image} ref='imageCropper' ratio={this.state.crop.aspect} styles={styles} onChange={this.onChange}/>
            <div className='modal-buttons'>
              <button type='button' className='btn-cancel' onClick={this.props.handleCancelCrop}>Cancel crop</button>
              <button type='button' className='btn-submit' onClick={this.handleSubmit}>Upload image</button>
            </div>
          </div>
        </div>
      );

  }
}
