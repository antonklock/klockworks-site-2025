import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-center p-4">
      <Image
        src="/logos/kw-logo-stacked-white.svg"
        alt="Klockworks Logo"
        width={800}
        height={800}
      />
    </header>
  );
};

export default Header;
