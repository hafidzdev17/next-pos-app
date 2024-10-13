import React from 'react';

export default function Sidebar() {
  return (
    <div className="w-1/5 bg-gray-200 h-screen p-4 shadow-lg">
      <h2 className="text-xl font-bold text-center">Restro POS</h2>
      <ul className="mt-8">
        <li className="py-2">
          <button className="w-full text-left hover:bg-gray-300 rounded px-2">Home</button>
        </li>
        <li className="py-2">
          <button className="w-full text-left hover:bg-gray-300 rounded px-2">Customers</button>
        </li>
        <li className="py-2">
          <button className="w-full text-left hover:bg-gray-300 rounded px-2">Tables</button>
        </li>
        <li className="py-2">
          <button className="w-full text-left hover:bg-gray-300 rounded px-2">Cashier</button>
        </li>
        <li className="py-2">
          <button className="w-full text-left hover:bg-gray-300 rounded px-2">Orders</button>
        </li>
        <li className="py-2">
          <button className="w-full text-left hover:bg-gray-300 rounded px-2">Reports</button>
        </li>
        <li className="py-2">
          <button className="w-full text-left hover:bg-gray-300 rounded px-2">Settings</button>
        </li>
        <li className="py-2">
          <button className="w-full text-left hover:bg-gray-300 rounded px-2">Logout</button>
        </li>
      </ul>
    </div>
  );
}
