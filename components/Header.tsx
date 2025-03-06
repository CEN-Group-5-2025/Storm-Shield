"use client";
import React from 'react';
import { useScrollTo } from "./useScrollTo";
import { motion } from "framer-motion";
import { navItem } from "./animations";

export function Header() {
  const scrollTo = useScrollTo();

  return (
    <header className="flex relative justify-between items-center px-20 py-10 max-md:flex-col max-md:gap-5 max-md:p-5">
      <h1 className="text-3xl italic font-extrabold tracking-wider text-emerald-300 text-opacity-90">
        StormShield
      </h1>
      <nav className="flex gap-16 items-center max-md:flex-col max-md:gap-5">
        <motion.button
          onClick={() => scrollTo("dashboard")}
          variants={navItem}
          whileHover="hover"
          className="text-lg font-semibold text-white cursor-pointer"
        >
          Dashboard
        </motion.button>
        <motion.button
          onClick={() => scrollTo("shelter")}
          variants={navItem}
          whileHover="hover"
          className="text-lg font-semibold text-white cursor-pointer"
        >
          Shelter Locator
        </motion.button>
        <motion.button
          onClick={() => scrollTo("community")}
          variants={navItem}
          whileHover="hover"
          className="text-lg font-semibold text-white cursor-pointer"
        >
          Community
        </motion.button>
        <motion.button
          onClick={() => scrollTo("volunteer")}
          variants={navItem}
          whileHover="hover"
          className="text-lg font-semibold text-white cursor-pointer"
        >
          Volunteer Matching
        </motion.button>
      </nav>
      <div className="w-11 h-11">
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="I24:362;23:349;10:34" layer-name="gg:profile" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" class="profile-svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M29.3334 16.5C29.3334 18.4449 28.5608 20.3102 27.1855 21.6855C25.8103 23.0607 23.945 23.8333 22.0001 23.8333C20.0552 23.8333 18.1899 23.0607 16.8146 21.6855C15.4394 20.3102 14.6667 18.4449 14.6667 16.5C14.6667 14.5551 15.4394 12.6898 16.8146 11.3146C18.1899 9.93929 20.0552 9.16667 22.0001 9.16667C23.945 9.16667 25.8103 9.93929 27.1855 11.3146C28.5608 12.6898 29.3334 14.5551 29.3334 16.5ZM25.6667 16.5C25.6667 17.4725 25.2804 18.4051 24.5928 19.0927C23.9052 19.7804 22.9725 20.1667 22.0001 20.1667C21.0276 20.1667 20.095 19.7804 19.4074 19.0927C18.7197 18.4051 18.3334 17.4725 18.3334 16.5C18.3334 15.5275 18.7197 14.5949 19.4074 13.9073C20.095 13.2196 21.0276 12.8333 22.0001 12.8333C22.9725 12.8333 23.9052 13.2196 24.5928 13.9073C25.2804 14.5949 25.6667 15.5275 25.6667 16.5Z" fill="#71C2CC" fill-opacity="0.89"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 1.83334C10.8625 1.83334 1.83337 10.8625 1.83337 22C1.83337 33.1375 10.8625 42.1667 22 42.1667C33.1375 42.1667 42.1667 33.1375 42.1667 22C42.1667 10.8625 33.1375 1.83334 22 1.83334ZM5.50004 22C5.50004 25.8317 6.80721 29.359 8.99804 32.1603C10.537 30.1402 12.522 28.5031 14.798 27.3767C17.0741 26.2502 19.5797 25.665 22.1192 25.6667C24.6261 25.6637 27.1005 26.2333 29.3538 27.332C31.6071 28.4307 33.5797 30.0294 35.1212 32.0063C36.7097 29.9229 37.7792 27.4912 38.2413 24.9124C38.7035 22.3336 38.5448 19.6818 37.7786 17.1765C37.0124 14.6711 35.6606 12.3843 33.8351 10.5051C32.0096 8.62588 29.7628 7.20841 27.2807 6.36994C24.7986 5.53146 22.1526 5.29608 19.5614 5.68329C16.9703 6.07049 14.5087 7.06914 12.3801 8.5966C10.2516 10.1241 8.51736 12.1364 7.32096 14.4672C6.12456 16.798 5.50037 19.3801 5.50004 22ZM22 38.5C18.2122 38.5061 14.5386 37.203 11.6014 34.8113C12.7835 33.1185 14.3572 31.7363 16.1885 30.7825C18.0198 29.8287 20.0544 29.3316 22.1192 29.3333C24.1582 29.3316 26.1682 29.8163 27.9822 30.7474C29.7962 31.6785 31.3618 33.029 32.549 34.6867C29.5891 37.1562 25.8549 38.506 22 38.5Z" fill="#71C2CC" fill-opacity="0.89"></path> </svg>',
          }}
        />
      </div>
    </header>
  );
}
