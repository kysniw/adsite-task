import SeoTile from "./SeoTile";

const Seo = () => {
  return (
    <section className="bg-dark text-secondary px-6 lg:px-28 py-20 flex flex-col md:flex-row gap-12">
      <SeoTile />
      <SeoTile />
    </section>
  );
};

export default Seo;
