import React from 'react';
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
export default function FoodList() {
  return (
    <div className='food'>
        <div className='burgers' >
        <div><img src={regular} style={{width:"200px", height:"150px"}}></img>
        <h2>Regular Beef</h2>
        <h2>Price: R25</h2>
        <button className='add-item'>Add To Cart</button>
        </div>  
        <div><img src={doublecheese} style={{width:"200px", height:"150px"}}></img>
        <h2>D/Cheese Chicken</h2>
        <h2>Price: R55</h2>
        <button className='add-item'>Add To Cart</button>
        </div>
        <div><img src={chipsburger} style={{width:"200px", height:"150px"}}></img>
        <h2>Chips& B/Burger</h2>
        <h2>Price: R49</h2>
        <button className='add-item'>Add To Cart</button>
        </div>
        <div><img src={doublepatty} style={{width:"200px", height:"150px"}}></img>
        <h2>D/Cheese Beef</h2>
        <h2>Price: R25</h2>
        <button className='add-item'>Add To Cart</button>
        </div>
        <div><img src={regularchicken} style={{width:"200px", height:"150px"}}></img>
        <h2>Regular Burger</h2>
        <h2>Price: R65</h2>
        <button className='add-item'>Add To Cart</button>
        </div>
        <div><img src={regular} style={{width:"200px", height:"150px"}}></img>
        <h2>Regular Burger</h2>
        <h2>Price: R25</h2>
        <button className='add-item'>Add To Cart</button>
        </div>  
        </div>
        <div className='pizza'>
        <div><img src={bbqchicken} style={{width:"200px", height:"150px"}}></img>
        <h2>BBQ Chicken</h2>
        <h2>Price: R89</h2>
        <button className='add-item'>Add To Cart</button>
        </div> 
        <div><img src={buffalochicken} style={{width:"200px", height:"150px"}}></img>
        <h2>Buffalo chicken</h2>
        <h2>Price: R110</h2>
        <button className='add-item'>Add To Cart</button>
        </div>  
        <div><img src={buffaloranch} style={{width:"200px", height:"150px"}}></img>
        <h2>Buffalo Ranch</h2>
        <h2>Price: R105</h2>
        <button className='add-item'>Add To Cart</button>
        </div>  
        <div><img src={chicken} style={{width:"200px", height:"150px"}}></img>
        <h2>Mozarella Chicken</h2>
        <h2>Price: R125</h2>
        <button className='add-item'>Add To Cart</button>
        </div>  
        <div><img src={chickenbacon} style={{width:"200px", height:"150px"}}></img>
        <h2>Chikka Chicken</h2>
        <h2>Price: R115</h2>
        <button className='add-item'>Add To Cart</button>
        </div>   
        <div><img src={garlicchicken} style={{width:"200px", height:"150px"}}></img>
        <h2>Garlic Chicken</h2>
        <h2>Price: R105</h2>
        <button className='add-item'>Add To Cart</button>
        </div>   
        <div><img src={homemadebbq} style={{width:"200px", height:"150px"}}></img>
        <h2>Homemade BBQ</h2>
        <h2>Price: R135</h2>
        <button className='add-item'>Add To Cart</button>
        </div>   
        </div>
    </div>
  )
}

