import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Link from "next/link";
const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeCharger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <BsFillSunFill
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BsFillMoonStarsFill
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-6 shadow-2xl sticky top-0 z-10 bg-white dark:bg-slate-700">
      <div className="logo mx-10 bg-slate-400">
        <Link href={"/"}>
          <Image
            src="/istockphoto-1216719216-1024x1024.jpg"
            alt="asd"
            width={"150"}
            height={"150"}
          ></Image>
        </Link>
      </div>
      <div className="nav mx-auto hidden md:hidden lg:block">
        <ul className="flex space-x-20 font-bold md:text-md">
          <Link href={"/"}>
            <li>PROBLEM STATEMENTS</li>
          </Link>
          <Link href={"/"}>
            <li>PRIZE</li>
          </Link>
          <Link href={"/"}>
            <li>SPONSOR</li>
          </Link>
          <Link href={"/"}>
            <li>GALLERY</li>
          </Link>
          <Link href={"/"}>
            <li>FAQ</li>
          </Link>
          <Link href={"/"}>
            <li>AGENDA</li>
          </Link>
          <Link href={"/"}>
            <li>RULES</li>
          </Link>
          <Link href={"/"}>
            <li>CONTACT</li>
          </Link>
        </ul>
      </div>

      <div className=" absolute top-7 right-10">{renderThemeCharger()}</div>
    </div>
  );
};

export default Navbar;
