"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaOpencart } from "react-icons/fa";
import Link from "next/link";
import { IoMdExit } from "react-icons/io";

export default function Header() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="w-screen h-20 p-4 fixed bg-secondary top-0 right-0 ">
      <div className="container fx">
        <Link href="/" className="fx w-52">
          <Image
            src="/logo.png"
            alt="logo"
            className=""
            width={70}
            height={70}
          />
          <p className="md:text-xl text-lg">ŞEYBAN Giyim</p>
        </Link>
        <ul className="md:fx gap-20 hidden">
          <li className="border-b-2 p-2 border-transparent duration-100 hover:border-main">
            <a href="/">الصفحة الرئيسية</a>
          </li>
          <li className="border-b-2 p-2 border-transparent duration-100 hover:border-main">
            <a href="/products">منتجاتنا</a>
          </li>
          <li className="border-b-2 p-2 border-transparent duration-100 hover:border-main">
            <a href="/about">من نحن</a>
          </li>
          <li className="border-b-2 p-2 border-transparent duration-100 hover:border-main">
            <a href="/cart" className="fx gap-5">
              <FaOpencart />
              <p> السلى</p>
            </a>
          </li>
        </ul>
        <div className="mobile md:hidden">
          <div className="cursor-pointer" onClick={handleClick}>
            <span className="w-8 h-1 my-1 block rounded bg-main border-main"></span>
            <span className="w-8 h-1 my-1 block rounded bg-main border-main"></span>
            <span className="w-8 h-1 my-1 block rounded bg-main border-main"></span>
          </div>
          {show && (
            <>
              <ul className="text-right p-20 flex-col absolute top-0 left-0 w-full h-screen bg-main text-xl">
                <li className="border-b-2 p-4 border-transparent duration-100 hover:border-main">
                  <a href="/">الصفحة الرئيسية</a>
                </li>
                <li className="border-b-2 p-4 border-transparent duration-100 hover:border-main">
                  <a href="/products">منتجاتنا</a>
                </li>
                <li className="border-b-2 p-4 border-transparent duration-100 hover:border-main">
                  <a href="/about">من نحن</a>
                </li>
                <li className="border-b-2 p-4 border-transparent duration-100 hover:border-main">
                  <a href="/cart" className="fx gap-5">
                    <FaOpencart />
                    <p> السلى</p>
                  </a>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
