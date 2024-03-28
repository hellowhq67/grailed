"use client";
import React from "react";
import style from "./Style.module.css";
import Link from "next/link";
export default function NestedMenu() {
  return (
    <ul className={style.nestedmenu}>
      <li>
        <Link href="/products/designer"> DESIGNERS</Link>
      </li>
      <li className={style.sub1}>
        <Link href="/products/menswear/tops"> MENSWEAR</Link>
        <ul className={style.submenu1}>
          <li>
            <Link href="/products/menswear/tops"> ALL CATEGORIES</Link>
          </li>
          <li className={style.submenu1Sub}>
            <Link href="/products/cetagory/menswear/tops">TOPS</Link>

            <ul className={style.subMenu1subMenu}>
              <li>
                <Link href="/products/cetagory/menswear/tops"> LONG SLEEVE T-SHIRTS</Link>
              </li>
              <li>
                <Link href="/products/cetagory/menswear/tops">POLOS </Link>
              </li>
              <li>
                <Link href="/products/cetagory/menswear/tops">SHIRTS (BUTTON UPS) </Link>
              </li>
              <li>
                <Link href="/products/cetagory/menswear/tops">SHORT SLEEVE T-SHIRTS </Link>
              </li>
              <li>
                <Link href="/products/cetagory/menswear/tops">SHORT SLEEVE T-SHIRTS </Link>
              </li>
             
            </ul>
          </li>
        <li className={style.submenu2Sub}>
            <Link href="/products/cetagory/menswear/bottoms">BOTTOMS</Link>
            <ul className={style.subMenu2subMenu}>
              <li>
                <Link href="/products/cetagory/menswear/bottoms"> Pant</Link>
              </li>
              <li>
                <Link href="/products/cetagory/menswear/bottoms">DENIMS </Link>
              </li>
              <li>
                <Link href="/products/cetagory/menswear/bottoms">Casual</Link>
              </li>
            
             
            </ul>
          </li>
          <li>
            <Link href="/products">OUTERWEAR</Link>
          </li>
          <li>
            <Link href="/products/cetagory/menswear/footwear">FOOTWEAR</Link>
          </li>
          <li>
            <Link href="/products">TAILORING</Link>
          </li>
          <li>
            <Link href="/products/cetagory/menswear/accessories">ACCESSORIES</Link>
          </li>
        </ul>
      </li>
      <li  >
        <Link className={style.sub1} href="/products/cetagory/womenswear/top"> WOMENSWEAR</Link>
       
      </li>
      <li  >
        <Link href="/products/cetagory/menswear/footwear"> SNEAKERS</Link>
        
      </li>
      <li  >
        <Link href="/products/staf/"> STAFF PICKS</Link>
      </li>
      <li  >
        <Link href="/products"> COLLECTIONS</Link>
      </li>
    </ul>
  );
}
