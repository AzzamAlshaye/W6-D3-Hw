import React, { useState, useEffect } from "react";

const IMAGES = [
  "https://media.united.com/assets/m/6036467b6c6c2366/original/040125_FOC_95K_HPCARSUL1_2732x1536_TY.jpg",
  "https://media.united.com/assets/m/178313ba33aca8b4/original/1265_Starlink_HP_Takeover_Desktop_img_1366x768-2x.jpg",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div
        className="h-full w-full bg-center bg-cover transition-opacity duration-500"
        style={{ backgroundImage: `url(${IMAGES[index]})` }}
      >
        {/* <img
          src="https://apps.rokt.com/userfiles/7325596850474455043.gif"
          className="h-full w-full bg-center bg-cover transition-opacity duration-500"
          alt=" new card gif"
        /> */}
      </div>
    </>
  );
}
