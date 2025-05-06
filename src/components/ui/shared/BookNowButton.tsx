import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";

export const BookNowButton = () => {
  return (
    <Button className="w-full gap-2">
      <CalendarIcon />
      Book now
    </Button>
  );
};
