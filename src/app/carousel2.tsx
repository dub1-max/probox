"use client";
// import Image from "next/image";
// import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function   CardsCarousel1() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-emerald-700 font-sans">
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Business Centers",
    title: "Pro Box",
    src: "https://i.postimg.cc/vZ8NCvn7/DSC08361.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Pro Box",
    src: "https://i.postimg.cc/3rpVGN7G/DSC08383.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Pro Box",
    src: "https://i.postimg.cc/Qx3PJDxy/DSC08387.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Pro Box",
    src: "https://i.postimg.cc/MKmLsLnK/DSC08471.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Pro Box",
    src: "https://i.postimg.cc/y8fbKShM/DSC08857.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Pro Box",
    src: "https://i.postimg.cc/cHnMmmBM/DSC08444.jpg",
    content: null,
  },
];