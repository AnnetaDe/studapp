import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export function HeaderLeft() {
    return (
        <div className="flex items-center gap-4 text-white">
            <Link
                href="/"
                className="flex items-center gap-1 transition-colors duration-300 ease-in-out hover:text-indigo-400"
            >
                <span className="ml-24 mr-1 text-3xl transition-colors duration-300 ease-in-out">
                    Study
                </span>

                <FontAwesomeIcon
                    icon={faGraduationCap}
                    fontSize={34}
                    color="transparent"
                    style={{
                        strokeWidth: '14px',
                        stroke: '#db2778',
                        filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2)) ',
                    }}
                />
            </Link>
        </div>
    );
}
