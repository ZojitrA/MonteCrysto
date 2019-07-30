import React from 'react';
import { withRouter } from 'react-router';
import Item from './indexItem';

class IndexItemizer extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){




    return(
      <div>
        <div className="indexTitleContainer">
          <li className="index-title">{this.props.title}</li>

        </div>
        <br/>
        {Object.keys(this.props.stocks).map( (ticker, idx) =>

            {
              return(
                <Item className="indexItem" key={idx} history={this.props.history} ticker={ticker}/>
              );
          }
        )}
      </div>

    );
  }
}


export default IndexItemizer;
