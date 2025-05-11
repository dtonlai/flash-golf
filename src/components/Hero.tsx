import productHero from "../assets/productHero.png";
import { BookNowButton } from "./ui/shared/BookNowButton";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Flash Golf.
            </span>
          </h1>
          <br />
          <h2 className="inline text-3xl">Virtual Golf in a Flash.</h2>
        </main>
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Flash Golf brings the thrill of virtual golf to events in Edmonton
          with quick setup and unforgettable fun—anytime, anywhere.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4 xs:w-full md:w-1/3">
          <BookNowButton />
        </div>
      </div>
      {/* Hero cards sections */}
      <div className="z-10">
        <img src={productHero} alt="Product Hero" className="w-full" />
      </div>
      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
