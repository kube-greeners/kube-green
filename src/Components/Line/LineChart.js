import React from 'react';
import { Line } from '@ant-design/charts'; 


/**
 * @param {Array} data - The data to show. Must be an array of objects like
 * @example 
 * const data = [
 *      {
 *          valueOne:"test" //Y-axis
 *          valueOne:20 //X-axis
 *      },
 *      {
 *          valueOne:"test2" 
 *          valueOne:30 
 *      }
 * ]
 */
const LineChart = ({data}) => {

    
    const [xField,yField] = Object.keys(data[0])

    
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

