import { useEffect, useState } from "react";           
import axios from "axios";                             
import { useDispatch, useSelector } from "react-redux"; 
import { addTocart, remove_from_cart } from "../redux/cartSlice"; 
import toast from "react-hot-toast";
import { motion } from "framer-motion";


export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const[category,setCategory]=useState("all")

  

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); 

  useEffect(() => {
    const getproduct = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products?limit=0");
        setProducts(res.data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getproduct();
  }, []);
  const FilteredProducts=
  category==="all"?products : products.filter((i)=>i.category===category)

  if (loading) return <h2 className="text-center mt-20 text-2xl font-bold">Loading</h2>;
  console.log([...new Set(products.map((p) => p.category))])
  const categories=["all",...new Set(products.map((p)=>p.category))]

  return (
    <div id="products" className="pt-20">
      <h2 className="text-4xl text-center font-bold">Latest Products</h2>
            <div className="flex justify-center gap-3 mt-10 pb-10 flex-wrap">
        <button onClick={() => setCategory("all")} className={`${category==="all"?"bg-orange-500 text-white":"border border-orange-400 text-orange-500"} px-4 py-2  rounded`}>
          All
        </button>
        <button onClick={() => setCategory("furniture")} className={`${category==="furniture"?"bg-orange-500 text-white":"border border-orange-400 text-orange-500"} px-4 py-2 border rounded`}>
         furniture
        </button>
        <button onClick={() => setCategory("groceries")} className={`${category==="groceries"?"bg-orange-500 text-white":"border border-orange-400 text-orange-500"} px-4 py-2 border rounded`}>
          groceries
        </button>
        <button onClick={() => setCategory("beauty")} className={`${category==="beauty"?"bg-orange-500 text-white":"border border-orange-400 text-orange-500"} px-4 py-2 border rounded`}>
        beauty
        </button>
        <button onClick={() => setCategory("fragrances")} className={`${category==="fragrances"?"bg-orange-500 text-white":"border border-orange-400 text-orange-500"} px-4 py-2 border rounded`}>
           fragrances
        </button>
        <button onClick={()=>setCategory("laptops")} className={`${category==="laptops"?"bg-orange-500 text-white":"border border-orange-400 text-orange-500"} px-4 py-2 border rounded`}>Laptops</button>
      </div>

      <div className="flex justify-center">
        
        <div 
         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-5 w-full max-w-7xl  ">
          {FilteredProducts.map((product,index) => {
            const inCart = cartItems.some((item) => item.id === product.id);

            return (
              <motion.div
              initial={{ opacity: 0 }} 
  whileInView={{ opacity: 1 }}   
  viewport={{ once: true, amount: 0.3 }} 
  transition={{ duration: 0.4, delay: index * 0.1 }}
             
                className="w-full mx-auto max-w-[400px]  border border-orange-300 p-4 shadow-md shadow-orange-500/20 rounded-2xl transition hover:shadow-xl hover:shadow-orange-300/50 font-cairo"
                key={product.id}
              >
                <div className="h-48 flex items-center justify-center mb-3">
                  <img className="h-full object-contain" src={product.thumbnail} alt="" />
                </div>
                
  
    <h3 className="text-lg font-semibold line-clamp-2 h-10 ">
      {product.title}
    </h3>
    <p className="text-sm text-gray-600 line-clamp-3 h-10  ">
      {product.description}
    </p>
 
  <p className="text-lg font-bold mt-3 h-10 ">${product.price}</p>

               
                {inCart ? (
                  <button
                    onClick={() => {
                      dispatch(remove_from_cart(product.id));
                      toast.error("تم الإزالة من الحقيبة 🛒");
                    }}
                    className="mt-5 bg-red-500 text-white p-3 rounded-lg"
                  >
                    إزالة من الحقيبة

                  </button>
                ) : (
                  <button
                    onClick={() => {
                      dispatch(addTocart(product));
                      toast.success("تم الإضافة الى الحقيبة 🛒");
                    }}
                    className="mt-5 bg-orange-400 text-white p-3 rounded-lg "
                  >
                    إضافة الى الحقيبة

                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
