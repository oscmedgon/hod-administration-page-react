import React, {Component} from 'react'
import CKEditor from 'react-ckeditor-component'

import './styles.css'

class NewArticle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      content: 'content'
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange (evt) {
    var newContent = evt.editor.getData()
    console.log(newContent)
    this.setState({
      content: newContent
    })
  }
  render () {
    return (
      <h2 className='new-article-title'>
        New article
      </h2>
      <form className='new-article-body'>
        <div className='new-article-section'>
          <label htmlFor='title'>Title: </label>
          <input id='title' name='title' type='text' placeholder='Insert article title here...' required />
        </div>
        <div className='new-article-section'>
          <label htmlFor='title'>Category: </label>
          <select name='category' id='category' placeholder='Select one category' required>
            <option value='noticias'>News</option>
            <option value='avisos'>Advices</option>
            <option value='eventos'>Events</option>
            <option value='sorteos'>Giveaways</option>
          </select>
        </div>
        <div className='new-article-section'>
          <label htmlFor='featured'>Mark article as featured: </label>
          <input type='radio' name='featured' id='featured' />
        </div>
        <CKEditor
          activeClass='p10'
          content={this.state.content}
          events={{
            'change': this.onChange
          }}
        />
      </form>
    )
  }
}

export default NewArticle
