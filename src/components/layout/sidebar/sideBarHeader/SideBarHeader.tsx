import { faNavicon } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export function SideBarHeader() {
  return (
    <div className="flex gap-4 px-4 py-4 items-center h-20 bg-slate-600 text-white">
      <Link
        href="/"
        className="flex items-center gap-2 hover:text-indigo-400"
      >
        <span className="mr-2 text-xl font-bold transition-colors duration-300 ease-in-out ">
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
      {/* <button>
        <FontAwesomeIcon
          icon={faNavicon}
          fontSize={30}
        />
      </button> */}
    </div>
  );
}
