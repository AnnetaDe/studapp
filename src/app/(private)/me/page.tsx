import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Me } from './Me';

const Page = () => {
	return (
		<div>
			<Me />
			{/* <div className="flex flex-col justify-center">
				<Link
					className="inline-block cursor-pointer p-2 text-lg transition duration-200 hover:border-[#c98d9e] hover:text-[#c98d9e]"
					href="/generate"
				>
					<span className="mr-2">Take a test</span>
					<FontAwesomeIcon icon={faArrowAltCircleRight} />
				</Link>
				<Link
					href="/dashboard"
					className="inline-block cursor-pointer p-2 text-lg transition duration-200 hover:border-[#c98d9e] hover:text-[#c98d9e]"
				>
					<span className="mr-2">Go to Dashboard</span>
					<FontAwesomeIcon icon={faArrowAltCircleRight} />
				</Link>
			</div> */}
		</div>
	);
};
export default Page;
