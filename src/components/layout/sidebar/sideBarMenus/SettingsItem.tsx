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
        <FontAwesomeIcon
          icon={data.icon}
          fontSize={24}
          style={{
            strokeWidth: '12px',
            stroke: 'black',
            filter: 'drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.4))',
          }}
        />
        {/* <span>{data.label}</span> */}
      </Link>
    </div>
  );
}
