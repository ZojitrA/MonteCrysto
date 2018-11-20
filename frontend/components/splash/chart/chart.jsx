import React, { Component } from 'react'
import axios from 'axios'
import { scaleTime, scaleLinear } from "@vx/scale";
import { curveMonotoneX } from '@vx/curve';
import { extent, max, bisector } from "d3-array"
import { AreaClosed, Line, Bar, LinePath } from '@vx/shape';
import { withTooltip, Tooltip } from "@vx/tooltip";
import { localPoint } from "@vx/event";
import { timeFormat } from "d3-time-format";


const width = 500;
const height = 300;
const formatDate = timeFormat("%b %d, '%y");

const xSelector = d => new Date(d.time);
const ySelector = d => d.price;

const bisectDate = bisector(xSelector).left;

class Chart extends Component {

  constructor(props){
    super(props)
    this.state = {
      symb: "AAPL",
      data: null,
      func: "function=TIME_SERIES_MONTHLY",
      interval: '',
      datakey: "Monthly Time Series"
    }



    // this.handleClick = this.handleClick.bind(this)

  }

  // handleClick(timeframe){
  //
  //     if(timeframe === "weekly"){
  //       this.setState({
  //         func: "function=TIME_SERIES_WEEKLY",
  //         interval: '',
  //         datakey: "Weekly Time Series"
  //     });
  //   } else if (timeframe === "daily"){
  //     this.setState({
  //       func: "function=TIME_SERIES_DAILY",
  //       interval: '',
  //       datakey: "Time Series (Daily)"
  //     });
  //   } else if (timeframe === "monthly"){
  //     this.setState({
  //       func: "function=TIME_SERIES_MONTHLY",
  //       interval: '',
  //       datakey: "Monthly Time Series"
  //     });
  //   } else if (timeframe === "intraday"){
  //     this.setState({
  //       func: "function=TIME_SERIES_INTRADAY",
  //       interval: '&interval=5min',
  //       datakey: "Time Series (5min)"
  //     });
  //   }
  // }

componentDidMount() {

    const url = `https://www.alphavantage.co/query?${this.state.func}&symbol=${this.state.symb}${this.state.interval}&apikey=ZRQW53GP2UJEJ1UK`

    axios.get(url)
      .then(({ data }) => {
        const keyz = Object.keys(data[this.state.datakey])
        this.setState({
          data: keyz.map(time => {
            return{
              time,
              price: parseFloat(data[this.state.datakey][time]["4. close"])
            }
          })
        })
      })
  }
  handleTooltip({ e, data, xSelector, xScale, yScale }){

    const { showTooltip } = this.props;
    const { x } = localPoint(e);
    const x0 = xScale.invert(x);
    const index = bisectDate(data, x0, 1);

    const d0 = data[index - 1];
    const d1 = data[index];
    let d = d0;
    if (d1 && d1.date) {
      d = x0 - xSelector(d0) > xSelector(d1) - x0 ? d1 : d0;
    }

    showTooltip({
      tooltipData: d,
      tooltipLeft: xScale(xSelector(d)),
      tooltipTop: yScale(ySelector(d)),
    });
  };

  render() {

   const { data } = this.state;

const { showTooltip, hideTooltip, tooltipData, tooltipTop, tooltipLeft } = this.props;

if (!data) return null;
   const padding = 100;
   const xMax = width - padding;
   const yMax = height - padding;

   const xScale = scaleTime({
  range: [padding, xMax],
  domain: extent(data, xSelector),
});

  const dataMax = max(data, ySelector);
  const yScale = scaleLinear({
    range: [yMax, padding],
    domain: [0, dataMax + (dataMax / 3)],
  });
   return (
     <div>
     <svg width={width} height={height}>
       <rect x={0} y={0} width={width} height={height} fill="#32deaa" />
         <LinePath
            data={data}
            xScale={xScale}
            yScale={yScale}
            x={xSelector}
            y={ySelector}
            strokeWidth={1}
            stroke="#FFF"
            strokeLinecap="round"
            fill="transparent"
          />
          <Bar
          x={0}
          y={0}
          width={width}
          height={height}
          fill="transparent"
          data={data}
          onMouseMove={data => e =>  this.handleTooltip({
      e,
      data,
      xSelector,
      xScale,
      yScale,
    })}
          onMouseLeave={data => event => hideTooltip()}
        />
        {tooltipData && (
    <g>
      <Line
        from={{ x: tooltipLeft, y: 0 }}
        to={{ x: tooltipLeft, y: yMax }}
        stroke="#5C77EB"
        strokeWidth={4}
        style={{ pointerEvents: "none" }}
        strokeDasharray="4,6"
      />
      <circle
        cx={tooltipLeft}
        cy={tooltipTop}
        r={4}
        fill="#5C77EB"
        stroke="white"
        strokeWidth={2}
        style={{ pointerEvents: "none" }}
      />
    </g>
  )}
     </svg>
     {tooltipData && (
  <div>
    <Tooltip
      top={tooltipTop - 12}
      left={tooltipLeft + 12}
      style={{
        backgroundColor: "#5C77EB",
        color: "#FFF",
      }}
    >
      {`$${ySelector(tooltipData)}`}
    </Tooltip>
    <Tooltip
      top={yMax - 30}
      left={tooltipLeft}
      style={{
        transform: "translateX(-50%)",
      }}
    >
      {formatDate(xSelector(tooltipData))}
    </Tooltip>
  </div>
)}
   </div>
   )
 }

}

// <button onClick={() => this.handleClick("weekly")}>"Weekly"</button>
// <button onClick={() => this.handleClick("monthly")}>"Monthly"</button>
// <button onClick={() => this.handleClick("daily")}>'Daily'</button>
// <button onClick={() => this.handleClick("intraday")}>'Intra'</button>

export default withTooltip(Chart)
