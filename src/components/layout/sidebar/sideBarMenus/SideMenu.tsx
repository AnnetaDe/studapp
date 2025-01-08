import { useUserContext } from '@/app/UserProvider';
import type { ISidebarNavItem } from '../sidebar.types';
import { MenuItem } from './MenuItem';

interface SideBarMenuProps {
  title?: string;
  menu: ISidebarNavItem[];
}

export default function SideMenu({ title, menu }: SideBarMenuProps) {
  // const pathname = usePathname();
  // const { user } = useUserContext();
  // console.log('user', user);
  return (
    <nav>
      {title && <div>{title}</div>}
      <ul>
        {menu.map(item => {
          // const isActive = pathname === item.link;
          return <MenuItem key={item.label} item={item} />;
        })}
      </ul>
    </nav>
  );
}
