import React from 'react';
import Radium from 'radium';

const NewsItem = (props) =>{
  // debugger

  const title = props.article.title;

  const imgStyle = {
    "width": "60%",
    "border": "none",
    // "border": "1px solid #dfe1e5",
    "justifyContent": "center",
    "borderRadius": "8px 8px 0px 8px",
    "padding": "0px"
  };

  const pStyle ={
    "padding": "5px"
  };

  const style = {
    flexDirection: "column",
    // "padding": "3px",
    border: "1px solid #dfe1e5",
    borderLeft: "none",
    borderBottom: "none",
    // "boxShadow": "1px 0px rgb(223, 225, 229)",
    borderRadius: "0px 8px 0px 0px",
    fontFamily: "'Raleway', sans-serif",
    fontSize: "13px",
    textAlign: "right",
    margin: "2px",
    ':hover' : {
      boxShadow: "7px 0px 0px 0px rgb(223, 225, 229)"
    }
  };
  return(
    <div style={style}>

      <a href={props.article.url}>
        <p style={pStyle}>{title}</p>
        <img style={imgStyle} src={props.article.urlToImage}></img>
      </a>

    </div>
  );

};

export default Radium(NewsItem);
