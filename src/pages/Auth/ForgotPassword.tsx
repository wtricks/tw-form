import { useEffect, useState } from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import AuthWrapper from "../../components/AuthWrapper";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const [error, setError] = useState("");

    // Remove error when user makes changes in inputs.
    // we'll use 'useEffect', off course there many other ways
    useEffect(() => {
        setError("");
    }, [email]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!email) {
            setError("Email is required");
        } else {
            console.log("Submitting Form with values: ", {
                email,
            });
        }
    };

    return (
        <AuthWrapper
            heading="Forgot your password?"
            tagline="Don't worry, we will send you an email with a link to reset your password"
            onFormSubmit={handleSubmit}
            footer={{ text: "Back to signIn", link: "signin", linkText: "Sign In" }}
        >

            <Input
                type="email"
                label="Email address"
                placeholder=""
                className="mb-5"
                value={email}
                onChange={setEmail}
                error={error}
            />

            <Button
                type="submit"
                variant="primary"
                className="mx-auto my-8 block px-8"
            >
                Send link
            </Button>
        </AuthWrapper>
    );
};

export default ForgotPassword;
