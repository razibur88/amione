import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios';

const Extra = () => {
    let [info, setInfo] = useState([])
    
    let getData = () =>{
        axios.get("https://dummyjson.com/products").then((response)=>{
            setInfo(response.data.products)
        })
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <>
      <Container>
        <Row>
                {info.map((item)=>(
                <Col lg={4}>
              
                 <div>
                 <h3>{item.title}</h3>
                   <div className="p_item">
                   <img src={item.thumbnail} className='w-100' alt="" />
                   </div>
                   <p>{item.description}</p>
                   <p>${item.price}</p>
                   <p>{item.stock}</p>

                 </div>
              
            </Col>
                ))}☻
        </Row>
      </Container>
    </>
  )
}

export default Extra