import React, { Component } from "react";

export default class Signup extends Component {
  render() {
    return (
      <div className="w-1/3 h-1/2 bg-gray-800 flex flex-col justify-center items-center rounded-xl shadow-2xl transition-colors duration-500 hover:bg-gray-700">
        <h1 className="text-white text-xl mt-4 font-bold">Signup Page</h1>
        <div className="text-white h-full w-full flex flex-col items-center pt-2 pr-12 pb-2 pl-12">
          <div className="w-full h-full flex flex-col">
            <label htmlFor="email" className="mb-1.5">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter Email"
              className="rounded-md pl-2  pb-1.5 pt-1.5 transition-colors duration-500 hover:bg-gray-200 text-black"
            />
          </div>
          <div className="w-full h-full flex flex-col">
            <label htmlFor="password" className="mb-1.5">
              Password
            </label>
            <input
              placeholder="Enter Password"
              id="password"
              name="password"
              type="text"
              className="rounded-md pl-2 pb-1.5 pt-1.5  transition-colors duration-500 hover:bg-gray-200  text-black"
            />
          </div>
          <button className="mb-4 bg-black pt-1 pr-10 pb-1.5 pl-10 rounded-md text-lg transition-colors duration-500 hover:bg-white hover:text-gray-900 shadow-xl">
            Signup
          </button>
        </div>
      </div>
    );
  }
}
