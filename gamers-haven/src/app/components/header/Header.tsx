'use client';
import { useScroll, motion, useTransform } from 'framer-motion';
import HeaderNav from '@/app/components/header/HeaderNav';
import HeaderSearch from '@/app/components/header/header-search/HeaderSearch';

export default function Header() {
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 100], ['transparent', '#000428b0']);
  const backdropFilter = useTransform(scrollY, [0, 100], ['blur(0)', 'blur(8px)']);
  const position = useTransform(scrollY, [0, 100], ['relative', 'fixed']);
  const marginBottom = useTransform(scrollY, [0, 100], ['10px', '0px']);

  return (
    <div className={'h-[60px] w-full'}>
      <motion.div
        style={{ position, background, backdropFilter, marginBottom }}
        className={` z-50 left-0 top-0 flex items-center   ease-in-out duration-300 border-b-2 border-white/30  w-full h-[60px]  px-1 `}
      >
        <div className=" w-[200px]  border-white/30 ">
          <h2 className={'name'}>GamersHaven</h2>
        </div>

        <div className="">
          <HeaderNav />
        </div>
        <div className="flex justify-center flex-1">
          <HeaderSearch />
        </div>
        <div className="">users</div>
      </motion.div>
    </div>
  );
}
