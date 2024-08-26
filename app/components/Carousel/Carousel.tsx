'use client';
import { useRef, useState } from 'react';
import {
  ResponsiveContainer,
  StackedCarousel,
} from 'react-stacked-center-carousel';
import SelectedBadge from '../SelectedBadge';

const Carousel = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const data = [
    {
      title: 'Liquidity Machine',
      icon: 0,
      isActive: false,
      value: '200 Points',
      rewardDetails: 'Liquidity Provision to ETH/USDC1',
    },
    {
      title: 'Liquidity Machine',
      icon: 0,
      isActive: false,
      value: '200 Points',
      rewardDetails: 'Liquidity Provision to ETH/USDC2',
    },
    {
      title: 'Liquidity Machine',
      icon: 0,
      isActive: false,
      value: '200 Points',
      rewardDetails: 'Liquidity Provision to ETH/USDC3',
    },
    {
      title: 'Liquidity Machine',
      icon: 0,
      isActive: false,
      value: '200 Points',
      rewardDetails: 'Liquidity Provision to ETH/USDC4',
    },
    {
      title: 'Liquidity Machine',
      icon: 0,
      isActive: false,
      value: '200 Points',
      rewardDetails: 'Liquidity Provision to ETH/USDC5',
    },
    {
      title: 'Liquidity Machine',
      icon: 0,
      isActive: false,
      value: '200 Points',
      rewardDetails: 'Liquidity Provision to ETH/USDC6',
    },
    {
      title: 'Liquidity Machine',
      icon: 0,
      isActive: false,
      value: '200 Points',
      rewardDetails: 'Liquidity Provision to ETH/USDC7',
    },
    {
      title: 'Liquidity Machine',
      icon: 0,
      isActive: false,
      value: '200 Points',
      rewardDetails: 'Liquidity Provision to ETH/USDC',
    },
  ].map((item, index) => ({ ...item, selected: selectedItem }));
  const ref = useRef(StackedCarousel);
  const nextItem = () => {
    setSelectedItem((selectedItem + 1) % data.length);
    ref.current?.goNext((selectedItem + 1) % data.length);
  };
  const prevItem = () => {
    setSelectedItem((selectedItem + data.length - 1) % data.length);
    ref.current?.goBack((selectedItem + data.length - 1) % data.length);
  };
  return (
    <div className="relative w-full">
      <div className="flex w-full flex-col items-center">
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={SelectedBadge}
                slideWidth={187}
                carouselWidth={width}
                data={data}
                maxVisibleSlide={7}
                disableSwipe
                customScales={[1, 0.5, 0.45, 0.4, 0.35]}
              ></StackedCarousel>
            );
          }}
        />
        <div className="mx-1 my-3 h-[60px] w-[178px] rounded-[12px] border-[2px] border-dark-ele2 bg-dark-ele2 p-1 text-center">
          <div className="text-[12px] text-white">Reward Details</div>
          <div className="animate-fadeIn text-[12px] text-text-secondary">
            {data[selectedItem].rewardDetails}
          </div>
        </div>
        <div
          className="absolute left-[20px] flex h-[244px] w-[47px] items-center justify-center rounded-[32px] bg-dark-ele3 text-white"
          onClick={() => prevItem()}
        >
          {'<'}
        </div>
        <div
          className="absolute right-[20px] flex h-[244px] w-[47px] items-center justify-center rounded-[32px] bg-dark-ele3 text-white"
          onClick={() => nextItem()}
        >
          {'>'}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
