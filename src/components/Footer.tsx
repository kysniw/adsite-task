import Link from "./ui/Link";
import Tooltip from "./ui/Tooltip";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-secondary flex justify-between px-6 lg:px-28 py-6
    border-t-2 border-secondary font-roboto-condensed"
    >
      <h2 className="font-semibold">CarsSpot</h2>
      <Link className="underline relative group" inactive>
        Polityka prywatności
        <Tooltip color="primary" position="top">
          Dostępne wkrótce
        </Tooltip>
      </Link>
    </footer>
  );
};

export default Footer;
