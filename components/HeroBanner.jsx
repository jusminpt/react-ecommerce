import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../lib/client";
import bgBanner from "../public/banner-bg.jpg";

function HeroBanner({ heroBanner }) {
  return (
    <div
      className="hero-banner-container"
      style={{
        backgroundImage: `url(${bgBanner.src})`,
        width: "100%",
        height: "100%",
      }}
    >
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image"
        />

        <div>
          <Link href={`/product/${heroBanner.slug.current}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
