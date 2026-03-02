import {useSelector } from "react-redux"

import Footer from "../components/Footer";


export default function Checkout(){


    const items=useSelector((state)=>state.cart.items)
    const count=items.reduce((acc,item)=>acc+item.quantity,0)
    const totalPrice=items.reduce((acc,item)=>acc+item.price*item.quantity,0)
    const shipping=30
    const totalSum= totalPrice+shipping;
    
    return(
    <>
    <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 pt-[120px] px-4">
    <div className="w-full max-w-[800px]    border-2 border-orange-500 rounded-xl overflow-hidden ">
        <div className=" text-white font-bold bg-orange-500 rounded p-3 text-xl ">billing address</div>
<div className="grid grid-cols-2 gap-2 px-4 pt-4">
<div className="flex flex-col gap-1 ">
  <label className="text-gray-700">
    First name
  </label>

  <input
    type="text"
    className="border border-gray-300 rounded-lg py-2 focus:ring-2 focus:ring-black/20 focus:border-black outline-none"
  />
</div>
<div className="flex flex-col gap-1">
  <label className=" text-gray-700">
    Lastname
  </label>

  <input
    type="text"
    className="border border-gray-300 rounded-lg  py-2 focus:ring-2 focus:ring-black/20 focus:border-black outline-none"
  />
</div>
</div>
<div className="flex flex-col gap-1 px-4 pt-4">
    <label className="  text-gray-700">Email</label>
    <input
    placeholder="You@example.com"
    className="border border-gray-300 rounded-lg px-2  py-2 focus:ring-2 focus:ring-black/20 focus:border-black outline-none"
     type="email" />

    </div>
    <div className="flex flex-col gap-1 px-4 pt-4">
    <label className=" text-gray-700">Address</label>
    <input
    placeholder="1234 Main St"
    className="border border-gray-300 rounded-lg px-2  py-2 focus:ring-2 focus:ring-black/20 focus:border-black outline-none"
     type="text" />

    </div>
    <div className="flex flex-col gap-1 px-4 pt-4">
    <label className=" text-gray-700">Address 2 <span className="text-gray-400">(optional)</span></label>
    <input
    placeholder="1234 Main St"
    className="border border-gray-300 rounded-lg px-2  py-2 focus:ring-2 focus:ring-black/20 focus:border-black outline-none"
     type="text" />

    </div>
    <div className="grid grid-cols-3 pt-4  ">
      <div className="flex flex-col gap-1 px-4">
        <label htmlFor="">country</label>
        <select className="border border-gray-300 rounded-lg  focus:ring-2 focus:ring-black/20 focus:border-black outline-none" name="" id="">
            <option value="">choose...</option>

        </select>
        </div>
        <div className="flex flex-col gap-1 px-4">
            <label htmlFor="">State</label>
        <select className="border border-gray-300 rounded-lg  focus:ring-2 focus:ring-black/20 focus:border-black outline-none" name="" id="">
            <option value="">choose...</option>

        </select>
        </div>
       <div className="flex flex-col gap-1 px-4">
        <label htmlFor="">zip</label>
        <input type="text" className="border border-gray-300 rounded-lg py-1  focus:ring-2 focus:ring-black/20 focus:border-black outline-none" name="" id=""/>
            

        
        </div>
        
    </div>
    <hr className="mt-5" />
    <div className="px-4 py-4">
    <p className="text-lg" >Payment</p>
    <div className="grid grid-cols-2 gap-2 py-4">
<div className="flex flex-col gap-1 ">
  <label className="text-sm font-medium text-gray-700">
   Name on card
  </label>

  <input
    type="text"
    className="border border-gray-300 rounded-lg py-2 focus:ring-2 focus:ring-black/20 focus:border-black outline-none"
  />
  <p>Full name as displayed on card</p>

</div>
<div className="flex flex-col gap-1">
  <label className="text-sm font-medium text-gray-700">
    Credit card number
  </label>

  <input
    type="text"
    className="border border-gray-300 rounded-lg  py-2 focus:ring-2 focus:ring-black/20 focus:border-black outline-none"
  />
</div>

</div>


<div className="flex gap-4">
<div className="flex flex-col gap-1">
  <label className="text-sm font-medium text-gray-700">
    Expiration
  </label>

  <input
    type="text"
    className="border border-gray-300 rounded-lg  py-2 focus:ring-2 focus:ring-black/20 focus:border-black outline-none"
  />
</div>
<div className="flex flex-col gap-1">
  <label className="text-sm font-medium text-gray-700">
    CVV
  </label>

  <input
    type="text"
    className="border border-gray-300 rounded-lg  py-2 focus:ring-2 focus:ring-black/20 focus:border-black outline-none"
  />
</div>
</div>




    </div>
    <hr className="mt-5" />
    <div className="flex flex-col w-[90%] mx-auto py-3">
    <button className="bg-orange-300 text-white p-2 rounded-2xl">continue to checkout</button>
</div>




       
    </div>
    <div className="w-full max-w-[500px] h-[200px] border-2 border-orange-500  rounded-xl overflow-hidden ">
        <div className="bg-orange-500 font-bold text-white rounded p-3 text-xl ">Order summary</div>
       
        <div className="flex justify-between pt-4 px-4">
          <p>  Products({count})</p>
          <p> ${totalPrice}</p>
        </div>
        
        <div className="flex justify-between px-4">
          <p>Shipping</p>
          <p> ${shipping}</p>
        </div>

         <div className="flex justify-between px-4 py-4">
          <p className="font-bold text-2xl ">Total amount</p>
          <p className="font-bold text-2xl"> ${totalSum}</p>
        </div>
        
    </div>
    </div>
       <Footer/>
        
                    </>
        
        
            )}
            