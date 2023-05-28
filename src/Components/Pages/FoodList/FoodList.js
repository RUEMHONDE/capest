import React, { useEffect, useState } from 'react';
import './foodlist.css';
import regular from '../../../../src/regular.jpg';
import doublecheese from '../../../../src/doublecheese.jpg';
import chipsburger from '../../../../src/chipsburger.avif';
import doublepatty from '../../../../src/doublepatty.jpg';
import regularchicken from '../../../../src/regularchicken.jpg';
import bbqchicken from '../../../pizza/bbqchicken.jpg';
import buffalochicken from '../../../pizza/buffalochicken.jpg';
import buffaloranch from '../../../pizza/buffaloranch.jpg';
import chicken from '../../../pizza/chicken.jpg';
import chickenbacon from '../../../pizza/chickenbacon.jpg';
import garlicchicken from '../../../pizza/garlicchicken.jpg';
import homemadebbq from '../../../pizza/homemadebbq.jpg';
import Badge from "@material-ui/core/Badge";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
export default function FoodList() {
  const [result, setResult] = useState();
  const [cartitems, setCartitems] = useState(null);
  const [itemCount, setItemCount] = React.useState(1);
  let Sum = 0;
  let items = [];
useEffect(()=>{
  if(cartitems!==null){
   cartitems.map((elem)=>{
     Sum = Sum + elem.price;
     return Sum;
    });
    setResult(Sum);
}}, [cartitems]);

  const Additem=(item) => {
    console.log("initially"+ items)
    setItemCount(itemCount + 1);
    items.push(item);
    console.log(items)
    setCartitems(items);
     
  };



  const removeitem=() => {
    setItemCount(Math.max(itemCount - 1, 0));
  };
  const products = [
    {
      link:"https://thumbs.dreamstime.com/b/big-burger-isolated-white-43062448.jpg",
      product:"single cheese",
      price: 35
  },
  {
    link:"https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80",
    product:"double cheese",
    price: 55
},
{
  link:"https://www.shutterstock.com/image-photo/delicious-grilled-burgers-260nw-1146199442.jpg",
  product:"burger& chips",
  price: 42
},
{
  link:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80",
  product:"D/extra cheese",
  price: 60
},
{
  link:"https://thumbs.dreamstime.com/b/big-burger-isolated-white-43062448.jpg",
  product:"combo burger",
  price: 65
},
];

// const pizza = [
//   {
//     linkk:"",
//     proname:"",
//     price:
//   },
// ]
// let temp = 

  return (
    <>
   
    <div className='food'>
<<<<<<< HEAD
    <div className="items">Number of items={itemCount}</div><br></br>
    <div className='total'>Total Cost={result}</div>
               
       {/* <ShoppingCartIcon /> */}
        {products.map((elem)=>{
      return ( <div className='burgers' >
      <div><img src={elem.link} style={{width:"200px", height:"150px"}}></img>
      <h2>{elem.product}</h2>
      <h2>Price: {elem.price}</h2>
      <button className='add-item' onClick={()=>{
        Additem(elem)
      }}>Add To Cart</button>
      <button className='remove-item' onClick={removeitem}>Remove</button>
      </div> <br></br>
      <div className='pizza'>
      <div><img src={elem.link} style={{width:"200px", height:"150px"}}></img>
      <h2>{elem.product}</h2>
      <h2>Price: {elem.price}</h2>
      <button className='add-item' onClick={Additem}>Add To Cart</button>
      <button className='remove-item' onClick={removeitem}>Remove</button>
      </div> 

      </div>
</div>)
})}    
=======
        
        {/* <Badge
         color="secondary" badgeContent> */}
        
           {/* <ShoppingCartIcon /> */}
          {' '}items
        {/* </Badge>  */}
        <br></br>

{proucts.map((elem)=>{
  
  return ( <div className='burgers' >
        <div><img src={elem.link} style={{width:"200px", height:"150px"}}></img>
        <h2>{elem.product}</h2>
        <h2>Price: {elem.price}</h2>
        <button className='add-item' onClick={Additem}>Add To Cart</button>
        <button className='remove-item' onClick={removeitem}>Remove</button>
        </div> 
</div>)
})}
        <div className='burgers' >
        <div><img src={regular} style={{width:"200px", height:"150px"}}></img>
        <h2>Regular Beef</h2>
        <h2>Price: R25</h2>
        <button className='add-item' onClick={Additem}>Add To Cart</button>
        <button className='remove-item' onClick={removeitem}>Remove</button>
        </div>  
        <div><img src={doublecheese} style={{width:"200px", height:"150px"}}></img>
        <h2>D/Cheese Chicken</h2>
        <h2>Price: R55</h2>
        <button className='add-item' onClick={Additem}>Add To Cart</button>
        <button className='remove-item' onClick={removeitem}>Remove</button>
        </div>
        <div><img src={chipsburger} style={{width:"200px", height:"150px"}}></img>
        <h2>Chips& B/Burger</h2>
        <h2>Price: R49</h2>
        <button className='add-item' onClick={Additem}>Add To Cart</button>
        <button className='remove-item' onClick={removeitem}>Remove</button>
        </div>
        <div><img src={doublepatty} style={{width:"200px", height:"150px"}}></img>
        <h2>D/Cheese Beef</h2>
        <h2>Price: R25</h2>
        <button className='add-item' onClick={Additem}>Add To Cart</button>
        <button className='remove-item' onClick={removeitem}>Remove</button>
        </div>
        <div><img src={regularchicken} style={{width:"200px", height:"150px"}}></img>
        <h2>Regular Burger</h2>
        <h2>Price: R65</h2>
        <button className='add-item' onClick={Additem}>Add To Cart</button>
        <button className='remove-item' onClick={removeitem}>Remove</button>
        </div>
        <div><img src={regular} style={{width:"200px", height:"150px"}}></img>
        <h2>Regular Burger</h2>
        <h2>Price: R25</h2>
        <button className='add-item' onClick={Additem}>Add To Cart</button>
        <button className='remove-item' onClick={removeitem}>Remove</button>
        </div>  
        </div>
          
        <div className='pizza'>
        <div><img src={bbqchicken} style={{width:"200px", height:"150px"}}></img>
        <h2>BBQ Chicken</h2>
        <h2>Price: R89</h2>
        <button className='add-item' onClick={Additem}>Add To Cart</button>
        <button className='remove-item' onClick={removeitem}>Remove</button>
        </div> 
        <div><img src={buffalochicken} style={{width:"200px", height:"150px"}}></img>
        <h2>Buffalo chicken</h2>
        <h2>Price: R110</h2>
        <button className='add-item' onClick={Additem}>Add To Cart</button>
        <button className='remove-item' onClick={removeitem}>Remove</button>
        </div>  
        <div><img src={buffaloranch} style={{width:"200px", height:"150px"}}></img>
        <h2>Buffalo Ranch</h2>
        <h2>Price: R105</h2>
        <button className='add-item' onClick={Additem}>Add To Cart</button>
        <button className='remove-item' onClick={removeitem}>Remove</button>
        </div>  
        <div><img src={chicken} style={{width:"200px", height:"150px"}}></img>
        <h2>Mozarella Chicken</h2>
        <h2>Price: R125</h2>
        <button className='add-item' onClick={Additem}>Add To Cart</button>
        <button className='remove-item' onClick={removeitem}>Remove</button>
        </div>  
        <div><img src={chickenbacon} style={{width:"200px", height:"150px"}}></img>
        <h2>Chikka Chicken</h2>
        <h2>Price: R115</h2>
        <button className='add-item' onClick={Additem}>Add To Cart</button>
        <button className='remove-item' onClick={removeitem}>Remove</button>
        </div>   
        <div><img src={garlicchicken} style={{width:"200px", height:"150px"}}></img>
        <h2>Garlic Chicken</h2>
        <h2>Price: R105</h2>
        <button className='add-item' onClick={Additem}>Add To Cart</button>
        <button className='remove-item' onClick={removeitem}>Remove</button>
        </div>   
        <div><img src={homemadebbq} style={{width:"200px", height:"150px"}}></img>
        <h2>Homemade BBQ</h2>
        <h2>Price: R135</h2>
        <button className='add-item' onClick={Additem}>Add To Cart</button>
        <button className='remove-item' onClick={removeitem}>Remove</button>
        </div>   
        </div>
>>>>>>> 77ddcd43eb4311b0efb2a70dd6711631ccfca310
    </div>
    </>
  )
}

