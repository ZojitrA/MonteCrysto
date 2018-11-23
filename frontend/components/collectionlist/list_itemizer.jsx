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
        <li className="watchlist-title">{this.props.title}</li>
        <br/>
        {this.props.tickers.map( (ticker, idx) =>
            {
              return(
                <Item key={idx} history={this.props.history} ticker={ticker}/>
              );
          }
        )}
      </div>

    );
  }
}


export default Itemizer;
