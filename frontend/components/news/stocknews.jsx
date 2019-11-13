import React, { Component } from 'react';
import axios from 'axios';
import NewsItem from './newsItem';
import { CognitiveServicesCredentials } from 'ms-rest-azure';
import NewsSearchAPIClient from 'azure-cognitiveservices-newssearch';

// <h1>Hello {props.currentUser.first_name}</h1>
// <button onClick={props.logout}>Log Out</button>
// <Chart/>
// <Chart className="splash-chart" ticker="aapl"/>
class stockNews extends Component {
  constructor(props){
    super(props);
    this.state = {news: []};

    this.getStuff.bind(this);
  }

getStuff(){


  let search_term = `${this.props.ticker}`;

  axios.get(`https://min-api.cryptocompare.com/data/v2/news/?categories=${search_term}&excludeCategories=Sponsored&api_key={28d3b41970a81c30692ae9e00cc7174860d55306f66aa7c6f26a0f2bc7d2f6cd}`).then((result) => {
    this.setState({news: result.data.Data});
}).catch((err) => {
    throw err;
});
}


  componentDidMount(prevProps){

      this.getStuff();

}

componentDidUpdate(prevProps){
  if(this.props.ticker !== prevProps.ticker){
    this.getStuff();
  }
}

shuffle(array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (currentIndex !== 0) {
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
    if(this.state.news.length > 0){



    articles = [...this.state.news].filter((article) => (article.imageurl)).map((article, idx) => {
        return(
          <NewsItem key={-idx}article={article}/>
        );
      });
    }

    let style

    if(this.props.ticker === "blockchain"){
      style = {
        "marginTop": "70px",
        "paddingLeft": "35px"
      };

    }else{

      style = {
        "marginTop": "50px",
        "paddingLeft": "35px"
      };
    }




    return(

      <div style={style} className="news-divider">


        <h1 className="news-header">Recent News</h1>

        <div>

          {articles}

        </div>

      </div>


    );

}
}

export default stockNews;
