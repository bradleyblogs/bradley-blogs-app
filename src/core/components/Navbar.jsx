import { useState, useEffect } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as={Link}
        to="/"
        variant="small"
        color="blue-gray"
        className="flex items-center p-1 font-medium transition-colors hover:text-blue-500"
      >
        Home
      </Typography>
      <Typography
        as={Link}
        to="/blog"
        variant="small"
        color="blue-gray"
        className="flex items-center p-1 font-medium transition-colors hover:text-blue-500"
      >
        Blog
      </Typography>
      <Typography
        as={Link}
        to="/about"
        variant="small"
        color="blue-gray"
        className="flex items-center p-1 font-medium transition-colors hover:text-blue-500"
      >
        About
      </Typography>
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
    <MTNavbar className="mx-auto w-full px-6 py-3">
      <div className="text-blue-gray-900 flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Bradley Blogs
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? "X" : "Menu"}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;