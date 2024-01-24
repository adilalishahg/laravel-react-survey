import { useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios";
import { useStateContext } from "../contexts/ContextProvider";

export default function Signup() {
    const { setCurrentUser, setUserToken } = useStateContext();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState({ __html: "" });
    const onSubmit = (ev) => {
        ev.preventDefault();
        setError({ __html: "" });
        axiosClient
            .post("/signup", {
                name: fullName,
                email,
                password,
                password_confirmation: passwordConfirmation,
            })
            .then(({ data }) => {
                console.log(data);
                setCurrentUser(data.user);
                setUserToken(data.token);
            })
            .catch((error) => {
                if (error.response) {
                    const finalErrors = Object.values(
                        error.response.data.errors
                    ).reduce((accum, next) => [...accum, ...next], []);
                    console.log(finalErrors);
                    setError({ __html: finalErrors.join("<br/> ") });
                }
            });
    };
    return (
        <>
            {" "}
            <h2 className="mt-4 text-3xl font-bold leading-9 tracking-tight text-center text-gray-900">
                Sign Up to your account
            </h2>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {" "}
                {error.__html && (
                    <div
                        className="px-3 py-2 text-white bg-red-500 rounded"
                        dangerouslySetInnerHTML={error}
                    ></div>
                )}
                <form
                    className="space-y-1"
                    action="#"
                    method="POST"
                    onSubmit={onSubmit}
                >
                    <div>
                        {/* <label
                            htmlFor="full-name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Full Name
                        </label> */}

                        <div className="mt-2">
                            <input
                                id="full-name"
                                name="full-name"
                                type="text"
                                autoComplete="full-name"
                                onChange={(ev) => setFullName(ev.target.value)}
                                placeholder="Full Name"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        {/* <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Email address
                        </label> */}
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                autoComplete="email"
                                onChange={(ev) => setEmail(ev.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            {/* <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label> */}
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={(ev) => setPassword(ev.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <div className="mt-2">
                            <input
                                id="password-confirmation"
                                name="password_confirmation"
                                type="password"
                                placeholder="Password Confirmation"
                                onChange={(ev) =>
                                    setPasswordConfirmation(ev.target.value)
                                }
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-sm text-center text-gray-500">
                    Not a member?{" "}
                    <Link
                        to="/login"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                        Already Have Account? Click Here
                    </Link>
                </p>
            </div>
        </>
    );
}
