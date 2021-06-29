import React from 'react'
import style from 'styled-components'
import NumberFormat from 'react-number-format';
const TotalPurchase = ({getTotal,getCount}) => {
    return (
        <Container>
            <h2>Total ({getCount()} items) Value of : <NumberFormat value={getTotal()} displayType={'text'} thousandSeparator={true} prefix={'Rs. '} /> /-</h2><hr/><br/>
            <finalCheck>
                Checkout
            </finalCheck>
        </Container>
    )
}
export default TotalPurchase
const Container=style.div`
height:100%;
width:100px;
flex:0.3;
box-shadow:0 0 3px black;
padding:20px;
background-color:#F2F2F2;
@media(max-width:380px){
    margin-top:20px;
    width:200px;
    height:100%;
}
h2{
    color:black;
    font-size:20px;
    font-weight:bolder;
}
finalCheck{
    border:2px solid black;
    background-color:#febd69;
    padding:5px;
    font-size:15px;
    border-radius:4px;
    cursor:pointer
}
`