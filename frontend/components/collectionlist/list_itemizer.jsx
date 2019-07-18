import React from 'react';
import { withRouter } from 'react-router';
import Item from './list_item';

class Itemizer extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){


    return(
      <div>
        <div className="watchlistTitleContainer">
        <li className="watchlist-title">{this.props.title}</li>
        <li style={{textAlign: "right", fontSize: "14px", fontWeight: "500"}}>Daily Trend</li>
        </div>
        <br/>
        {this.props.tickers.map( (ticker, idx) =>
            {
              return(
                <Item className="listItem" key={idx} history={this.props.history} ticker={ticker}/>
              );
          }
        )}
      </div>

    );
  }
}


export default Itemizer;
