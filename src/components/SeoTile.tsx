import { FaArrowDown } from "react-icons/fa6";
import Button from "./ui/Button";
import Title from "./ui/Title";
import { useState } from "react";

const SeoTile = () => {
  const [isRolled, setIsRolled] = useState(true);

  return (
    <div>
      <Title size="xs">
        Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla
        commodo.
      </Title>
      <p
        className={`relative my-6 font-roboto-condensed duration-500 ${
          isRolled ? "max-h-24 overflow-hidden" : "max-h-80 overflow-auto"
        }`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi culpa
        aliquam quos, provident id distinctio, nobis exercitationem saepe porro
        quae laboriosam aspernatur accusamus eaque. Quo facilis quod saepe
        tempore veritatis. Nulla inventore quaerat assumenda eligendi officiis
        quibusdam repudiandae labore pariatur adipisci nesciunt. Quas
        consectetur dolor velit similique dolore harum tenetur, reiciendis minus
        quibusdam nam iste voluptates labore quis perspiciatis molestias. Quis
        repellat quia magni? Ipsam eos consectetur iste voluptatem beatae enim
        ut, odit, rerum natus ex veniam? A quisquam necessitatibus ab sint
        quaerat et, provident consequuntur, obcaecati doloremque corrupti
        architecto. Eveniet, minus officiis, quisquam quia dolore odit at magni
        quibusdam voluptates quo ratione atque! Excepturi veritatis officia
        optio neque explicabo minima sapiente, provident quidem? Omnis inventore
        commodi consequatur a. Nobis? Optio, quisquam. Facere libero
        voluptatibus modi debitis quam earum esse neque illo, ex incidunt fugiat
        ullam ducimus officiis? Dignissimos culpa voluptatem harum sit quibusdam
        dolor laudantium magni error rerum assumenda.
        {isRolled && (
          <span className="absolute bottom-0 right-0 bg-dark pr-10">
            {"[...]"}
          </span>
        )}
      </p>
      <Button
        variant="custom"
        className="flex items-center gap-2 border-b-2 border-secondary
         font-roboto-condensed pb-1 hover:-translate-y-1 duration-300"
        onClick={() => setIsRolled(!isRolled)}
      >
        <span>{isRolled ? "Rozwiń" : "Zwiń"}</span>
        <FaArrowDown
          className={`text-lg duration-300 ${
            isRolled ? "rotate-0" : "rotate-180"
          }`}
        />
      </Button>
    </div>
  );
};

export default SeoTile;
