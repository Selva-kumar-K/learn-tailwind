import React, { useEffect, useState } from "react";
import Gif from "./../../../public/mrbean-dance.gif";
import Image from "next/image";

export default function Marquee() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // Hide after 5 seconds (same as animation duration)

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="marquee-container">
      {visible && (
        <div className="marquee-image">
          <Image src={Gif} alt="gif" />
        </div>
      )}
    </div>
  );
}
