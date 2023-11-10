'use client';

import Link from 'next/link';

export default function SidebarMenu() {
  return (
    <div>
      <Link
        className={
          'text-white p-1 bg-white/30 backdrop-blur inline-flex ease-in-out duration-300 rounded-lg w-full hover:bg-white/50 '
        }
        href={'/games'}
      >
        Games
      </Link>
    </div>
  );
}
