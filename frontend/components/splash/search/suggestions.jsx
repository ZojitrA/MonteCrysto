import React from 'react';
import {Link} from 'react-router-dom';
import {getStockBy} from '../../../actions/stock_actions';
//
const Suggestions = (props) => {
  const someFunc = (ticker) => {
    return () => {
      props.getStockBy(ticker).then(
        () => props.history.push(`/stock/${ticker}`),
        (err) => 'this is an error'
      ).then(
        () => props.wipeState()
      );
    };
  };

let options = [];

if(props.results){

  options = props.results.map((r, idx) => (
    <li key={idx} onClick={someFunc(r["1. symbol"])}>
      {r["1. symbol"]}: {r["2. name"]}
    </li>
  ));

} else {

  options = [];
}
  // <Link to={`/stock/${r["1. symbol"]}`}>
  //   {r["1. symbol"]}: {r["2. name"]}
  // </Link>

  const style = {
    "background": "whitesmoke",
    "cursor": "pointer",
    "border": "none",
    "borderRadius": "8px"
  };
  return (
    <ul style={style} className="search-suggestions">{options}</ul>
    );
};

export default Suggestions;
