import { faNavicon } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export function SideBarHeader() {
  return (
    <div className="flex gap-4 px-4 py-4 items-center">
      <button>
        <FontAwesomeIcon icon={faNavicon} fontSize={26} />
      </button>

      <Link href="/">
        <span className="mr-2">StudApp</span>

        <FontAwesomeIcon
          icon={faGraduationCap}
          fontSize={26}
          color="white"
          style={{
            strokeWidth: '12px',
            stroke: 'black',
            filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5))',
          }}
        />
      </Link>
    </div>
  );
}
