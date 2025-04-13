import { Typography } from "@mui/joy";
import NavBarLink from "~/components/typography/navBarLink";

const NavigationBar = () => {
  return (
    <div className="flex flex-row justify-between items-center p-4 bg-gray-800 text-white">
      <Typography
        level="h4"
        fontWeight="bold"
        fontFamily={"Inter"}
        textColor="white">
        Luke Chisnall
      </Typography>
      <nav className="flex space-x-8">
        <NavBarLink path="/" text="Home" />
        <NavBarLink path="/about" text="About" />
        <NavBarLink path="/contact" text="Contact" />
        <NavBarLink path="/services" text="Services" />
      </nav>
    </div>
  );
};

export default NavigationBar;
