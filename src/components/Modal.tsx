import classNames from "classnames";
import Button from "./ui/Button";
import { FaX } from "react-icons/fa6";

interface ModalProps {
  isVisible: boolean;
  children: React.ReactNode;
  setClose: () => void;
}

const Modal = ({ isVisible, children, setClose }: ModalProps) => {
  const cn = classNames(
    "fixed inset-0 duration-300 flex justify-center items-center text-center z-50",
    { "visible backdrop-blur-md": isVisible, invisible: !isVisible }
  );

  const cnInside = classNames(
    `relative bg-dark text-secondary px-8 py-4 rounded-lg shadow-2xl shadow-dark duration-300`,
    { "scale-100": isVisible, "scale-0": !isVisible }
  );

  return (
    <div className={cn}>
      <div className={cnInside}>
        {children}
        <Button
          variant="custom"
          className="absolute bg-primary text-xl rounded-lg h-10 w-10 flex
          justify-center items-center -right-11 top-0"
          onClick={setClose}
        >
          <FaX />
        </Button>
      </div>
    </div>
  );
};

export default Modal;
