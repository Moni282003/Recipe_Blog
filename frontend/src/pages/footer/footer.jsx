import React from 'react'; 

const Footer = () => {
  return (
    <div id="footer" className="bg-slate-700  text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">About Our Recipe Blog</h2>
            <p className="text-sm">
              Welcome to our recipe blog! Discover delicious recipes, cooking tips, and culinary inspiration to elevate your kitchen adventures. Join us on a journey of taste and creativity.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Follow Us</h2>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-blue-400 hover:text-blue-500">Facebook</a></li>
              <li><a href="#" className="text-pink-400 hover:text-pink-500">Instagram</a></li>
              <li><a href="#" className="text-blue-300 hover:text-blue-400">Twitter</a></li>
              <li><a href="#" className="text-red-400 hover:text-red-500">YouTube</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p className="text-sm">
              Email: <a href="mailto:info@recipeblog.com" className="text-blue-400 hover:text-blue-500">monish282003@gmail.com</a><br />
              Phone: <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-500">+91 93423 14749</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
