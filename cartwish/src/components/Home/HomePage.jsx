import React from "react";
import HeroSection from "./HeroSection";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy Iphone 14"
        subtitle="Experience the power of latest iphone 14 with our most Pro camera ever"
        link="/"
        image={iphone}
      />
      <FeaturedProducts />
      <HeroSection
        title="Build the Ultimate Setup"
        subtitle="You can add Studi Display and Magic accessories to your bag after config you Mac mini"
        link="/"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
