import type { ISidebarNavItem } from '../sidebar.types';
import { MenuItem } from './MenuItem';

interface SideBarMenuProps {
  title?: string;
  menu: ISidebarNavItem[];
}

export default function SideMenu({ title, menu }: SideBarMenuProps) {
  return (
    <nav>
      {title && <div>{title}</div>}
      <ul>
        {menu.map(item => {
          return <MenuItem key={item.label} item={item} />;
        })}
      </ul>
    </nav>
  );
}
