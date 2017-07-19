import './style/main.scss'
import React from 'react'
import ReactDom from 'reac-dom'
import superagent from 'superagent'

const API_URL = 'http://www.reddit.com/r'

class RedditSearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subRedditName: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubRedditNameChange = this.handleSubRedditNameChange.bind(this)

  }

  handleSubRedditnameChannge(e) {
    this.setState({subRedditName: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    superagent.get(`${API_URL}/${this.state.subRedditName}.json`)
    .then()
  }
}
