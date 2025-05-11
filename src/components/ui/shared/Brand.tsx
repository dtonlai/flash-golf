import { useTheme } from "@/components/theme-provider";
import logoBlack from "../../../assets/logoBlack.png";
import logoWhite from "../../../assets/logoWhite.png";

const Brand = () => {
  const { theme } = useTheme();
  return (
    <img
      src={
        theme === "dark" ||
        (theme === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
          ? logoWhite
          : logoBlack
      }
      alt="Flash Golf Logo"
      className="h-12"
    />
  );
};

export default Brand;
