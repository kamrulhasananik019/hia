import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <section className="grid grid-cols-3 ps-5 max-w-[1400px] mx-auto">
        <div>
          <h2>hia</h2>
          <p>
            Hia is health platform that connects patients with top doctors for
            immediate access to healthcare...{" "}
          </p>
        </div>
        <div className="flex justify-around">
          <div>
            <h2>Company</h2>
            <div className="flex flex-col">
              <Link href="/">About Us</Link>
              <Link href="/">About Us</Link>
              <Link href="/">About Us</Link>
              <Link href="/">About Us</Link>
              <Link href="/">About Us</Link>
            </div>
          </div>
          <div>
            <h2>Company</h2>
            <div className="flex flex-col">
              <Link href="/">About Us</Link>
              <Link href="/">About Us</Link>
              <Link href="/">About Us</Link>
              <Link href="/">About Us</Link>
              <Link href="/">About Us</Link>
            </div>
          </div>
        </div>
        <div>
          <h2>Newsletter</h2>
          <p>submit for registration</p>
          <input type="email" placeholder="Email address" id="" />
        </div>
      </section>
    </div>
  );
}
