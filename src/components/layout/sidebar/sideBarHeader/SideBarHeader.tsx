import { faNavicon } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export function SideBarHeader() {
  return (
    <div className="flex gap-4  items-center  text-white">
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-indigo-400"
      >
        <span className="ml-24 mr-2 text-xl font-bold transition-colors duration-300 ease-in-out ">
          StudApp
        </span>

        <FontAwesomeIcon
          icon={faGraduationCap}
          fontSize={32}
          color="white"
          style={{
            strokeWidth: '12px',
            stroke: 'black',
            filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5)) ',
          }}
        />
      </Link>
    </div>
  );
}
