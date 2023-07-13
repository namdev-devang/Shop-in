import { Button } from "@material-tailwind/react";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          className="my-8 lg:h-[80vh] lg:w-[100%] rounded-md"
          alt="Shop"
        />
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <span className="sm:text-4xl text-3xl mb-1 font-medium text-gray-900 flex justify-center">
            Before they sold out <br />
          </span>
          <span className="sm:text-4xl text-3xl mb-4 font-medium text-gray-900 flex justify-center">
            readymade gluten
           <br />
          </span>
          <p>
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
        </div>
      </div>
      <section>
        <h1 className="text-3xl text-center font-extralight my-14 shadow-xl shadow-slate-300">
          Our Products
        </h1>
        <div className="flex flex-wrap m-4">
          {/* 1st Card */}

          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden">
              <img
                className="object-cover object-center w-full h-full block"
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt=""
              />
            </div>

            <div className="mt-4">
              <h1 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h1>
              <h1 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h1>
              <p className="mt-1">$16.00</p>
            </div>
            <Link to="/singleProduct">
              {/* <Button className=" mt-4 text-black bg-indigo-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-5">
                Click Me
              </Button> */}
            </Link>
          </div>

          {/* 2nd Card */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden">
              <img
                className="object-cover object-center w-full h-full block"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
            <div className="mt-4">
              <h1 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h1>
              <h1 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h1>
              <p className="mt-1">$16.00</p>
            </div>
          </div>

          {/* 3rd card */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden">
              <img
                className="object-cover object-center w-full h-full block"
                src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                alt=""
              />
            </div>
            <div className="mt-4">
              <h1 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h1>
              <h1 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h1>
              <p className="mt-1">$16.00</p>
            </div>
          </div>

          {/* 4th crad  */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden">
              <img
                className="object-cover object-center w-full h-full block"
                src="https://images.unsplash.com/photo-1510878933023-e2e2e3942fb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                alt=""
              />
            </div>
            <div className="mt-4">
              <h1 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h1>
              <h1 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h1>
              <p className="mt-1">$16.00</p>
            </div>
          </div>
          
        </div>
      </section>

      <div>
        <Link to="/product">
          <Button className="flex mx-auto mt-4 text-black bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-5">
            View All
          </Button>
        </Link>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-5 text-center underline">
            Costumer Reviews
          </h1>
        </div>
      </section>

      {/* 1st Reviews */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mb-10 ">
        <Card
          color="transparent"
          shadow={false}
          className="w-full max-w-[26rem] shadow-lg ml-2 mr-5"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar
              size="lg"
              variant="circular"
              src="https://media.istockphoto.com/id/861322484/photo/businessman-touchscreen-gold-stars.webp?b=1&s=170667a&w=0&k=20&c=AP-KgO3VX_5-EgCjfjdHB9c_dk9USvOA5XqMke4Vonw="
              alt="candice wu"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                  Candice Wu
                </Typography>
                <div className="5 flex items-center gap-0">
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                </div>
              </div>
              <Typography color="blue-gray">Frontend Lead @ Google</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
              &quot;I found solution to all my design needs from Creative Tim. I
              use them as a freelancer in my hobby projects for fun! And its
              really affordable, very humble guys !!!&quot;
            </Typography>
          </CardBody>
        </Card>

        {/* 2nd Reviews */}

        <Card
          color="transparent"
          shadow={false}
          className="w-full max-w-[26rem] shadow-lg ml-2 mr-5"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar
              size="lg"
              variant="circular"
              src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMHJldmlld3MlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="candice wu"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                  Candice Wu
                </Typography>
                <div className="5 flex items-center gap-0">
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                </div>
              </div>
              <Typography color="blue-gray">Frontend Lead @ Google</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
              &quot;I found solution to all my design needs from Creative Tim. I
              use them as a freelancer in my hobby projects for fun! And its
              really affordable, very humble guys !!!&quot;
            </Typography>
          </CardBody>
        </Card>

        {/* 3rc Reviews */}
        <Card
          color="transparent"
          shadow={false}
          className="w-full max-w-[26rem] shadow-lg ml-2 mr-5"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar
              size="lg"
              variant="circular"
              src="https://images.unsplash.com/photo-1541752171745-4176eee47556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbiUyMHJldmlld3MlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="candice wu"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                  Candice Wu
                </Typography>
                <div className="5 flex items-center gap-0">
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                  <StarIcon className="h-5 w-5 text-yellow-700" />
                </div>
              </div>
              <Typography color="blue-gray">Frontend Lead @ Google</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
              &quot;I found solution to all my design needs from Creative Tim. I
              use them as a freelancer in my hobby projects for fun! And its
              really affordable, very humble guys !!!&quot;
            </Typography>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
export default Home;
