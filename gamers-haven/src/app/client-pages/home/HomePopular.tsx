'use client';
import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';
import SwiperLayoutCategory from '@/app/client-pages/swiper/SwiperLayoutCategory';
export default function HomePopular() {
  const { data } = useQuery({ queryKey: ['home-popular'], queryFn: () => QueryHome.getPopular() });
  return (
    <div className={'flex flex-col'}>
      <SwiperLayoutCategory data={data} title={'Popular'} typeImage={'poster'} />
    </div>
  );
}
