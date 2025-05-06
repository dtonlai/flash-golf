import { BookNowButton } from "./ui/shared/BookNowButton";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Ready to
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              get started?{" "}
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Ready to bring the excitement of virtual golf to your next event?
            Book with Flash Golf today and let us handle the rest—quick setup,
            endless fun, unforgettable memories!
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <BookNowButton />
        </div>
      </div>
    </section>
  );
};
