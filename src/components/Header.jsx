/* eslint-disable react/no-unescaped-entities */

export function Header({ id }) {
  return (
    <>
      <div className="" id={id}>
        <header className="shadow h-screen">
          <div className="max-w-5xl mx-auto py-6 max-h-full sm:px-5 md:px-5 h-full flex flex-col justify-center items-center">
            <h1 className="text-7xl font-bold text-center text-white pb-2">
              It's a me, M<span className="text-[#FF4A57]">o</span>hamed!
            </h1>
            <span className="text-[#3F4151] text-3xl">Front end & Back end Developper</span>
          </div>
        </header>
      </div>
    </>
  );
}
