import type { ISidebarNavItem } from '../sidebar.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface Props {
  item: ISidebarNavItem;
}
export function MenuItem({ item }: Props) {
  return (
    <li className="mb-1">
      <Link
        href={item.link}
        className="flex items-center gap-2 bg-gray-100 px-4 py-2 text-gray-600 hover:bg-gray-300 hover:text-gray-900 "
      >
        <FontAwesomeIcon icon={item.icon} />
        <span>{item.label}</span>
      </Link>
    </li>
  );
}
