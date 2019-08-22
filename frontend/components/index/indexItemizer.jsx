import React from 'react';
import { withRouter } from 'react-router';
import Item from './indexItem';

class IndexItemizer extends React.Component {
  constructor(props) {
    super(props);
    this.state ={by_name: true, by_ticker: false, by_market_cap: false }
  }

  render(){

    let items;

    if(this.props.stocks['ETH'].USD){

      items = Object.keys(this.props.stocks).map( (ticker, idx) =>

      {
        return(
          <Item className="indexItem" key={idx} history={this.props.history} ticker={ticker}
            name={this.props.stocks[ticker].name}
             price={this.props.stocks[ticker].USD.PRICE} marketCap={this.props.stocks[ticker].USD.MKTCAP} change={this.props.stocks[ticker].USD.CHANGEPCT24HOUR}/>
        );
      }
    );
    }



    return(
      <ul>
        {items}
      </ul>

    );
  }
}


export default IndexItemizer;
