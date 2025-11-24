"use client";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  const router = useRouter()

  // Login Handler
  const handleLogin = (e) => {
    e.preventDefault();

    axios.post(`${process.env.SERVER_URL}/auth/login`, {
      email: email,
      password: password,
    }).then((res)=>{
      localStorage.setItem("token",JSON.stringify(res.data.token))
      dispatch(userInfo(res.data.data))

      router.push('/')
    }).catch((err)=>{
      console.log(err)
    })
   
   

    alert(`Logged in as: ${email}`);
  };

  return (
    <div className="bg-gray-50">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-[480px] w-full">
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="w-40 mb-8 mx-auto block"
          />

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <h1 className="text-slate-900 text-center text-3xl font-semibold">
              Sign in
            </h1>

            <form onSubmit={handleLogin} className="mt-12 space-y-6">
              {/* Username */}
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Email
                </label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                    placeholder="Enter user name"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="!mt-12">
                <button
                  type="submit"
                  className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
                >
                  Sign in
                </button>
              </div>

              <p className="text-slate-900 text-sm !mt-6 text-center">
                Don't have an account?{" "}
                <a
                  href="javascript:void(0);"
                  className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                >
                  Register here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
