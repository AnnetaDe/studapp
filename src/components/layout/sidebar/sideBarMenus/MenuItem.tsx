import type { ISidebarNavItem } from '../sidebar.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface Props {
  item: ISidebarNavItem;
  isActive?: boolean;
}
export function MenuItem({ item, isActive }: Props) {
  return (
    <li className="mb-1 rounded-md">
      <Link
        href={item.link}
        className={`flex items-center gap-2 bg-gray-100 px-4 py-2 text-gray-600 hover:bg-gray-300 hover:text-gray-900 ${
          isActive ? 'bg-pink-600' : 'text-gray-600'
        }`}
      >
        <FontAwesomeIcon
          color="white"
          icon={item.icon}
          style={{
            strokeWidth: '16px',
            stroke: 'black',
            filter: 'drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5))',
          }}
        />
        <span>{item.label}</span>
      </Link>
    </li>
  );
}
