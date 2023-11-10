import SidebarMenu from '@/app/components/sidebar/SidebarMenu';
import cn from 'classnames';
import style from './style.module.scss';
export default function Sidebar() {
  return (
    <div className={cn(' relative w-[200px]  p-5  h-full', style.wrapper)}>
      <div className="fixed left-0 top-0 h-full p-1  w-[inherit]  ">
        <div className="w-full bg-slate-500/50 backdrop-blur h-full rounded-lg p-1">
          <SidebarMenu />
        </div>
      </div>
    </div>
  );
}
