"use client";

import { useEffect, useState, useRef } from "react";
import Card from "@/component/Card";
import Header from "@/component/Header";
import Main from "@/component/Main";

export default function Home() {
  const [showInput, setShowInput] = useState(false);
  const mainRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        const mainHeight = mainRef.current.offsetHeight;
        if (window.scrollY > mainHeight - 55) {
          setShowInput(true);
        } else {
          setShowInput(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white h-full w-full">
      <Header showInput={showInput} />
      <Main ref={mainRef} />
      <div className="h-[100vh] bg-white w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-10">
        {[...Array(8)].map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
}
