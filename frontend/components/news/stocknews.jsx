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

  let credentials = new CognitiveServicesCredentials('2d203a380f9c414a84bcb431ada82c94');
  let search_term = `${this.props.companyName} stock`;
  let client = new NewsSearchAPIClient(credentials);

  client.newsOperations.search(search_term).then((result) => {
    console.log(result);
    this.setState({news: result.value});
}).catch((err) => {
    throw err;
});
}


  componentDidMount(){
    if(this.props.companyName){
      this.getStuff();
    }
}

componentDidUpdate(prevProps){
  if(this.props.companyName != prevProps.companyName){
    this.getStuff();
  }
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
    if(this.state.news.length > 0){



    articles = this.shuffle([...this.state.news]).filter((article) => (article.image)).map((article) => {
        return(
          <NewsItem source="azure" article={article}/>
        );
      });
    }

    var style = {
      "marginTop": "-50px",
      "maxWidth": "280px",
      "marginLeft": "900px"
    };


    return(
      <div style={style}>

        {articles}

      </div>


    );

}
}

export default stockNews;
