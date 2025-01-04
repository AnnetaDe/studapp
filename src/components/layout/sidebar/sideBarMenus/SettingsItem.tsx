import type { ISideBarSettingsItem } from '../sidebar.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface Props {
  data: ISideBarSettingsItem;
  title?: string;
}

export function SettingsItem({ data }: Props) {
  return (
    <div className="settings">
      <Link href={data.link} className="flex w-7 h-7 p-1 items-center gap-2">
        <FontAwesomeIcon icon={data.icon} fontSize={24} />
        {/* <span>{data.label}</span> */}
      </Link>
    </div>
  );
}
