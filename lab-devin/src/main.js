import './style/main.scss'
import React from 'react'
import ReactDom from 'reac-dom'
import superagent from 'superagent'

const API_URL = 'http://www.reddit.com/r'

class RedditSearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subReddit: '',
      searchLimit: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLimitChange = this.handleLimitChange.bind(this)
    this.handleSubRedditNameChange = this.handleSubRedditNameChange.bind(this)


  }

  handleSubRedditNameChannge(e) {
    this.setState({subRedditName: e.target.value})
  }

  handleLimitChange(e) {
    this.setState({searchLimit: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.searchSub(this.state.subReddit, this.state.searchLimit)
  }

  render() {
    return (
      <div className='form-box'>
        <form onSubmit={this.handleSubmit} className="search-form" >
          <input
            type='text'
            name='subReddit'
            placeHolder='subReddit'
            value={this.state.subReddit}
            onChange={this.state.handlesubRedditNameChange}
          />
          <input
            type='text'
            name='searchLimit'
            placeHolder='number of threads desired'
            value={this.state.searchLimit}
            onChange={this.state.handleLimitChange}
          />
        </form>
      </div>

    )
  }
}
