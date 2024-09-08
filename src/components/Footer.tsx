import Link from "./ui/Link";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-secondary flex justify-between px-6 lg:px-28 py-6
    border-t-2 border-secondary"
    >
      <h2 className="font-semibold">CarsSpot</h2>
      <Link href="#" className="underline">
        Polityka prywatności
      </Link>
    </footer>
  );
};

export default Footer;
