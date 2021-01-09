import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 75) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <div
      className={`fixed w-full py-4 items-center z-50 flex ${
        scrolled ? "bg-white flex-row justify-between px-4 shadow-md" : "bg-transparent flex-col"
      }`}
    >
      <div
        className={`flex items-center justify-center ${
          scrolled
            ? "from-light-yellow to-light-orange bg-gradient-to-br p-1 rounded-md"
            : "bg-transparent"
        }`}
      >
        <Link href="/design">
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      <div className="flex space-x-4 py-2">
        <Link href="/design">
          <a className={`font-medium ${scrolled ? "text-gray-900" : "text-white"}`}>Design</a>
        </Link>
        <Link href="/">
          <a className={`font-medium ${scrolled ? "text-gray-900" : "text-white"}`}>Develop</a>
        </Link>
        <Link href="/">
          <a className={`font-medium ${scrolled ? "text-gray-900" : "text-white"}`}>Deliver</a>
        </Link>
      </div>
    </div>
  );
}

const Logo = () => {
  return (
    <svg
      width="62"
      height="62"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer w-10 h-auto"
    >
      <path
        d="M31 46.7143h23.2143c2.5642 0 4.6428 2.0787 4.6428 4.6429 0 2.5641-2.0786 4.6428-4.6428 4.6428H31v-9.2857z"
        fill="#fff"
      />
      <g filter="url(#filter0_d)">
        <path
          d="M31.0929 46.7061c-.0309.0001-.0619.0002-.0929.0002-8.6744 0-15.7063-7.0319-15.7063-15.7063S22.3256 15.2937 31 15.2937 46.7063 22.3256 46.7063 31c0 5.4731-2.7994 10.2924-7.0446 13.1041h12.6329C54.6443 40.2938 56 35.8052 56 31 56 17.1929 44.8071 6 31 6S6 17.1929 6 31s11.1929 25 25 25c7.8574 0 14.8682-3.6249 19.4513-9.2937H31.0929v-.0002z"
          fill="#fff"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="62"
          height="62"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
