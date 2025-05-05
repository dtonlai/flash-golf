export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          {/* <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          /> */}
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Flash Golf
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                At Flash Golf, we make it easy to bring the excitement of
                virtual golf to any occasion in Edmonton. Whether it’s a
                birthday, wedding, or corporate event, our team handles the
                quick and hassle-free setup, so you can focus on having fun.
                With our cutting-edge golf simulators, we deliver a convenient,
                immersive experience that fits any space and creates
                unforgettable memories.
              </p>
            </div>
            {/* TO-DO - Gather statistics for the future */}
            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
