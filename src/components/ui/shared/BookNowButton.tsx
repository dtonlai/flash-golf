import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";

export const BookNowButton = () => {
  return (
    <a href="https://form.jotform.com/251258069358263">
      <Button className="w-full gap-2">
        <CalendarIcon />
        Book now
      </Button>
    </a>
  );
};
