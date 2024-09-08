import Button from "./ui/Button";
import Title from "./ui/Title";

const Main = ({ setModalOpen }: { setModalOpen: () => void }) => {
  const scrollToGallery = () => {
    const gallery = document.querySelector("#gallery");
    gallery?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <main className="z-0 min-h-screen relative w-full pt-20 px-6 sm:px-28 overflow-hidden">
      <div className="z-10 relative mt-20 flex flex-col gap-12">
        <Title size="xl" className="w-full xl:w-1/2">
          Sprzedajemy samochody z&nbsp;Europy
        </Title>
        <p className="w-full xl:w-1/4 text-lg font-roboto-condensed ">
          Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
        </p>
        <div className="flex flex-col xs:flex-row justify-center sm:justify-normal gap-4 sm:gap-6">
          <Button onClick={scrollToGallery}>Zobacz zdjęcia</Button>
          <Button variant="bordered" onClick={setModalOpen}>
            Zadzwoń do nas
          </Button>
        </div>
      </div>
      <img
        src="./bg-image.png"
        alt="bg-image"
        className="z-0 absolute right-20 top-0 h-full min-w-fit lg:h-[650px]"
      />
      <img
        src="./bg-cars.png"
        alt="bg-cars"
        className="z-0 absolute right-0 bottom-20 w-[90%] max-w-[1100px]"
      />
    </main>
  );
};

export default Main;
