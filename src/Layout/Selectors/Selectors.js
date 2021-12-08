import React from 'react'
import { Col, Row, Select } from 'antd'
import { useSelector } from 'react-redux'
const { Option } = Select;

export default function Selectors() {

    const {namespaces,resources} = useSelector(state => state.dashboard.selects);
    return (
        <>
            <Row gutter={24} style={{ paddingTop: '7rem' }}>
                <Col span={7}>
                    <Selector data={namespaces.data} name="Namespace" defaultVal={namespaces.currentlySelected} style={{display:'block'}}/>
                </Col>
                <Col span={7}>
                    <Selector data={resources.data} name="Resource" defaultVal={resources.currentlySelected} style={{display:'block'}}/>
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
            <label for={name} style={labelStyle}>{name}</label>
            <Select id={name} defaultValue={defaultVal} {...rest} >
                {data.map(n => <Option value={n}>{n}</Option>)}
            </Select>
        </>
    )
}
