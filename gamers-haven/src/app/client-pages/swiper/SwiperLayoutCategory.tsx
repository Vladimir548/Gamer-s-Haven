'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import style from './style.module.scss';
import './styles.css';
import Image from '@/app/components/image/Image';
import React, { useRef } from 'react';
import { GamesResponse } from '@/interface/games/interface-games';
import Link from 'next/link';
import cn from 'classnames';
import SwiperButtonNavigation from '@/app/client-pages/swiper/SwiperButtonNavigation';
import { motion, AnimatePresence } from 'framer-motion';

interface ISwiperLayout {
  data?: GamesResponse;
  title: string;
  typeImage: 'poster' | 'art';
}
export default function SwiperLayoutCategory({ data, title, typeImage }: ISwiperLayout) {
  const swiperRef = useRef<any>();
  const typeBreakpoints = {
    poster: {
      1024: {
        slidesPerView: 5,
      },
      640: {
        slidesPerView: 4,
      },
      320: {
        slidesPerView: 3,
      },
    },
    art: {
      1024: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };
  const currentBreakpoints = typeBreakpoints[typeImage];
  return (
    <AnimatePresence>
      <motion.div
        className={cn(style.wrapper_layout, 'hidden')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex justify-between items-center mb-2">
          <h2 className={' title_sections'}>{title}</h2>
          <SwiperButtonNavigation swiperRef={swiperRef} />
        </div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          slidesPerView={5}
          spaceBetween={10}
          breakpoints={currentBreakpoints}
          className="mySwiper_layout"
        >
          {data?.map((game) => (
            <SwiperSlide
              className={cn(
                'relative overflow-hidden rounded-lg z-50 flex bg-slate-500/50 backdrop-blur',
                style.bg_slide,
              )}
              key={game.id}
            >
              <Link key={game.id} href={'/ff'} className={'flex flex-col w-full h-full'}>
                {typeImage === 'poster' && (
                  <>
                    <Image
                      image_id={game.cover && game.cover.image_id}
                      size={'cover_big'}
                      styleName={'rounded-lg object-cover flex-1'}
                      quality={100}
                      ratio={4 / 5}
                    />
                    <div className="flex flex-col flex-1 p-1">
                      <h2
                        className={'flex text-start text-white title_card flex-1 overflow_line_two'}
                      >
                        {game.name}
                      </h2>
                    </div>
                  </>
                )}
                {typeImage === 'art' && (
                  <>
                    <Image
                      image_id={game.artworks && game.artworks[0].image_id}
                      size={'screenshot_med'}
                      styleName={'rounded-lg object-cover flex-1'}
                      quality={80}
                      ratio={18 / 10}
                    />
                    <div className="absolute left-0 bottom-0 w-full flex justify-center  bg-black/50 backdrop-blur">
                      <h2 className={' flex text-center ms:text-lg md:text-xl'}>{game.name}</h2>
                    </div>
                    {title === 'Coming soon...' && (
                      <span
                        className={
                          'absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 title bg-black/50 backdrop-blur p-2 rounded-lg'
                        }
                      >
                        {new Date(game?.first_release_date! * 1000).toLocaleDateString()}
                      </span>
                    )}
                  </>
                )}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </AnimatePresence>
  );
}
