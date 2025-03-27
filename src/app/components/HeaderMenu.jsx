"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const HeaderMenu = () => {
  return (
    <nav className="bg-[#006BB7]">
      <div className="mx-auto flex items-center justify-between px-8 text-white">
        <div className="flex items-center gap-[350px]">
          {/* Left - Logo */}
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image src="/images/logo.png" alt="Logo" width={93} height={35} />
            </Link>
          </div>
          <nav>
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  className="flex items-center gap-2 h-[80px] text-[16px] selected"
                  href="/"
                >
                  <Image
                    src="/images/solar_graph-linear.png"
                    alt="Revenue"
                    width={19}
                    height={19}
                  />{" "}
                  Sales Revenue
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2 h-[80px] text-[16px] " href="/">
                  <Image
                    src="/images/hugeicons_note.png"
                    alt="notification"
                    width={24}
                    height={24}
                  />{" "}
                  All Products{" "}
                  <Image
                    src="/images/down-icon.png"
                    alt="icon"
                    width={11}
                    height={6}
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right - User Profile & Notifications */}
        <div className="flex items-center gap-4">
          <button className="text-xl cursor-pointer">
            <Image
              src="/images/notification-02.png"
              alt="notification"
              width={20}
              height={20}
            />
          </button>
          <Image
            src="/images/user.png"
            alt="User"
            width={40}
            height={40}
            className="rounded-full border border-white cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default HeaderMenu;
