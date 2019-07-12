import React from 'react';
import Radium from 'radium';

const NewsItem = (props) =>{


  let title = props.article.title;
  let url = props.article.url;
  let imageUrl = props.article.imageurl;

  const newsDate = new Date(props.article.published_on*1000);
  const timediff = Date.now()-newsDate;
  let newsDay;
  if (timediff/1000/60 < 60){
    newsDay = (timediff/1000/60).toFixed(0).toString() + "m ago";
  }else{
    if (timediff/1000/60/60 < 24){
      newsDay = (timediff/1000/60/60).toFixed(0).toString() + "h ago";
    }else{
      newsDay = newsDate.toDateString().slice(4);
    }
  }


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

    <a className="news-link" href={url}>
          <div  className="news-item">
            <img src={imageUrl}/>
            <div className="news-iteminfo">
              <div className="news-itemsourceinfo">
                <h2 className="news-itemsource">{props.article.name}</h2>
                <h2 className="news-itemdatetime">{newsDay}</h2>
              </div>
              <h2 className="news-itemtitle">{title}</h2>
              <h2 className="news-itemdescription">{props.article.body}</h2>
              <h2></h2>
            </div>
          </div>
        </a>

  );

};
// <div style={style}>
//
//   <a href={url}>
//     <p style={pStyle}>{title}</p>
//     <img style={imgStyle} src={imageUrl}></img>
//   </a>
//
// </div>
export default Radium(NewsItem);
