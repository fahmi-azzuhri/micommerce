import { Card, Input, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export function Login() {
  return (
    <Card color="transparent" shadow={false} className="items-center">
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Welcome back, please enter your details.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button className="mt-6 bg-blue-500 hover:bg-gray-600" fullWidth>
          sign in
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Dont have an account? {""}
          <Link className="text-gray-800 hover:text-blue-500" to="/register">
            Sign up
          </Link>
        </Typography>
      </form>
    </Card>
  );
}
