import { CART_CONTEXT } from "@/pages/_app";
import React, { useContext, useState } from "react";
const Sidebar = ({children}) => {
  const {cart} = useContext(CART_CONTEXT)
  console.log(cart);
  return (
    <div className="drawer overflow-y-hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {children}
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer" className="drawer-overlay">X</label>
        <ul className="menu  p-4 w-80 bg-gray-50 text-base-content space-y-4">
          {/* <!-- Sidebar content here --> */}
          {
            cart?.map((product, index)=>(
              <li key={index} className="flex flex-row flex-nowrap justify-between bg-purple-100 rounded-lg">
                <div className="bg-green-300 m-1">
                  <img src={product.img} alt="" width={30}/>
                </div>
                <h3 className="text-sm font-bold">{product.name}</h3>
                <div className="flex flex-col bg-gray-200 m-1">
                <span className="text-sm font-semibold">{parseFloat(product.price)}</span>
                <span className="text-xs font-semibold">X{product.quantity}</span>
                </div>
              </li>
              ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
