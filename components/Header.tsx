import Image from "next/image";

const Header = () => {
  return (
    <header className="relative flex p-4 h-[100vh]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/moss.mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/logos/kw-logo-stacked-white.svg"
            alt="Klockworks Logo"
            width={800}
            height={800}
          />
        </div>

        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center text-white">
          <span>scroll</span>
          <span className="text-2xl">↓</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
