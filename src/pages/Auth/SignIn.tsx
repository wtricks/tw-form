import { useEffect, useState } from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import AuthWrapper from "../../components/AuthWrapper";
import { NavLink } from "react-router-dom";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState<Record<string, string>>({});

    // Remove error when user makes changes in inputs.
    // we'll use 'useEffect', off course there many other ways
    useEffect(() => {
        setError({});
    }, [email, password]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!email) {
            setError({ email: "Email is required" });
        } else if (!password) {
            setError({ password: "Password is required" });
        } else {
            console.log("Submitting Form with values: ", {
                email,
                password
            });
        }
    };

    return (
        <AuthWrapper
            heading="Welcome back to Teachable"
            tagline="Enter your details to continue"
            onFormSubmit={handleSubmit}
            footer={{ text: "Don't have an account?", link: "signup", linkText: "Sign Up" }}
        >

            <Input
                type="email"
                label="Email address"
                placeholder=""
                className="mb-5"
                value={email}
                onChange={setEmail}
                error={error.email}
            />

            <Input
                type="password"
                label="Password"
                placeholder=""
                className="mb-1"
                value={password}
                onChange={setPassword}
                error={error.password}
            />

            <NavLink to="/auth/forgot-password" className="text-sm font-medium text-slate-800 hover:opacity-75 mb-4 underline ml-auto">
                Forgot password?
            </NavLink>

            <Button
                type="submit"
                variant="primary"
                className="mx-auto my-8 block px-8"
            >
                Sign In
            </Button>
        </AuthWrapper>
    );
};

export default SignIn;
