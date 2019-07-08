import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './suggestions'


const API_URL = 'api/stocks/search/'


class Search extends Component {

  constructor(props){
    super(props)
    this.state = {
      query: '',
      stockResults: [],
      cryptoResults: []
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.wipeState = this.wipeState.bind(this);

  }
  componentDidMount(){
    this.props.getAllStocks()


  }

  getInfo() {
    axios.get(`${API_URL}${this.state.query}`).then( data => {
      // debugger
        this.setState({
          stockResults: data.data
        })
      })
  }
  // ZRQW53GP2UJEJ1UK

  handleInputChange(){

    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query.length > 0) {
          this.getInfo()
        }
      else if(!this.state.query) {
        this.wipeState()
      }
    })
  }
  wipeState(){

    this.setState({
      stockResults: [],
      query: ""
    })
  }


  render() {

    return (
      <div >
      <form className="search-bar">
        <input
          placeholder="Search For Ticker"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
          value={this.state.query}
        />
      </form>
      <Suggestions wipeState={this.wipeState} results={this.state.stockResults} getStockBy={this.props.getStockBy} query={this.state.query}history={this.props.history} />
    </div>
    )
  }
}

export default Search
