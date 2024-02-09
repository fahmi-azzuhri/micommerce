import { Card, Input, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://micommerce-api.vercel.app/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Unauthorized: Please check your credentials.");
        } else {
          throw new Error("Failed to login");
        }
      }

      // Assuming the response contains the token or any indication of successful login
      setResponseMessage(data.message);

      // Log the response to the console
      console.log("Login response:", data);
    } catch (error) {
      console.error("Error logging in:", error.message);
      // Handle error state, show error message to the user, etc.
    }
  };

  return (
    <Card color="transparent" shadow={false} className="items-center mt-10">
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Welcome back, please enter your details.
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            id="email"
            name="email"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            onChange={(e) => setEmail(e.target.value)}
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
            id="password"
            name="password"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            onChange={(e) => setPassword(e.target.value)}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button
          className="mt-6 bg-blue-500 hover:bg-gray-600"
          fullWidth
          type="submit"
        >
          Sign in
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
