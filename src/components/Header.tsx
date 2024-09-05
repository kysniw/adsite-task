import Button from "./ui/Button";

const Header = () => {
  return (
    <header className="z-10 relative -mb-20 w-full px-28 h-20 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <img src="/logo.svg" alt="logo" />
        <h1 className="font-bold text-2xl">
          <span className="text-primary">Cars</span>Spot
        </h1>
      </div>
      <div className="flex gap-6">
        <a href="#gallery">Galeria zdjęć</a>
        <a href="#">FaQ</a>
      </div>
      <Button>Zadzwoń do nas</Button>
    </header>
  );
};

export default Header;
