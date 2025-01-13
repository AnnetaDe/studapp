import { Header } from '../header/Header';

export default function Content({
  children,
  isOpened,
}: {
  children: React.ReactNode;
  isOpened: boolean;
}) {
  return (
		<div
			className={`col-span-4 mx-auto h-full grid-cols-1 transition-all duration-500 ease-in-out ${
				isOpened ? `pl-52` : `pl-0`
			}`}
		>
			<div className={`md: mx-auto block h-full px-6 pb-16 pt-16`}>{children}</div>
		</div>
	);
}
