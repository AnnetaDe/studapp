import { useUserContext } from '@/app/UserProvider';
import type { ISidebarNavItem } from '../sidebar.types';
import { MenuItem } from './MenuItem';
import { usePathname } from 'next/navigation';

interface SideBarMenuProps {
  title?: string;
  menu: ISidebarNavItem[];
}

export default function SideMenu({ title, menu }: SideBarMenuProps) {
  const pathname = usePathname();
  return (
    <nav>
      {title && <div>{title}</div>}
      <ul>
        {menu.map(item => {
          const isActive = pathname === item.link;

          return (
						<MenuItem
							key={item.label}
							item={item}
							isActive={isActive}
						/>
					);
        })}
      </ul>
    </nav>
  );
}
