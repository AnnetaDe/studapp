import { faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function SideBarHeader() {
  return (
    <div>
      SideBarHeader
      <button>Menu</button>
      <span>
        <span>
          StudAppLogo <FontAwesomeIcon icon={faWaveSquare} />
        </span>
      </span>
    </div>
  );
}
