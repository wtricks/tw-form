import { useEffect, useState } from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import AuthWrapper from "../../components/AuthWrapper";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState<Record<string, string>>({});
    const [agree, setAgree] = useState(false);

    // Remove error when user makes changes in inputs.
    // we'll use 'useEffect', off course there many other ways
    useEffect(() => {
        setError({});
    }, [email, name, password, confirmPassword, agree]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!name) {
            setError({ name: "Name is required" });
        } else if (!email) {
            setError({ email: "Email is required" });
        } else if (!password) {
            setError({ password: "Password is required" });
        } else if (!confirmPassword) {
            setError({ confirmPassword: "Confirm Password is required" });
        } else if (password !== confirmPassword) {
            setError({ confirmPassword: "Passwords do not match" });
        } else if (!agree) {
            setError({ agree: "You must agree to the terms and conditions" });
        } else {
            console.log("Submitting Form with values: ", {
                name,
                email,
                password,
                confirmPassword,
                agree
            });

            // redirect to more info page.
            navigate('/auth/more-info');
        }
    };

    const checkboxLabel = (
        <p>
            I agree to the{" "}
            <a href="#" className="underline font-medium hover:opacity-75">
                Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="underline font-medium hover:opacity-75">
                Privacy Policy
            </a>
            .
        </p>
    );

    return (
        <AuthWrapper
            heading="Get started with Teachable"
            tagline={<span>Join more than 100,000 creators who've sold over <b>$1 billion</b> in courses and coaching.</span>}
            onFormSubmit={handleSubmit}
            footer={{ text: "Already have an account?", link: "signin", linkText: "Sign in" }}
        >
            <Input
                type="text"
                label="Full name"
                placeholder=""
                className="mb-5"
                value={name}
                onChange={setName}
                error={error.name}
            />

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
                className="mb-5"
                value={password}
                onChange={setPassword}
                error={error.password}
            />

            <Input
                type="password"
                label="Confirm password"
                placeholder=""
                className="mb-5"
                value={confirmPassword}
                onChange={setConfirmPassword}
                error={error.confirmPassword}
            />

            <Input
                type="checkbox"
                label={checkboxLabel}
                placeholder=""
                className="my-5"
                value={agree as unknown as string}
                onChange={setAgree as unknown as (v: string) => void}
                error={error.agree}
            />

            <Button
                type="submit"
                variant="primary"
                className="mx-auto my-8 block px-8"
            >
                Create Account
            </Button>
        </AuthWrapper>
    );
};

export default SignUp;
