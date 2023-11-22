import { useState, useEffect } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {
  Close,
  Instagram,
  Menu,
  Twitter,
  Youtube,
} from "src/assets/icons/FontAwesome";

const links = [
  { path: "/", value: "Home" },
  { path: "/blog", value: "Blog" },
  { path: "/about", value: "About" },
];

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {links.map(({ path, value }) => (
        <li key={`${value}-li`}>
          <Typography
            as={Link}
            to={path}
            variant="small"
            color="blue-gray"
            className="flex items-center px-12 py-6 font-medium transition-colors hover:text-red-900"
          >
            {value}
          </Typography>
        </li>
      ))}
    </ul>
  );
}

export function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <MTNavbar className="rounded-m max-w-none px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link to="/">
          <img
            src="src/assets/NameLogoLightTransparent.png"
            alt="bradley-blogs-logo"
            className="w-48"
          />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="flex w-24 items-center justify-between">
          <Youtube size="lg" />
          <Instagram size="lg" />
          <Twitter size="lg" />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <Close /> : <Menu size="lg" />}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
