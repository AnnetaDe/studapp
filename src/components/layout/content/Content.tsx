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
      className={`col-span-4 grid-cols-1 h-full transition-all duration-500 ease-in-out ${
        isOpened ? `pl-32` : `pl-0`
      }`}
    >
      <div className={`pt-16 pb-16 h-full px-6 block`}>{children}</div>
    </div>
  );
}
