import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Line } from '@ant-design/charts'; 

import { fetchCO2EmissionData } from '../../Utilities/dataFetching';

/**
 * @param {Array} data - The data to show. Must be an array of objects like
 * @example 
 * const data = [
 *      {
 *          valueOne:"test" //X-axis
 *          valueTwo:20 //Y-axis
 *      },
 *      {
 *          valueOne:"test2" 
 *          valueTwo:30 
 *      }
 * ]
 */
const LineChart = ({data, loadingStatus}) => {

    const dispatch = useDispatch();

    useEffect(() => {
      const namespace = "production"
      const interval = "30m"
      const step = "10s"
      
      //Make sure we only fetch the data once. 
      //TODO: check edge cases for failed when we have the correct endpoint
      if(loadingStatus === 'idle') {
        dispatch(fetchCO2EmissionData({namespace,interval,step}))
      }

    }, [dispatch,loadingStatus])
    
    const [xField,yField] = Object.keys(data[0])

    const config = {
        data: data,
        xField,
        yField,
        height:500,
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

