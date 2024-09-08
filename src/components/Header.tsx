import MobileMenu from "./MobileMenu";
import Button from "./ui/Button";
import Link from "./ui/Link";

const Header = ({ setModalOpen }: { setModalOpen: () => void }) => {
  return (
    <header className="z-10 relative -mb-20 w-full px-6 lg:px-28 h-20 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <img src="/logo.svg" alt="logo" />
        <h1 className="font-bold text-2xl">
          <span className="text-primary">Cars</span>Spot
        </h1>
      </div>
      <div className="hidden md:flex gap-6">
        <Link href="#gallery">Galeria zdjęć</Link>
        <Link href="#">FaQ</Link>
      </div>
      <Button className="hidden md:block" onClick={setModalOpen}>
        Zadzwoń do nas
      </Button>
      <MobileMenu setModalOpen={setModalOpen} />
    </header>
  );
};

export default Header;
