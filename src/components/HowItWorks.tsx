import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  MdCalendarMonth,
  MdBolt,
  MdSportsGolf,
  MdCleaningServices,
} from "react-icons/md";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MdCalendarMonth className="text-4xl" />,
    title: "Book your event",
    description:
      "Choose your date, time, and location, and let us know the details of your event.",
  },
  {
    icon: <MdBolt className="text-4xl" />,
    title: "Quick and easy setup",
    description:
      "Our team arrives with everything needed and sets up in less than an hour before your event starts.",
  },
  {
    icon: <MdSportsGolf className="text-4xl" />,
    title: "Play and enjoy",
    description:
      "Dive into the fun with immersive virtual golf games tailored for all skill levels.",
  },
  {
    icon: <MdCleaningServices className="text-4xl" />,
    title: "We handle the cleanup",
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
        Effortless setup, endless fun — here’s how Flash Golf brings the game to
        you.
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
