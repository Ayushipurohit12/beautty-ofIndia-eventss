import React from "react";

export default function Icon({ name, size = 20 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5" /></>,
    user: <><circle cx="12" cy="8" r="3.3" /><path d="M5.5 20c.4-3.5 2.8-5.5 6.5-5.5s6.1 2 6.5 5.5" /></>,
    cart: <><path d="M3 4h2l2.1 11.2h10.8L20 8H6" /><circle cx="9" cy="19" r="1" /><circle cx="17" cy="19" r="1" /></>,
    calendar: <><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M7.5 3v4M16.5 3v4M3.5 9.5h17" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></>,
    arrow: <><path d="M4 12h15M13 6l6 6-6 6" /></>,
    heart: <path d="M20.8 8.7c0 5.2-8.8 11-8.8 11s-8.8-5.8-8.8-11A4.6 4.6 0 0 1 12 6.2a4.6 4.6 0 0 1 8.8 2.5Z" />,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
    leaf: <><path d="M20.5 3.5C12 3.7 5 5 5 12c0 3.1 2 5 4.5 5 6.5 0 8.7-7.5 11-13.5Z" /><path d="M3 21c2.5-5 6.2-8.5 12-11.5" /></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}
