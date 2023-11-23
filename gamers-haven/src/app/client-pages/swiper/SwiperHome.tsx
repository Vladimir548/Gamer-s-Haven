'use client';
import 'swiper/css';
import 'swiper/css/pagination';
import style from './style.module.scss';
import './styles.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';
import Image from '@/app/components/image/Image';
export default function SwiperHome() {
  const { data, isLoading } = useQuery({ queryKey: ['swiper-home'], queryFn: QueryHome.getSwiper });
  return (
    <div>
      <Swiper
        loop={true}
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {data?.map((game) => (
          <SwiperSlide className={'relative rounded-lg'} key={game.id}>
            <Image
              image_id={game.artworks && game.artworks[0].image_id}
              size={'720p'}
              styleName={'rounded-lg'}
              ratio={16 / 9}
              quality={50}
            />
            <div className="absolute left-0 top-0 w-full h-full bg-black/30 z-10 backdrop-blur-[4px] rounded-lg overflow-hidden">
              <div className="flex justify-items-start items-center w-full px-3 py-2 h-full ">
                <div className="flex flex-col gap-y-2">
                  <h2 className={'flex text-white title'}>{game.name}</h2>
                  <div className="flex flex-wrap gap-x-2">
                    {game.genres?.map((genre) => (
                      <span className={' my-0.5  title_type '} key={genre.id}>
                        {genre.name}{' '}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-x-1">
                    {game.platforms?.map((platform) => (
                      <span className={' title_type '} key={platform.id}>
                        {platform.abbreviation}
                      </span>
                    ))}
                  </div>
                  {/*<div className={'flex text-start'}>*/}
                  {/*  <p className={style.storyline}>{game.storyline}</p>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
