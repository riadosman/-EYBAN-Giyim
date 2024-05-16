"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import Link from "next/link";

export default function cart() {
  const [cartItems, setcartItems] = useState();
  useEffect(() => {
    const keys = Object.keys(localStorage);
    const cartKeys = keys.filter((key) => key.startsWith("item"));
    const arr = cartKeys.map((key) => {
      return JSON.parse(localStorage.getItem(key));
    });
    setcartItems(arr);
  }, []);
  const incrementCount = (id) => {
    const index = cartItems.findIndex((item) => item.id === id);

    // If the item is found
    if (index !== -1) {
      // Check if count is greater than 0 before decrementing
      if (cartItems[index].count < 11) {
        const updatedCartItems = [...cartItems]; // Create a copy of cartItems array
        updatedCartItems[index].count++; // Decrement count
        setcartItems(updatedCartItems);
        console.log(
          `Count of item with id ${id} decremented to ${cartItems[index].count}`
        );
      } else {
        console.log(`Count of item with id ${id} cannot be less than 0`);
      }
    } else {
      console.log(`Item with id ${id} not found in cart`);
    }
  };
  const deleteItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setcartItems(updatedCartItems);
  };
  const decrementCount = (id) => {
    const index = cartItems.findIndex((item) => item.id === id);

    // If the item is found
    if (index !== -1) {
      // Check if count is greater than 0 before decrementing
      if (cartItems[index].count > 0) {
        const updatedCartItems = [...cartItems]; // Create a copy of cartItems array
        updatedCartItems[index].count--; // Decrement count
        setcartItems(updatedCartItems);
        console.log(
          `Count of item with id ${id} decremented to ${cartItems[index].count}`
        );
      } else if (cartItems[index].count == 1) {
        deleteItem(id);
      } else {
        console.log(`Count of item with id ${id} cannot be less than 0`);
      }
    } else {
      console.log(`Item with id ${id} not found in cart`);
    }
  };

  const getTotal = () => {
    let total = 0;
    cartItems.map((e) => {
      total += e.count * parseInt(e.value);
    });
    return total;
  };
  const send = () => {
    let text = "";
    cartItems.map((e) => {
      text += `اسم المنتج: ${e.name} السعر: ${e.value} العدد: ${e.count} |||||`;
    });
    const phoneNumber = "+905528962241";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappLink, "_blank");
  };
  return (
    <div className="my-12 text-center">
      <div className="c4-bg"></div>
      <div className="container">
        <h1 className="text-6xl mt-40 mb-20">منتجاتك</h1>
        <div className="flex items-center justify-around  flex-wrap flex-col min-h-[210px] mt-120 mb-0">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((e, i) => (
              <div
                key={i}
                className="fx border-2 md:flex-row flex-col gap-5 md:gap-0 p-5 md:w-1/2 m-4 rounded-xl md:p-6"
              >
                <Image
                  src={e.imageUrl}
                  alt="cart"
                  width={100}
                  height={100}
                  className="rounded"
                />
                <div>
                  <span
                    className="cursor-pointer select-none"
                    onClick={() => incrementCount(e.id)}
                  >
                    +
                  </span>
                  <input
                    type="text"
                    className="w-10 mx-2 bg-primary rounded-lg outline-none border-none text-center p-2"
                    value={e.count}
                    max={10}
                  />
                  <span
                    className="cursor-pointer select-none"
                    onClick={() => decrementCount(e.id)}
                  >
                    -
                  </span>
                </div>
                <div className="w-40">
                  <p>{e.name}</p>
                  <span className="mx-4">XL</span>
                  <span>{e.count * parseInt(e.value)} TL</span>
                </div>
                <span
                  className="cursor-pointer text-3xl hover:text-black duration-200"
                  onClick={() => deleteItem(e.id)}
                >
                  <MdDelete />
                </span>
              </div>
            ))
          ) : (
            <div className="h-20 flex items-center justify-center flex-col">
              <h2 className="text-6xl my-10">السلة فارغه</h2>
              <Link href="/products">ابدء الان باضافه منتجات</Link>
            </div>
          )}
          {cartItems && cartItems.length > 0 ? (
            <>
              <p>ليرة تركية {getTotal()} : المجموع </p>
              <button className="bg-main p-4 mx-2 rounded my-5" onClick={send}>
                طلب المنتجات الان
              </button>
              <button
                className="bg-primary p-4 mx-2 rounded my-5"
                onClick={() => {
                  localStorage.clear();
                  setcartItems(undefined);
                }}
              >
                افرغ السلة بشكل كامل
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
