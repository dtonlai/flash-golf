import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import services from "../assets/services.png";
import { RiBox2Fill, RiGolfBallFill, RiTruckFill } from "react-icons/ri";

interface ServiceProps {
  title: string;
  description: string | JSX.Element;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  // {
  //   title: "Pricing",
  //   description: (
  //     <>
  //       <p>$200 per hour, minimum 4 hours.</p>
  //       <ul>
  //         Includes:
  //         <li>Golf simulator</li>
  //         <li>Golf balls</li>
  //         <li>Clubs</li>
  //         <li>Setup and takedown</li>
  //         <li>On-site support</li>
  //         <li>Service anywhere in Edmonton</li>
  //       </ul>
  //     </>
  //   ),
  //   icon: <ChartIcon />,
  // },
  {
    title: "Simulator",
    description: (
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside pt-4">
        <li>Launch monitor</li>
        <li>Software</li>
        <li>Studio enclosure</li>
        <li>Side protection nets</li>
        <li>Projector</li>
        <li>5' x 5' hitting mat</li>
        <li>Putting turf</li>
        <li>Ball tray</li>
      </ul>
    ),
    icon: <RiBox2Fill />,
  },
  {
    title: "Equipment",
    description: (
      <>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside pt-4">
          <li>Golf clubs</li>
          <li>Golf balls</li>
          <li>Tees</li>
        </ul>
        <br />
        Feel free to bring your own gear!
      </>
    ),
    icon: <RiGolfBallFill />,
  },
  {
    title: "Service",
    description: (
      <>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside pt-4">
          <li>Delivery</li>
          <li>Setup and takedown</li>
          <li>On-site support</li>
        </ul>
      </>
    ),
    icon: <RiTruckFill />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-centric{" "}
            </span>
            services
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            $200 per hour, minimum 4 hours. Anywhere in Edmonton.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="text-4xl">{icon}</div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={services}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
