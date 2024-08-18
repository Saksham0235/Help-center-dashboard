
import React from 'react';
import { Card} from 'antd';
import './module.css'

const CardList = ({ data }) => (
    <Card
        title={data.title}
        key={data.id}
        style={{
            width: 300,
            border:'1px solid lightgrey'
        }}
        className='card'
    >
      <p >{data.description}</p>
    </Card>

);
export default CardList;