"use client";

import { useState } from "react";

type FieldErrorsMap = Record<
  "full-name" | "email" | "zip-code" | "password" | "confirm-password",
  string | undefined
>;

const Page = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassordInput, setConfirmPassWordInput] = useState("");
  const [errors, setErrors] = useState<FieldErrorsMap>({
    "full-name": undefined,
    email: undefined,
    "zip-code": undefined,
    password: undefined,
    "confirm-password": undefined,
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    let newErrors: FieldErrorsMap = {
      "full-name": undefined,
      email: undefined,
      "zip-code": undefined,
      password: undefined,
      "confirm-password": undefined,
    };

    if (!fullName.trim()) {
      newErrors["full-name"] = "Full name is required.";
    }

    if (!email.includes("@")) {
      newErrors["email"] = "Please enter a valid email address.";
    }

    if (isNaN(Number(zipCode))) {
      newErrors["zip-code"] = "Please enter a valid zip code.";
    }

    if (password.length < 8) {
      newErrors["password"] = "Password should have at least 8 characters.";
    }

    if (password !== confirmPassordInput) {
      newErrors["confirm-password"] = "Passwords do not match.";
    }

    setErrors(newErrors);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Full Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                onChange={(e) => setFullName(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />

              {errors["full-name"] && <p>{errors["full-name"]}</p>}
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />

              {errors["email"] && <p>{errors["email"]}</p>}
            </div>
          </div>

          <div>
            <label
              htmlFor="zip"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Zip Code
            </label>
            <div className="mt-2">
              <input
                id="zip"
                name="zip"
                type="number"
                required
                onChange={(e) => setZipCode(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />

              {errors["zip-code"] && <p>{errors["zip-code"]}</p>}
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>

            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />

              {errors["password"] && <p>{errors["password"]}</p>}
            </div>
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm Password
            </label>

            <div className="mt-2">
              <input
                id="confirm-password"
                name="confirm-password"
                type="confirm-password"
                required
                autoComplete="current-password"
                onChange={(e) => setConfirmPassWordInput(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />

              {errors["confirm-password"] && (
                <p>{errors["confirm-password"]}</p>
              )}
            </div>
          </div>

          <div>
            <button
              onClick={handleSubmit}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
