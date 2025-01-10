import { Header } from '../header/Header';

interface ContentProps {
  children: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
  return (
    <div className="col-span-4 grid-cols-1 h-full ">
      <div className="bg-blue-500 pt-20 pb-16 h-full">{children}</div>
    </div>
  );
}
