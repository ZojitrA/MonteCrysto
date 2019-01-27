import React, { Component } from 'react';
import axios from 'axios';
import NewsItem from './newsItem';


// <h1>Hello {props.currentUser.first_name}</h1>
// <button onClick={props.logout}>Log Out</button>
// <Chart/>
// <Chart className="splash-chart" ticker="aapl"/>
class news extends Component {
  constructor(props){
    super(props);
    this.state = {news: [], ticker: this.props.ticker};

    this.getStuff.bind(this);
  }

getStuff(){
  if(this.state.ticker === undefined){

    const url1 = 'https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=77afed1e14d4491bae7f0dcabc44554f';
    const url2 = 'https://newsapi.org/v2/top-headlines?sources=cnbc&apiKey=77afed1e14d4491bae7f0dcabc44554f';
    const url3 = 'https://newsapi.org/v2/top-headlines?sources=reuters&apiKey=77afed1e14d4491bae7f0dcabc44554f';

    axios.get(url1)
    .then( payload => {

      let news = [...this.state.news].concat(payload.data.articles);

      this.setState({
        news: news
      });
    }).then(
    axios.get(url2)
    .then( payload => {
      let news = [...this.state.news].concat(payload.data.articles);
      this.setState({
        news: news
      });
    })).then(
    axios.get(url3)
    .then( payload => {
      let news = [...this.state.news].concat(payload.data.articles);
      this.setState({
        news: news
      });
    }));
}
else {
  const Your_X_RapidAPI_Key = "70aa6e6ee1mshec40bd9053c8851p14f93cjsn4a52069d8c8a";

//The query parameters: (update according to your search query)
let q = this.state.ticker; //the search query
let pageNumber = 1; //the number of requested page
let pageSize = 10; //the size of a page
let autoCorrect = false; //autoCorrectspelling
let safeSearch = false; //filter results for adult content

axios.get("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?q=" + q + "&pageNumber=" + pageNumber + "&pageSize=" + pageSize+ "&autoCorrect=" + autoCorrect+ "&safeSearch=" + safeSearch, { headers: { "X-RapidAPI-Key": Your_X_RapidAPI_Key }} )
.then(result => {

    console.log("HTTP status code: " + result.status);
    this.setState({news: result.data.value});
  }
);
}
}


  componentDidMount(){
    this.getStuff()
}
shuffle(array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

}

componentDidUpdate(prevProps){

  if(prevProps.ticker !== this.props.ticker){
    this.setState({ticker: this.props.ticker});
    this.getStuff();
  }
}

  render(){

    
    let articles;
    if(this.state.news.length > 0){


    articles = this.shuffle([...this.state.news]).map(article => {
        return(
          <NewsItem source={this.props.source} article={article}/>
        );
      }).filter((article, idx) => (idx%2 === 0));
    }

    var style = {
      "marginTop": "600px",
      "maxWidth": "300px",
      "marginLeft": "100px"
    };


    return(
      <div style={style}>

        {articles}

      </div>


    );

}
}

export default news;
