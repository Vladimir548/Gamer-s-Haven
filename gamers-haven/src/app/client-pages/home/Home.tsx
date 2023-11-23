'use client';

import SwiperHome from '@/app/client-pages/swiper/SwiperHome';
import HomePopular from '@/app/client-pages/home/HomePopular';
import HomeEvents from '@/app/client-pages/home/HomeEvents';
import ComingSoon from '@/app/client-pages/home/ComingSoon';
import HomeGenres from '@/app/client-pages/home/HomeGenres';

export default function Home() {
  return (
    <div>
      <div className="">
        <SwiperHome />
      </div>
      <div className="">
        <HomePopular />
      </div>
      <div className="">
        <HomeEvents />
      </div>
      <div className="">
        <ComingSoon />
      </div>{' '}
      <div className="">
        <HomeGenres />
      </div>
    </div>
  );
}
