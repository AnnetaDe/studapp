type Props = {
  toggle: () => void;
  isOpen: boolean;
};

export const ButtonMenu = ({ toggle, isOpen }: { toggle: () => void; isOpen: boolean }) => {
  return (
    <div>
      <button
        onClick={() => toggle()}
        className={`text-white text-lg  relative group outline-none focus:outline-none${
          isOpen ? 'ring-4' : ''
        } `}
      >
        <div
          className={`relative flex overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all ${
            isOpen ? 'bg-slate-800' : 'bg-slate-700'
          } ring-0 ring-gray-300 hover:ring-8 ${
            isOpen ? 'group-focus:ring-4' : ''
          } ring-opacity-30 duration-200 shadow-md`}
        >
          <div className="flex flex-col justify-between w-[16px] h-[16px] transform transition-all duration-300 origin-center overflow-hidden">
            <div
              className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                isOpen ? 'rotate-[45deg]' : ''
              }`}
            ></div>
            <div
              className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                isOpen ? '-translate-x-10' : ''
              }`}
            ></div>
            <div
              className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                isOpen ? '-rotate-[45deg]' : ''
              }`}
            ></div>
          </div>
        </div>
      </button>
    </div>
  );
};
