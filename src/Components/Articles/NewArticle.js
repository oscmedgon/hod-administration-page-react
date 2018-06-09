import React, {Component} from 'react';
import CKEditor from 'react-ckeditor-component';
import {Redirect} from 'react-router-dom';
import toastr from 'toastr';

import ImageCrop from '../ImageCrop/ImageCrop';

import {AddNewArticle, uploadArticleImage} from '../../Services';
import './styles.css';

class NewArticle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      submited: false,
      title: '',
      category: '',
      featured: false,
      body: '',
      image: '',
      fileName: null,
      toggleCrop: false,
      tempImage: null
    }
    this.onChange = this.onChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleCheckBox = this.handleCheckBox.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  onChange (evt) {
    var newContent = evt.editor.getData()
    this.setState(prevState => {
      prevState.body = newContent
      return prevState
    })
  }
  handleChange (e) {
    const fieldToUpdate = e.target.name
    const newData = e.target.value
    this.setState(prevState => {
      prevState[fieldToUpdate] = newData
      return prevState
    })
  }
  handleCheckBox () {
    const featuredValue = this.refs.featured.checked
    this.setState(prevState => {
      prevState.featured = featuredValue
      return prevState
    })
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const res = await AddNewArticle(this.state)
      this.setState(prevState => {
        prevState.submited = true
        return prevState
      })
      toastr.success('Your article was successfuly published')
    }
    catch(e) {
      toastr.error('An error ocurred while trying to publish your article, try it later')
    }
  }
  HandleImage = async (e) => {
    e.preventDefault()
    let data = new FormData()
    let file = e.target.files[0]
    console.log(file)
    this.setState((prevState) => {
      prevState.fileName = file.name;
      prevState.tempImage = file;
      prevState.toggleCrop = true;
      return prevState;
    })
  }

  handleCancelCrop = () => {
    document.getElementById('imageUpload').reset();
    this.setState(prevState => {
      prevState.fileName = null;
      prevState.toggleCrop = false;
      prevState.tempImage = null;
      return prevState
    })
  }
  cropedImage = async (image) => {
    try {
      const response = await uploadArticleImage({image})
      this.setState(prevState => {
        prevState.image = response.data.image;
        prevState.toggleCrop = false;
        prevState.mpImage = null;
        return prevState
      })
      toastr.success('Image uploaded successfuly')
    }
    catch(e) {
      toastr.error('An error ocurred while trying upload your image')
    }
  }
  render () {
    return (
      <div>
        { this.state.toggleCrop &&
          <ImageCrop image={this.state.tempImage} changeImage={this.cropedImage} handleUpload={this.cropedImage} handleCancelCrop={this.handleCancelCrop}/>
        }
        <h2 className='section-title'>
          New article
        </h2>
        <form className='imageUpload' id='imageUpload' onChange={this.HandleImage}>
          <input className='input-file' type='file' id='file' name='avatar' accept='image/*'/>
          <label for='file' id='file-upload-label'>{this.state.fileName || 'Selecciona una imagen'}</label>
        </form>
        <div className='image-preview'>
          <img src={this.state.image} width='400px' alt='' />
        </div>
        <form className='new-article-body' onSubmit={this.handleSubmit} >
          <div className='new-article-section title-section'>
            <input id='title' name='title' data-field='title' type='text' onChange={this.handleChange} value={this.state.title} className='new-article-title' placeholder='Insert article title here...' required />
          </div>
          <div className='new-article-section category-section'>
            <select name='category' id='category' data-field='category' onChange={this.handleChange} defaultValue={this.state.category} required>
              <option value='' disabled>Select a category</option>
              <option value='noticias'>News</option>
              <option value='avisos'>Advices</option>
              <option value='eventos'>Events</option>
              <option value='sorteos'>Giveaways</option>
            </select>
          </div>
          <div className='new-article-section featured-section'>
            <label htmlFor='featured'>Mark article as featured: </label>
            <input className='set-featured' type='checkbox' ref='featured' name='featured' data-field='fetured' onChange={this.handleCheckBox} />
          </div>
          <CKEditor
            activeClass='p10 article-editor'
            content={this.state.body}
            events={{
              'change': this.onChange
            }}
          />
          <button type='submit' className='btn btn-primary btn-block btn-large'>Publish article</button>
        </form>
        {this.state.submited ? <Redirect to='/administration/articles' /> : <div />}
      </div>
    )
  }
}

export default NewArticle
