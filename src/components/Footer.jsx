export default function Footer() {
  return (
    <footer className="mt-20 bg-orange-500  text-white pt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-5">

        {/* About */}
        <div>
          <h3 className="font-bold text-lg mb-3">About Us</h3>
          <p className=" text-sm">
            We provide quality electronics at the best prices. Shop with confidence!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className=" text-sm space-y-2">
            <li>Home</li>
            <li>Shop</li>
            <li>Cart</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-bold text-lg mb-3">Customer Service</h3>
          <ul className="text-sm space-y-2">
            <li>Shipping & Delivery</li>
            <li>Returns & Refunds</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="font-bold text-lg mb-3">Contact Us</h3>
          <p className=" text-sm">Email: support@mystore.com</p>
          <p className=" text-sm">Phone: +20 123 456 789</p>

          <div className="flex gap-3 mt-3">
            <span className="bg-gray-700 p-2 rounded-full">FB</span>
            <span className="bg-gray-700 p-2 rounded-full">IG</span>
            <span className="bg-gray-700 p-2 rounded-full">TW</span>
          </div>
        </div>
      </div>

      <div className="pb-4 mt-10 border-t-2  pt-5 text-center  text-sm">
        © 2026 MyStore. All rights reserved.
      </div>
    </footer>
  );
}
