import { FaArrowDown } from "react-icons/fa6";
import Button from "./ui/Button";
import Title from "./ui/Title";

const SeoTile = () => {
  return (
    <div>
      <Title size="xs">
        Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla
        commodo.
      </Title>
      <p className="py-6 font-roboto-condensed">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quae
        in, a libero natus maiores fuga ipsa iure modi, eos laborum aliquid
        recusandae laboriosam. Natus beatae cum voluptas iste quisquam!
      </p>
      <Button
        variant="custom"
        className="flex items-center gap-2 border-b-2 border-secondary
         font-roboto-condensed pb-1"
      >
        <span>Rozwiń</span>
        <FaArrowDown className="text-lg" />
      </Button>
    </div>
  );
};

export default SeoTile;
