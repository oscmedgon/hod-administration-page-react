import React, {Component} from 'react'
import CKEditor from 'react-ckeditor-component'

import {AddNewArticle} from '../../Services'
import './styles.css'

class NewArticle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      category: '',
      featured: false,
      body: ''
    }
    this.onChange = this.onChange.bind(this)
    this.handleChanche = this.handleChanche.bind(this)
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
  handleChanche (e) {
    const fieldToUpdate = e.target.id
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
  handleSubmit (e) {
    e.preventDefault()
    AddNewArticle(this.state)
      .then(console.log('todo ha ido bien'))
      .catch(console.log('Algo ha ido mal'))
  }

  render () {
    return (
      <div>
        <h2 className='section-title'>
          New article
        </h2>
        <form className='new-article-body' onSubmit={this.handleSubmit} >
          <div className='new-article-section title-section'>
            <input id='title' name='title' data-field='title' type='text' onChange={this.handleChanche} value={this.state.title} className='new-article-title' placeholder='Insert article title here...' required />
          </div>
          <div className='new-article-section category-section'>
            <select name='category' id='category' data-field='category' onChange={this.handleChanche} defaultValue={this.state.category} value={this.state.category} required>
              <option value='' disabled>Select a category</option>
              <option value='noticias'>News</option>
              <option value='avisos'>Advices</option>
              <option value='eventos'>Events</option>
              <option value='sorteos'>Giveaways</option>
            </select>
          </div>
          <div className='new-article-section featured-section'>
            <label htmlFor='featured'>Mark article as featured: </label>
            <input type='checkbox' ref='featured' name='featured' data-field='fetured' onChange={this.handleCheckBox} />
          </div>
          <CKEditor
            activeClass='p10 article-editor'
            content={this.state.body}
            events={{
              'change': this.onChange
            }}
          />
        </form>
      </div>
    )
  }
}

export default NewArticle
