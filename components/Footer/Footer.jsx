import React from "react";
import Image from "next/image";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { PiTiktokLogo, PiWhatsappLogo } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="px-10 py-5 bg-primary relative bottom-0 left-0 w-full">
      <div className="container fx flex-col md:flex-row">
        <div className="fx w-52">
          <Image src="/logo.png" alt="logo" width={70} height={70} />
          <p className="text-xl">ŞEYBAN Giyim</p>
        </div>
        <ul className="fx md:gap-20 gap-5 md:mt-0 mt-3 md:text-lg text-xl flex-col md:flex-row">
          <li>
            <a
              className="fx gap-5"
              href="https://www.facebook.com/profile.php?id=100093239885697"
              target="_blank"
            >
              <SlSocialFacebook />
              <p>SIBAN GIYIM</p>
            </a>
          </li>
          <li>
            <a
              className="fx gap-5"
              href="https://www.instagram.com/siban_giyim/"
              target="_blank"
            >
              <SlSocialInstagram />
              <p>siban_giyim</p>
            </a>
          </li>
          <li>
            {/* need */}
            <a
              className="fx gap-5"
              href="https://www.tiktok.com/foryou?lang=en"
              target="_blank"
            >
              <PiTiktokLogo />
              <p>Siban Giyim</p>
            </a>
          </li>
          <li>
            {/* need its will be change or not */}
            <a
              className="fx gap-5"
              href="https://wa.me/+905394132999"
              target="_blank"
            >
              <PiWhatsappLogo />
              <p>Siban Giyim</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
