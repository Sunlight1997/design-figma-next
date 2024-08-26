'use client';

import { useState } from 'react';
import LogoButton from '../LogoButton';
import ProfileButton from '../ProfileButton';
import TabButton from '../TabButton';

const HeaderNav = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <>
      <div className="z-10 flex w-full items-center justify-center justify-between py-2">
        <div className="flex h-[72px] items-center">
          <LogoButton />
          <nav>
            <ul className="flex">
              <TabButton
                title="Dashboard"
                link="/"
                isActive={selectedItem == 0}
              />
              <TabButton title="Tasks" link="/" isActive={selectedItem == 1} />
              <TabButton title="Badges" link="/" isActive={selectedItem == 2} />
              <TabButton
                title="Leaderboard"
                link="/"
                isActive={selectedItem == 3}
              />
              <TabButton
                title="Connections"
                link="/"
                isActive={selectedItem == 4}
              />
            </ul>
          </nav>
        </div>
        <ProfileButton />
      </div>
      <div className="absolute top-[80px] z-0 h-[1px] w-full bg-dark-ele1"></div>
    </>
  );
};

export default HeaderNav;
