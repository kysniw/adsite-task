import Button from "./ui/Button";
import Title from "./ui/Title";

const Main = () => {
  return (
    <main className="z-0 min-h-screen relative w-full pt-20 px-28 overflow-hidden">
      <div className="z-10 relative mt-20 flex flex-col gap-12">
        <Title className="w-1/2">Sprzedajemy samochody z&nbsp;Europy</Title>
        <p className="w-1/3">
          Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
        </p>
        <div className="flex gap-6">
          <Button>Zobacz zdjęcia</Button>
          <Button variant="bordered">Zadzwoń do nas</Button>
        </div>
      </div>
      <img
        src="/bg-image.png"
        alt="bg-image"
        className="z-0 absolute right-20 top-0 max-h-[550px] w-max"
      />
      <img
        src="/bg-cars.png"
        alt="bg-cars"
        className="z-0 absolute right-0 bottom-20 w-2/3 max-w-[900px]"
      />
    </main>
  );
};

export default Main;
