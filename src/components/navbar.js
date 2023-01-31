import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div style={{backgroundColor: "blue", }}>
      <ul style={{display: "flex", justifyContent: "space-around",}}>
        <li>
          <Link href="/" style={{ color: "white"}}>Coder Wikipedia</Link>
        </li>
        <li>
          <Link href="/about"style={{ color: "white"}}>About</Link>
        </li>
        <li>
          <Link href="/coders" style={{ color: "white"}}>All Coder</Link>
        </li>
      </ul>
    </div>
  );
}
