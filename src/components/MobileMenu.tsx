import { useState } from "react";
import Button from "./ui/Button";
import Link from "./ui/Link";
import classNames from "classnames";

const MobileMenu = ({ setModalOpen }: { setModalOpen: () => void }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const cnMenu = classNames(
    `absolute bg-secondary bg-opacity-80 backdrop-blur-sm left-2 right-2 rounded-lg top-20 flex justify-center
       items-center flex-col gap-6 py-8 shadow-lg duration-300`,
    {
      "visible translate-y-0 opacity-100": isMenuVisible,
      "invisible -translate-y-28 opacity-0": !isMenuVisible,
    }
  );

  return (
    <div className="block md:hidden">
      <Button
        variant="custom"
        className="flex items-center bg-transparent border-none"
        onClick={() => setIsMenuVisible(!isMenuVisible)}
      >
        <span
          className="h-[3px] w-5 bg-primary rounded-lg relative before:absolute before:h-[3px] before:w-5
         before:bg-primary before:-top-[6px] before:left-0 before:rounded-lg after:absolute after:h-[3px] after:w-5
         after:bg-primary after:-bottom-[6px] after:left-0 after:rounded-lg"
        ></span>
      </Button>
      <nav onClick={() => setIsMenuVisible(false)} className={cnMenu}>
        <Link href="#gallery">Galeria zdjęć</Link>
        <Link href="#">FaQ</Link>
        <Button onClick={setModalOpen}>Zadzwoń do nas</Button>
      </nav>
    </div>
  );
};

export default MobileMenu;
