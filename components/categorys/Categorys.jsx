import React from "react";
import Image from "next/image";
import categorysData from "./../../categorys";

export default function Categorys() {
  return (
    <div className="grid md:grid-cols-3 md:grid-rows-3 gap-4">
      {categorysData.map((e, i) => (
        <div
          key={i}
          className="flex items-center justify-around flex-row-reverse border-2 border-primary rounded-xl p-2 mb-4"
        >
          <Image
            src={e.img}
            alt="c1"
            width={100}
            height={50}
            className="rounded"
          />
          <p>{e.name}</p>
        </div>
      ))}
    </div>
  );
}
