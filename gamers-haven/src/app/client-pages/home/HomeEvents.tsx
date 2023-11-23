'use client';

import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';
import Image from '@/app/components/image/Image';
import { useState } from 'react';

export default function HomeEvents() {
  const { data } = useQuery({ queryKey: ['home-events'], queryFn: () => QueryHome.getEvents() });
  const [isShow, setIsShow] = useState(false);
  const dataEvents = isShow ? data : data?.slice(0, 8);
  return (
    <>
      <h2 className={'text-4xl my-2'}>Events</h2>
      <div className={'grid grid-cols-4  gap-2 '}>
        {dataEvents?.map((event) => (
          <div key={event.id} className="">
            <Image
              image_id={event.event_logo?.image_id}
              size={'logo_med'}
              ratio={16 / 8}
              styleName={'rounded-lg'}
              quality={100}
            />
          </div>
        ))}
      </div>
      <button
        className={'p-2 btn-gradient ease-in-out duration-300 mx-auto my-2 flex justify-between '}
        onClick={() => setIsShow((prev) => !prev)}
      >
        {isShow ? 'Hidden' : 'More'}
      </button>
    </>
  );
}
