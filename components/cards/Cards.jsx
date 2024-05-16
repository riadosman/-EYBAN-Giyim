"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import data from "../../data";
export default function Cards() {
  const handleClick = (e) => {
    localStorage.setItem(`item ${e.id}`, JSON.stringify(e));
  };
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {data.map((e, i) => (
        <div
          className="flex items-center justify-center gap-5 flex-col my-8 border-2 bg-secondary border-primary rounded-xl p-5 hover:border-white duration-200 cursor-pointer"
          key={i}
        >
          <Image
            src={e.imageUrl}
            alt={i}
            width={250}
            height={200}
            className="rounded"
          />
          <p className="text-main">{e.name}</p>
          <div className="flex gap-5">
            <span className="line-through">300 TL</span>
            <span>{e.value} TL فقط</span>
          </div>
          <Link
            href="/cart"
            className="bg-main p-2 rounded"
            onClick={() => {
              handleClick(e);
            }}
          >
            اضف الى السلة
          </Link>
        </div>
      ))}
    </div>
  );
}
