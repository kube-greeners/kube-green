import React from 'react'
import { Col, Row, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentlySelectedNamespace,setCurrentlySelectedResource } from '../../redux/dashboardSlice';
const { Option } = Select;

export default function Selectors() {

    const {namespaces,resources} = useSelector(state => state.dashboard.selects);
    const dispatch = useDispatch();
    
    const nameSpaceSelected = ns => {
        dispatch(setCurrentlySelectedNamespace(ns))
    }

    const resourceSelected = rs => {
        dispatch(setCurrentlySelectedResource(rs))
    }

    return (
        <>
            <Row gutter={24} style={{ paddingTop: '7rem' }}>
                <Col span={7}>
                    <Selector 
                    data={namespaces.data} 
                    name="Namespace" 
                    defaultVal={namespaces.currentlySelected} 
                    style={{ display: 'block' }} 
                    onChange={nameSpaceSelected} />
                </Col>
                <Col span={7}>
                    <Selector
                        data={resources.data}
                        name="Resource" 
                        defaultVal={resources.currentlySelected} 
                        style={{ display: 'block' }} 
                        onChange={resourceSelected} />
                </Col>
            </Row>
        </>
    )
}

function Selector({ data, name,defaultVal , ...rest }) {

    const labelStyle = {
        marginBottom:'.5rem',
        display:'block',
        color:'#666666'
    }

    return (
        <>
            <label htmlFor={name} style={labelStyle}>{name}</label>
            <Select id={name} defaultValue={defaultVal} {...rest} >
                {data.map(n => <Option key={n} value={n}>{n}</Option>)}
            </Select>
        </>
    )
}
