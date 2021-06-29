import React from 'react'
import {useState,useEffect} from 'react'
import styled from 'styled-components'
import Items from './Items'
import {db} from "./Firebase"
const Home = () => {
    const [products,setProducts]=useState([])
    const getProducts=()=>{
        db.collection("products").onSnapshot((snapshot)=>{
            let tempProducts=[]
            tempProducts=snapshot.docs.map((doc)=>(
                {
                    id:doc.id,
                    product:doc.data()
                }
            ))
            setProducts(tempProducts);
        })
    }
    useEffect(()=>{
        getProducts();
    },[])
    return (
        <Container>
            <Banner>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/June/M21/Hin/1500x600_Hero-Tall_JPN._CB664880312_.jpg"/>
            </Banner>
            <Content>
                {
                    products.map((data)=>(
                        <Items
                            title={data.product.name}
                            price={data.product.price}
                            image={data.product.image}
                            id={data.id}
                        />
                    ))
                }
                {/* <Items/>
                <Items/>
                <Items/> */}
            </Content>
        </Container>
    )
}
export default Home
const Container=styled.div`
`
const Banner=styled.div`
img{
    width:100%;
    mask-image:linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0));
}
`
const Content=styled.div`
background-color:white;
margin-top:-300px;
display:flex;
@media(max-width:1140px){
    margin-top:-100px;
}
@media(max-width:662px){
    flex-wrap:wrap;
}
`
const Content2=styled.div`
background-color:white;
display:flex;
@media(max-width:662px){
    flex-wrap:wrap;
}
`
