import type { ISidebarNavItem } from '../sidebar.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface Props {
  item: ISidebarNavItem;
}
export function MenuItem({ item }: Props) {
  return (
    <li>
      <Link href={item.link}>
        <span>{item.label}</span>
        <FontAwesomeIcon icon={item.icon} />
      </Link>
    </li>
  );
}
