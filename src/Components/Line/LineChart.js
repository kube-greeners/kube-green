import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';
import data from '../../Mockdata/c02emission.json'


/**
 * @param {Array} data - The data to show
 * @param {string} xField - Name of the x axis values
 * @param {string} yField - Name of the y axis values
 */
const LineChart = ({data,xField,yField}) => {


   
    const config = {
        data: data,
        xField,
        yField,
        xAxis: {
            tickCount: 10,
            title: {
                text: xField,
                style: { fontSize: 16 },
            },
        },
        yAxis: {
            title: {
                text: yField,
                style: { fontSize: 16 },
            },
        },
        slider: {
            start: 0.9,
            end: 1,
            trendCfg: {
                lineStyle: {
                    opacity:.1,
                    stroke:'black'
                }
            }
        },
    };
    return <Line {...config} />;
};

export default LineChart;

