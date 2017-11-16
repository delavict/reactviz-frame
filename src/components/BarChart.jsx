import React from 'react';
import PropTypes from 'prop-types'; // Runtime type checking for React props and similar objects.
import {withFauxDOM} from 'react-faux-dom'; // enables faux dom management within react component. Usefull for D3
import styled from 'styled-components'; // allows you to write actual CSS code to style your components.
import _ from 'lodash';
import * as d3 from 'd3';

import Tooltip from './Tooltip';

//import with3DRenderer from './hocs/withD3Renderer';

//hover is a propped put bellow for the Wrapper component'

class BarChart extends React.Component{
    componentDidMount () {
        let data = this.props.data;
   
        const faux = this.props.connectFauxDOM('div', 'chart');

        const margin = {top: 20, right: 30, bottom: 30, left: 40};
        const width = 960 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;
        // Scaling
        // in v4 d3.scale.linear is scaleLinear
        let x = d3.scaleBand()
        .rangeRound([0,width], .1);
        //.range([0,1,2,3,4,5]);
        // x("A") = 0

        // rangeBands methods compute range values so as to divide the chart area into evenly spaced, evenly sized bands.
        let y = d3.scaleLinear()
        .range([height,0]);

        let xAxis = d3.axisBottom().scale(x);
        let yAxis = d3.axisLeft().scale(y);//.ticks(10, "%");;

        let chart = d3.select(faux).append("svg")
        .attr('width',width + margin.left + margin.right)
        .attr('height',height + margin.top + margin.bottom)
        .append('g')
        .attr('transform',"translate(" + margin.left + "," + margin.top + ")");

        x.domain(data.map(function(d){return d.name}));
        y.domain([0,d3.max(data, function(d){return d.value; })]);
    
        chart.append("g")
        .attr("class","x axis")
        .attr("transform","translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor","middle");
        //.style("font-size","2em");
    

    
        chart.append("g")
            .attr("class","y axis")
            .call(yAxis)
        .append("text")
            .attr("transform","rotate(-90)")
            .attr("y",6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Frequency");
    
        var bar = chart.selectAll(".bar")
            .data(data)
            .enter().append('rect')
            .attr("class","bar")
            .attr('x',function(d) {return x(d.name); })
            .attr("y", function(d){return  y(d.value); })
            .attr('height',function(d){return height - y(d.value);})
            .attr('width', x.bandwidth() - 5);


        this.props.animateFauxDOM(800);
      }
    
      render () {
        return (
          <div>
            <h2>Here is some fancy data:</h2>
            <div className='renderedD3'>
              {this.props.chart}
            </div>
          </div>
        )
    }
    
}

BarChart.defaultProps = {
    chart: 'loading'
  }

export default withFauxDOM(BarChart)