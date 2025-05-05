import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Book your event",
    description:
      "Choose your date, time, and location, and let us know the details of your event.",
  },
  {
    icon: <MapIcon />,
    title: "Quick & easy setup",
    description:
      "Our team arrives with everything needed and sets up the golf simulator in minutes.",
  },
  {
    icon: <PlaneIcon />,
    title: "Play & enjoy",
    description:
      "Dive into the fun with immersive virtual golf games tailored for all skill levels.",
  },
  {
    icon: <GiftIcon />,
    title: "We Handle the Cleanup",
    description:
      "Once the event is over, we take care of packing up, leaving you stress-free.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        How it{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          works{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Effortless Setup, Endless Fun—Here’s How Flash Golf Brings the Game to
        You.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
