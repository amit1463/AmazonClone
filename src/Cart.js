import React from 'react'
import styled from 'styled-components'
import Purchase from './Purchase'
import TotalPurchase from './TotalPurchase'
const Cart = ({cartItems}) => {
    const getTotal=()=>{
        let total=0
        cartItems.forEach((item)=>{
            total+=(item.product.price*item.product.quantity);
        })
        return total;
    }
    const getCount=()=>{
        let count=0;
        cartItems.forEach((item)=>{
            count+=item.product.quantity;
        })
        return count;
    }
    return (
        <Container>
            <Purchase cartItems={cartItems}/>
            <TotalPurchase getCount={getCount} getTotal={getTotal}/>
        </Container>
    )
}

export default Cart
const Container=styled.div`
display:flex;
padding:14px 18px 0px 14px;
@media(max-width:380px){
    flex-wrap:wrap;
}
`