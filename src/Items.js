import React from 'react'
import styled from 'styled-components'
import {db} from "./Firebase"
// props={title,price,image,id}
const Items = ({title,price,image,id}) => {
    const addToCart=()=>{
        const cartItem=db.collection("CartItems").doc(id);
        cartItem.get().then((doc)=>{
            console.log(doc)
            if(doc.exists){
                cartItem.update({
                    quantity:doc.data().quantity+1
                })
            }
            else{
                db.collection("CartItems").doc(id).set({
                    name:title,
                    image:image,
                    price:price,
                    quantity:1
                })
            }
        })
    }
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Price>
                Rs. {price} /- 
            </Price>
            <CenterItem>
            <ProductPic>
                <img src={image}/>
            </ProductPic>
            <AddButton onClick={addToCart}>
                Add to Bag
            </AddButton>
            </CenterItem>
        </Container>
    )
}

export default Items
const Container=styled.div`
flex-wrap:wrap;
background-color:white;
height:400px;
width:600px;
z-index:100;
margin:20px;
padding:20px;
box-shadow:0px 0px 3px black;
`
const Title=styled.div`
font-size:15px;
font-weight:bold;
`
const CenterItem=styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const Price=styled.div`
margin:20px 0px 20px 0px;
font-weight:bold;
`
const ProductPic=styled.div`
img{
max-height:200px;
object-fit:contain;
}
`
const AddButton=styled.button`
margin-top:40px;
padding:5px 30px 5px 30px;
border-radius:3px;
background-color:#efbd69;
outline:none;
border:2px solid gray;
cursor:pointer;
`