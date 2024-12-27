import type { ISideBarTeacherItem } from '../sidebar.types';
import Image from 'next/image';

interface Props {
  item: ISideBarTeacherItem;
}

export default function TeacherItem({ item }: Props) {
  return (
    <li>
      <span>{item.label}</span>
      <span>
        {item.avatar && <Image alt={item.label} src={item.avatar} width={30} height={30} />}
      </span>
    </li>
  );
}
