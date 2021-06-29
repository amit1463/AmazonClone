import React from 'react'
import style from 'styled-components'
import NumberFormat from 'react-number-format'
import { db } from './Firebase'
const CartItem = ({id,item}) => {
    let option=[]
    for(let i=1;i<Math.max(item.quantity+1,11);i++){
        option.push(<option value={i}>Qty:{i}</option>);
    }
    const changeQuantity=(newQuantity)=>{
        // console.log(newQuantity)
        db.collection("CartItems").doc(id).update({
            quantity:parseInt(newQuantity)
        })
    }
    const deleteItem=(e)=>{
        e.preventDefault();
        db.collection("CartItems").doc(id).delete();
    }
    return (
       <Container>
           <CartImage>
               <img src={item.image}/>
           </CartImage>
           <CartInfo>
               <CartInfoTop>
                   <h2>{item.name} </h2>
               </CartInfoTop>
               <CartInfoBottom>
                   <Quantity>
                       <select
                       value={item.quantity}
                       onChange={(e)=>changeQuantity(e.target.value)}
                       >
                           {option}
                       </select>
                       {/* {item.quantity} */}
                    </Quantity>
                   <Delete onClick={deleteItem}>Delete</Delete>
               </CartInfoBottom>
           </CartInfo>
           <CartPrice><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'Rs. '} />/-</CartPrice>
       </Container>
    )
}

export default CartItem
const Container=style.div`
display:flex;
padding:12px 0px 12px 0px;
border-bottom:2px solid black;
@media(max-width:637px){
    flex-wrap:wrap;
}
`
const CartImage=style.div`
    width:180px;
    height:180px;
    flex-shrink:0;
    flex-grow:0;
    margin-right:16px;
    img{
        object-fit:contain;
        width:100%;
        height:100%;
    }
`
const CartInfo=style.div`
flex-grow:1;
`
const CartInfoTop=style.div`
h2{
color:#007185;
font-size:18px;
}
`
const CartInfoBottom=style.div`
display:flex;
margin-top:4px;
`
const Quantity=style.div`
font-weigth:bolder;
select{
    padding:10px;
    background-color:#F2F2F2;
    border-radius:5px;
    outline:none;
}
`
const Delete=style.div`
color:#007185;
margin-left:16px;
margin-top:10px;
cursor:pointer;
:hover{
    text-decoration:underline;
}
`
const CartPrice=style.div`
font-size:18px;
font-weight:700;
margin-left:16px;
margin-top:10px;
`