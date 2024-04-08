import { useEffect, useState } from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import AuthWrapper from "../../components/AuthWrapper";

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState<Record<string, string>>({});

    // Remove error when user makes changes in inputs.
    // we'll use 'useEffect', off course there many other ways
    useEffect(() => {
        setError({});
    }, [password, confirmPassword]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!password) {
            setError({ password: "Password is required" });
        } else if (!confirmPassword) {
            setError({ confirmPassword: "Confirm Password is required" });
        } else if (password !== confirmPassword) {
            setError({ confirmPassword: "Passwords do not match" });
        } else {
            console.log("Submitting Form with values: ", {
                password,
                confirmPassword
            });
        }
    };

    return (
        <AuthWrapper
            heading="Reset your password"
            tagline="Choose a difficult and unguessable password."
            onFormSubmit={handleSubmit}
            footer={{ text: "Back to", link: "signin", linkText: "Sign in" }}
        >
            <Input
                type="password"
                label="New password"
                placeholder=""
                className="mb-5"
                value={password}
                onChange={setPassword}
                error={error.password}
            />

            <Input
                type="password"
                label="Confirm new password"
                placeholder=""
                className="mb-5"
                value={confirmPassword}
                onChange={setConfirmPassword}
                error={error.confirmPassword}
            />
            <Button
                type="submit"
                variant="primary"
                className="mx-auto my-8 block px-8"
            >
                Reset password
            </Button>
        </AuthWrapper>
    );
};

export default ResetPassword;
