import React from 'react'
import Img1 from '../assets/img1.jpg'
import Logo from '../assets/logo.png'
import Img2 from '../assets/img2.jpg'
import Img3 from '../assets/img3.png'
export default function Home(){
  return (
    <>
    <nav className="navbar">
        <ul>
            <img src={Logo} className="logo" alt=""/>
            <li><a href='' />Home</li>
            <li><a href='' />About</li> 
            <li><a href='' />Menu</li>
            <li><a href='' />Contact</li>
        </ul>{}
    </nav>

    <div className="image">           
    <img src={Img1} className='heroimg' alt='shop'/>
    <br></br><br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br><br></br> 
        <br></br><br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br><br></br>
     

    <h1>ABOUT</h1>
    <h3>"At spicyspot, we're passionate about serving delicious meals in a warm and inviting atmosphere.
         Our chefs use only the freshest ingredients to craft dishes that delight the senses.
          We're committed to providing exceptional service and ensuring that every guest feels at home."
          "A great restaurant is one that just makes you feel like you’re not sure whether you went out or you came home and confuses you." 
</h3>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br><br></br> 
        <br></br><br></br>      
        <img src={Img2} className='aboutimg' alt='shop'/>
<h1>MENU</h1>
<ul className='grid-list'>
    <li>🍔Burger
        $40
    </li>
    <li>🍕Pizza
        $70
    </li>
        
    <li>🍟French fries
        $50
        </li> 
    <li>🍰Desserts
        $50
    </li>
    <li>🥤Juices
        $30
    </li>
    <li>🍩Donuts
        $35
    </li>
    <li>🍗Chickencurry
        $60
    </li>
    <li>🍚Meals
        $80
    </li>
</ul>
<br></br><br></br> <br></br><br></br>
    <img src={Img3} className='contactimg' alt='shop'/>

<h1>CONTACT</h1>  
<ul className='grid-items'>
<h3>Email:spicyspot@gamil.com</h3>
<h3>Contact No:9025825353</h3>
<h3>Official website:www.spicyspot.com</h3>
<h3>Address:spicyspot,T.Nagar,Chennai-600028</h3>
</ul>
    </div>
    </>
    )
}

 