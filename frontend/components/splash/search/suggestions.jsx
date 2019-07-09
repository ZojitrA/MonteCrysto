import React from 'react';
import {Link} from 'react-router-dom';
import {getStockBy} from '../../../actions/stock_actions';
//
const Suggestions = (props) => {
  const someFunc = (ticker) => {
    return () => {
      props.getAllStocks().then(
        () => props.history.push(`/stock/${ticker}`),
        (err) => 'this is an error'
      ).then(
        () => props.wipeState()
      );
    };
  };

let options = [];

if(props.results){
  options = Object.values(props.results).map((r, idx) => {
    var symbol = r["ticker"];
    var symbolIdx = symbol.indexOf(props.query.toUpperCase());
    let lengthIdx;
    let normal1;
    let bold;
    let normal2;
    if(symbolIdx === -1){
      normal1 = symbol
      bold = ""
      normal2 = ""

    } else{
      lengthIdx = props.query.length + symbolIdx;
      normal1 = symbol.slice(0, symbolIdx);
      bold = symbol.slice(symbolIdx, lengthIdx);
      normal2 = symbol.slice(lengthIdx);
    }

// console.log(symbolIdx)

    return(

    <li key={idx} onClick={someFunc(r["ticker"])}>
      <div style={{display:"inline-block"}}>
        {normal1}
      </div>
      <div style={{display:"inline-block", fontWeight: "600"}}>
        {bold}
      </div>
      <div style={{display:"inline-block"}}>
        {normal2}:&nbsp;
      </div>
      <div style={{display:"inline-block"}}>
        {r["name"]}
      </div>
    </li>

  );
});

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
