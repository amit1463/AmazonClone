import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
const Navbar = ({cartItems}) => {
    const getCount=()=>{
        let count=0;
        cartItems.forEach((item)=>{
            count+=item.product.quantity;
        })
        return count;
    }
    return (
        <Nav>
          <Link to="/amazon-clone"> <Logo>
                <img src={"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"}/>
           </Logo></Link>
           <Location>
               <Locationlogo>
               <RoomOutlinedIcon/>
               </Locationlogo>
              <LineOne>Hello<br/>Choose Address</LineOne>
           </Location>
           <Search>
               <Inputfield type="text"/>
               <SearchLogo>
               <SearchIcon/>
               </SearchLogo>
           </Search>
           <Credential>
               Login/SignUp
           </Credential>
           <Link to="/cart"><Cart>
               <ShoppingCartIcon/>
               <Cartcount>{getCount()}</Cartcount>
           </Cart></Link>
        </Nav>    
    )
}
export default Navbar
const Nav=styled.div`
    background-color:#0F1111;
    display:flex;
    color:white;
    align-items:center;
    justify-content:space-between;
    @media(max-width:900px){
        flex-wrap:wrap;
    }
`
const Logo=styled.div`
   img{
       width:100px;
       margin:10px;
   }
`
const Location=styled.div`
   display:flex;
   margin-right:20px;
`
const Locationlogo=styled.div`
display:flex;
align-items:center;
`
const LineOne=styled.div`
font-size:15px;
`
const Search=styled.div`
display:flex;
flex-grow:1;
align-items:center;
margin-right:20px;
:focus-within{
    border:2px solid #F90;
    border-radius:6px;
}
`
const Inputfield=styled.input`
flex-grow:1;
font-size:25px;
border-radius:5px 0px 0px 5px;
outline:none;
border:2px solid white;
`
const SearchLogo=styled.div`
background-color:#febd69;
color:black;
padding:4px 5px 3.5px 5px;
border-radius:0px 5px 5px 0px;
`
const Credential=styled.button`
background-color:#febd69;
border:2px solid black;
border-radius:3px;
color:white;
padding:8px 5px 8px 5px;
margin-right:20px;
cursor:pointer;
font-size:15px;
@media(max-width:900px){
    margin-top:10px;
    margin-bottom:10px;
}
`
const Cart=styled.div`
   display:flex;
   color:white;
   margin-right:10px;
`
const Cartcount=styled.div`
color:#febd69;
`