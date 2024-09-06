import Button from "./ui/Button";

const Header = () => {
  return (
    <header className="z-10 relative -mb-20 w-full px-6 lg:px-28 h-20 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <img src="/logo.svg" alt="logo" />
        <h1 className="font-bold text-2xl">
          <span className="text-primary">Cars</span>Spot
        </h1>
      </div>
      <div className="hidden md:flex gap-6">
        <a href="#gallery">Galeria zdjęć</a>
        <a href="#">FaQ</a>
      </div>
      <Button className="hidden md:block">Zadzwoń do nas</Button>
      <Button className="flex md:hidden items-center px-2 py-3">
        <span
          className="h-[3px] w-5 bg-secondary rounded-lg relative before:absolute before:h-[3px] before:w-5
         before:bg-secondary before:-top-[6px] before:left-0 after:absolute after:h-[3px] after:w-5
         after:bg-secondary after:-bottom-[6px] after:left-0"
        ></span>
      </Button>
    </header>
  );
};

export default Header;
