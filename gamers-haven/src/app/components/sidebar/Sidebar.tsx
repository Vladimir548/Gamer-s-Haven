'use client';
import SidebarMenu from '@/app/components/sidebar/SidebarMenu';
import cn from 'classnames';
import style from './style.module.scss';
import { ROUTES } from '@/app/data-routes';
export default function Sidebar() {
  return (
    <div className={cn(' relative w-[200px] z-[999]  p-5  h-full', style.wrapper)}>
      <div className="fixed left-0 top-[60px] h-full  w-[inherit]  ">
        <div className="w-full bg-[#000428b0] backdrop-blur h-full rounded-br-lg ">
          <div className="">
            {ROUTES.map((route) => (
              <SidebarMenu key={route.id} {...route} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
