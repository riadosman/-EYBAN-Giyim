import React from "react";
import Categorys from "./../../components/categorys/Categorys";
import Cards from "./../../components/cards/Cards";
import Image from "next/image";
import Link from "next/link";

export default function products() {
  return (
    <div>
      <div className="container">
        <Cards />
        <Cards/>
      </div>
    </div>
  );
}
