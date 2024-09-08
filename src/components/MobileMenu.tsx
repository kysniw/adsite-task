import { useEffect, useRef, useState } from "react";
import Button from "./ui/Button";
import Link from "./ui/Link";
import classNames from "classnames";
import Tooltip from "./ui/Tooltip";

const MobileMenu = ({ setModalOpen }: { setModalOpen: () => void }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const refMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (isMenuVisible) {
        setIsMenuVisible(false);
      }
    };
    const handleClickMenuOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (refMenu.current && !refMenu.current.contains(target)) {
        setIsMenuVisible(false);
      }
    };
    document.addEventListener("scroll", handleWindowScroll, true);
    document.addEventListener("pointerdown", handleClickMenuOut, true);

    return () => {
      document.removeEventListener("scroll", handleWindowScroll, true);
      document.removeEventListener("pointerdown", handleClickMenuOut, true);
    };
  });

  const cnMenu = classNames(
    `absolute bg-secondary bg-opacity-80 backdrop-blur-sm left-2 right-2 rounded-lg top-20 flex justify-center
       items-center flex-col gap-6 py-8 shadow-lg duration-300`,
    {
      "visible translate-y-0 opacity-100": isMenuVisible,
      "invisible -translate-y-28 opacity-0": !isMenuVisible,
    }
  );

  const cnBars = classNames(
    `h-[3px] w-5 rounded-lg relative before:bg-primary after:bg-primary before:absolute before:h-[3px] before:w-5
           before:left-0 before:rounded-lg after:absolute after:h-[3px] after:w-5
           after:left-0 after:rounded-lg after:duration-300 before:duration-300`,
    {
      "before:rotate-45 after:-rotate-45 before:inset-0 after:inset-0":
        isMenuVisible,
    },
    {
      "before:rotate-0 after:-rotate-0 before:-top-[6px] after:-bottom-[6px] bg-primary":
        !isMenuVisible,
    }
  );

  return (
    <div ref={refMenu} className="block md:hidden">
      <Button
        variant="custom"
        className="flex items-center justify-center bg-transparent border-none"
        onClick={() => setIsMenuVisible(!isMenuVisible)}
      >
        <span className={cnBars}></span>
      </Button>
      <nav className={cnMenu}>
        <Link href="#gallery">Galeria zdjęć</Link>
        <Link href="#" inactive className="relative group">
          FaQ
          <Tooltip>Dostępne wkrótce</Tooltip>
        </Link>
        <Button onClick={setModalOpen}>Zadzwoń do nas</Button>
      </nav>
    </div>
  );
};

export default MobileMenu;
