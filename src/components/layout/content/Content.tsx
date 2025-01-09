import { Header } from '../header/Header';

interface ContentProps {
  children: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
  return (
    <div className="content  bg-gray-200 col-span-4 ">
      {/* <Header /> */}
      {children}
    </div>
  );
}
