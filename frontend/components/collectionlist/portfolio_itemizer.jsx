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
        <div className="watchlistTitleContainer">
          <li className="watchlist-title">{this.props.title}</li>
          <li style={{textAlign: "right", fontSize: "14px", fontWeight:"500"}}>Market Value</li>
        </div>
        <br/>
        {Object.keys(this.props.shares).map( (id, idx) =>

            {
              return(
                <PortfolioItem className="listItem" key={idx} history={this.props.history} ticker={this.props.stocks[id].ticker} quantity={this.props.shares[id]}/>
              );
          }
        )}
      </div>

    );
  }
}


export default PortfolioItemizer;
