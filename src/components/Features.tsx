import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import image from "../assets/growth.png";
// import image3 from "../assets/reflecting.png";
// import image4 from "../assets/looking-ahead.png";
// import excitingGameplay from "../assets/excitingGameplay.webp";
// import compactAndFlexible from "../assets/compactAndFlexible.webp";
import quick from "../assets/quick.jpg";
import exciting from "../assets/exciting.png";
import compact from "../assets/compact.jpg";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Quick and easy setup",
    description:
      "Our team sets up the golf simulator in less than an hour, so you can start enjoying the fun without delay.",
    image: quick,
  },
  {
    title: "Exciting gameplay",
    description:
      "Choose from a variety of game modes, including course play, driving range, mini-games — perfect for all skill levels.",
    image: exciting,
  },
  {
    title: "Compact and flexible",
    description:
      "Designed to fit almost anywhere, all you need is a power outlet, and we’ll handle the rest!",
    image: compact,
  },
];

const featureList: string[] = [
  // "Dark/Light theme",
  // "Reviews",
  // "Features",
  // "Pricing",
  // "Contact form",
  // "Our team",
  // "Responsive design",
  // "Newsletter",
  // "Minimalist",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card className="flex flex-col justify-between" key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
