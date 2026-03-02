import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTocart, decreaseQt } from "../redux/cartSlice"
import { Link, useNavigate } from "react-router-dom"
export default function Navbar() {
  const currentuser = JSON.parse(localStorage.getItem("currentuser"))

  const [open, setopen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const cartItems = useSelector((state) => state.cart.items)
  const count = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className="pb-3 fixed top-0 left-0 w-full z-50 header border-b-2 border-b-orange-500">

      {/* بدل المارجنات الكبيرة */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        {/* اللوجو (نفس حجمك) */}
        <img
          onClick={() => navigate("/")}
          className="cursor-pointer w-[150px] h-auto"
          src="/chatlogo.png"
          alt=""
        />

        {/* اللينكات (نفس ستايلك) */}
        <div className="hidden md:flex gap-8 mb-2 ml-20">
          <Link to="/" className="link">Home</Link>
          <Link  to="/#products" className="link" href="#products">Products</Link>

          <Link to="/about" className="link">About</Link>
        </div>

        {/* اليمين */}
        <div className="flex items-center gap-4">

          {currentuser ? (
            <div className="hidden md:flex items-center gap-4 text-orange-500">
              <div className="font-bold text-lg mb-1">
                Welcome <span className="text-black">{currentuser.firstname}</span>
              </div>

              <button
                onClick={() => {
                  localStorage.removeItem("currentuser")
                  window.location.reload()
                }}
                className="bg-orange-500 text-lg text-white px-5 py-2 rounded-xl hover:bg-orange-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex text-lg gap-2">
              <Link to="/login" className="bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600">
                Login
              </Link>

              <Link to="/signup" className="bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600">
                Sign up
              </Link>
            </div>
          )}

          {/* الكارت (نفس الحجم ونفس الشكل) */}
          <div
            className="relative cursor-pointer text-4xl"
            onClick={() => setopen(!open)}
          >
            <i className="fa-solid fa-cart-plus text-black"></i>

            {count > 0 && (
              <div className="bg-orange-500 text-white border border-orange-500 text-sm text-center font-semibold absolute h-[22px] w-[22px] rounded-full top-[-12px] left-[25px]">
                {count}
              </div>
            )}
          </div>
          <button
           className="md:hidden text-3xl ml-2"
           onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
           </button>
        </div>
      </div>

      {/* dropdown زي ما هو */}
      {open && (
        <div className="absolute right-10 top-20 w-[300px] bg-white border border-orange-500 shadow-xl rounded-xl p-4 z-50">
          {cartItems.length === 0 ? (
            <p className="text-2xl text-center text-gray-400">الحقيبة فارغة</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center mb-3 border-b pb-2 text-black text-4xl"
                >
                  <p className="text-sm font-bold w-32 line-clamp-1">{item.title}</p>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => dispatch(decreaseQt(item.id))}
                      className="text-md px-1 rounded text-red-500"
                    >
                      -
                    </button>

                    <span className="text-[30px]">{item.quantity}</span>

                    <button
                      onClick={() => dispatch(addTocart(item))}
                      className="text-green-500 text-md px-1 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

              <Link
                to="/cart"
                onClick={() => setopen(false)}
                className="block text-center text-[20px] bg-orange-500 text-white rounded-xl p-2"
              >
                عرض حقيبة المشتريات
              </Link>
            </>
          )}
        </div>
      )}
      {menuOpen && (
  <div className="md:hidden bg-white border-t border-orange-500 px-4 py-4 flex flex-col gap-4 text-lg">
    <Link onClick={() => setMenuOpen(false)} to="/" className="link">Home</Link>
    <a onClick={() => setMenuOpen(false)} href="#products" className="link">Products</a>
    <Link onClick={() => setMenuOpen(false)} to="/about" className="link">About</Link>

    {!currentuser && (
      <>
        <Link to="/login" className="bg-orange-500 text-white px-5 py-2 rounded-xl text-center">Login</Link>
        <Link to="/signup" className="bg-orange-500 text-white px-5 py-2 rounded-xl text-center">Sign up</Link>
      </>
    )}
  </div>
)}
    </div>
  )
}