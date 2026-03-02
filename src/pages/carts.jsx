import { useDispatch, useSelector } from "react-redux"
import { addTocart } from "../redux/cartSlice";
import { decreaseQt } from "../redux/cartSlice";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Carts(){


    const items=useSelector((state)=>state.cart.items)
    const count=items.reduce((acc,item)=>acc+item.quantity,0)
    const totalPrice=items.reduce((acc,item)=>acc+item.price*item.quantity,0)
    const shipping=30
    const totalSum= totalPrice+shipping;
    const dispatch=useDispatch()
    return(
    <>
    <div className="flex flex-col lg:flex-row gap-10  justify-center lg:gap-20   px-4 py-[200px]">
    <div className="w-full max-w-[700px]  border-2 border-orange-500 rounded-xl overflow-hidden ">
        <div className=" text-white font-bold bg-orange-500 rounded p-3 text-xl ">Item List</div>
       {items.map((item) => (
  <div className="grid grid-cols-[80px_1fr_160px] items-center gap-4 border-b py-3"> {/* اول عمود 80 بيكسسل والتانى كدة والتالت كدة*/}

    {/* image */}
    <div className="w-20 h-20 flex  ">
      <img
        src={item.image}
        className="w-full h-full object-contain"
        alt=""
      />
    </div>

    {/* title */}
    <p className="font-bold text-lg line-clamp-1 text-center">
      {item.title}
    </p>

    {/* quantity controls */}
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={() => dispatch(decreaseQt(item.id))}
        className="text-3xl px-3 text-red-500"
      >
        -
      </button>

      <span className="text-2xl w-8 text-center">
        {item.quantity}
      </span>

      <button
        onClick={() => dispatch(addTocart(item))}
        className="text-3xl px-3 text-green-500"
      >
        +
      </button>
    </div>

  </div>
))}
    </div>
    <div className="w-full max-w-[500px] h-[280px] border-2 border-orange-500  rounded-xl overflow-hidden ">
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
        
        <Link
  to="/checkout"
  className="block text-center  text-xl bg-orange-500 text-white w-[80%]  py-3 rounded-xl mt-4 mx-auto "
>
  Go to Checkout
</Link>

        
        
        

        

        


    </div>
    </div>
    
        
        
        
        
       <Footer/>
        
                    </>
        
        
            )}
            