import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  // Card,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Navba = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
  <>
    
  </>
  );

  return (
    <>
      <Navbar className=" inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-medium text-black"
            
          >
          <img
          src="data:image/png;base64,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" 
          alt="" className="h-10" />  
         <span className="">Shop</span>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <Link to='/signup'>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block bg-blue-900 text-white rounded-md font-semibold hover:shadow-2xl hover:bg-blue-400 py-3 px-5"
            >
            Signup
            </Button>
            </Link>

            <Link to='/login'>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block bg-blue-900 text-white rounded-md font-semibold hover:shadow-2xl hover:bg-blue-400 py-3 px-5"
            >
           Login
            </Button>
            </Link>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Link to='/signup'>
          <Button variant="gradient" size="sm" fullWidth className="mb-2 bg-blue-500">
            <span>Signup</span>
          </Button>
          </Link>
          
          <Link to='/login'>
          <Button variant="gradient" size="sm" fullWidth className="mb-2 bg-blue-500">
            <span>Login</span>
          </Button>
          </Link>
        </MobileNav>
      </Navbar>
    </>
  );
};
export default Navba;
