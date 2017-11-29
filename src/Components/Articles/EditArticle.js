import React, {Component} from 'react'
import CKEditor from 'react-ckeditor-component'
import {Redirect} from 'react-router-dom'
import toastr from 'toastr'

import {GetArticle, ModifyArticle, uploadArticleImage} from '../../Services'
import './styles.css'

class NewArticle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      submited: false,
      title: '',
      category: '',
      featured: false,
      body: '',
      image: ''
    }
    this.onChange = this.onChange.bind(this)
    this.handleChanche = this.handleChanche.bind(this)
    this.handleCheckBox = this.handleCheckBox.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    const {id} = this.props.match.params
    GetArticle(id)
    .then(response => {
      const article = response.data
      this.setState(prevState => {
        prevState.title = article.title
        prevState.image = article.image
        prevState.category = article.category
        prevState.featured = article.featured
        prevState.body = article.body
        return prevState
      })
    })
  }

  onChange (evt) {
    var newContent = evt.editor.getData()
    this.setState(prevState => {
      prevState.body = newContent
      return prevState
    })
  }
  handleChanche (e) {
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
      const {id} = this.props.match.params
      const response = await ModifyArticle(id, this.state)
      this.setState(prevState => {
        prevState.submited = true
        return prevState
      })
      toastr.success('Your article was successfulyupdated')
    }
    catch(e) {
      toastr.error('An error ocurred while trying to update your article')
    }
  }
  HandleImage = async (e) => {
    e.preventDefault()
    let data = new FormData()
    let file = e.target[0].files[0]
    // add the files to formData object for the data payload
    data.append('file', file)
    try{
      const fileUrl = await uploadArticleImage(data)
      this.setState(prevState => {
        prevState.image = fileUrl.data.imageLink
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
        <h2 className='section-title'>
          Editando el artículo {this.props.match.params.id}
        </h2>
        <form className='imageUpload' onSubmit={this.HandleImage}>
          <input className='input-file' type='file' id='file' name='avatar' acept='image/*'/>
          <label for='file' id='file-upload-label'>Selecciona una imagen</label>
          <button className='fa fa-camera fa-lg updateAvatar' type='submit'/>
        </form>
        <div className='image-preview'>
          <img src={this.state.image} width='400px' alt='' />
        </div>
        <form className='new-article-body' onSubmit={this.handleSubmit} >
          <div className='new-article-section title-section'>
            <input id='title' name='title' data-field='title' type='text' onChange={this.handleChanche} value={this.state.title} className='new-article-title' placeholder='Insert article title here...' required />
          </div>
          <div className='new-article-section category-section'>
            <select name='category' id='category' data-field='category' onChange={this.handleChanche} value={this.state.category} required>
              <option value='' disabled>Select a category</option>
              <option value='noticias'>News</option>
              <option value='avisos'>Advices</option>
              <option value='eventos'>Events</option>
              <option value='sorteos'>Giveaways</option>
            </select>
          </div>
          <div className='new-article-section featured-section'>
            <label htmlFor='featured'>Mark article as featured: </label>
            <input type='checkbox' ref='featured' checked={this.state.featured} name='featured' data-field='fetured' onChange={this.handleCheckBox} />
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
        {this.state.submited ? <Redirect to='/administration' /> : <div />}
      </div>
    )
  }
}

export default NewArticle
