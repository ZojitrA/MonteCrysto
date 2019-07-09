import React from 'react';
import Radium from 'radium';

const NewsItem = (props) =>{


  let title = props.article.title;
  let url = props.article.url;
  let imageUrl = props.article.imageurl;



  const imgStyle = {
    "width": "50%",
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
    borderRight: "2px solid whitesmoke",
    borderTop: "2px solid whitesmoke",
    // "boxShadow": "1px 0px rgb(223, 225, 229)",
    borderRadius: "0px 8px 0px 0px",
    fontFamily: "'Raleway', sans-serif",
    fontSize: "13px",
    textAlign: "right",
    margin: "2px",
    ':hover' : {
      boxShadow: "3px 0px 0px 4px whitesmoke"
    }
  };
  return(
    <div style={style}>

      <a href={url}>
        <p style={pStyle}>{title}</p>
        <img style={imgStyle} src={imageUrl}></img>
      </a>

    </div>
  );

};

export default Radium(NewsItem);
