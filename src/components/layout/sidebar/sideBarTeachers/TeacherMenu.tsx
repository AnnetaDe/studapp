import type { ISideBarTeacherItem } from '../sidebar.types';
import TeacherItem from './TeacherItem';

interface TeacherMenuProps {
  title?: string;
  menu: ISideBarTeacherItem[];
}

export default function TeacherMenu({ title, menu }: TeacherMenuProps) {
  return (
    <nav>
      {title && <div>{title}</div>}
      <ul>
        {menu.map(item => {
          return <TeacherItem key={item.label} item={item} />;
        })}
      </ul>
    </nav>
  );
}
