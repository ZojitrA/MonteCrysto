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
    this.state = {news: null, ticker: this.props.ticker};

    this.getStuff = this.getStuff.bind(this);
  }

getStuff(){


    let url1 = `https://min-api.cryptocompare.com/data/v2/news/?categories=blockchain&excludeCategories=Sponsored&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`;

    axios.get(url1).then( payload => (



      this.setState({
        news: payload
      })

    ));
}



  componentDidMount(){
    this.getStuff();
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

// componentDidUpdate(prevProps){
//
//   if(prevProps.ticker !== this.props.ticker){
//     this.setState({ticker: this.props.ticker});
//     this.getStuff();
//   }
// }

  render(){

    let articles;
    if(this.state.news){


      debugger
    articles = this.state.news.data.data.map(article => {
        return(
          <NewsItem source="newsApi" article={article}/>
        );
      });
      debugger
    }

    var style = {
      "marginTop": "70px",
      "maxWidth": "300px",
      "marginLeft": "40px"
    };


    return(
      <div style={style}>

        {articles}

      </div>


    );

}
}

export default news;
