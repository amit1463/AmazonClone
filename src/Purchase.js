import React from 'react'
import styled from 'styled-components'
import CartItem from "./CartItem"
const Purchase = ({cartItems}) => {
    return (
        <Container>
            <Title>Added Items</Title>
            <hr/>
            <ItemContainer>
                {
                    cartItems.map((item)=>(
                        <CartItem
                            id={item.id}
                            item={item.product}
                        />
                    ))
                }
            </ItemContainer>
        </Container>
    )
}

export default Purchase
const Container=styled.div`
height:100%;
flex:0.7;
margin-right:18px;
padding:20px;
background-color:#F2F2F2;
box-shadow:0 0 3px black;
`
const Title=styled.div`
font-size:25px;
font-weight:bolder;
`
const ItemContainer=styled.div`
`