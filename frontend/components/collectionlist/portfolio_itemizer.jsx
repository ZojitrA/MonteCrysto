import React from 'react';
import { withRouter } from 'react-router';
import PortfolioItem from './portfolio_list_item';

class PortfolioItemizer extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){




    return(
      <div>
        <li className="watchlist-title">{this.props.title}</li>
        <br/>
        {Object.keys(this.props.shares).map( (id, idx) =>

            {
              return(
                <PortfolioItem key={idx} history={this.props.history} ticker={this.props.stocks[id].ticker} quantity={this.props.shares[id]}/>
              );
          }
        )}
      </div>

    );
  }
}


export default PortfolioItemizer;
