import { NavLink } from "react-router-dom"

interface AuthProps {
    children: JSX.Element | JSX.Element[],
    heading: string,
    tagline: string | JSX.Element | JSX.Element[],
    onFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    footer?: {
        text: string,
        link: string,
        linkText: string
    },
    headerShown?: boolean,
    progressBar?: number
}

const AuthWrapper = ({ heading, tagline, onFormSubmit, footer, children, headerShown, progressBar }: AuthProps) => {
    /**
     * TODO: Get current URL params and add them to the form action attribute.
     * URL: http://localhost:3000/auth/signup
     * 
     * Need: "/signup" from the URL
     */
    const pathname = window.location.pathname;
    const urlParams = pathname.split("/").filter(p => p);
    const action = `/${urlParams[urlParams.length - 1]}`;

    return (
        <>
            {headerShown && <header className="bg-slate-50 w-full p-4 border-b border-b-slate-600">
                <h1 className="text-2xl font-medium text-center">
                    teach:able
                </h1>
            </header>}

            {progressBar && <div className="w-full h-1.5 bg-teal-400 transition-all" style={{ width: progressBar + '%' }}></div>}

            <main className="mx-auto w-4/5">
                <h2 className="text-center mt-8 text-2xl font-sans text-slate-800">
                    {heading}
                </h2>
                <p className="text-center text-slate-800 my-5 text-sm font-medium">
                    {tagline}
                </p>
            
                <form action={action} method="post" onSubmit={onFormSubmit} className="mt-10 w-full mx-auto px-4" style={{ maxWidth: !progressBar ? 380 : 600 }}>
                    {children}
                </form>

                {footer && <p className="text-center my-8 text-sm text-slate-800">
                    {footer.text + " "}  
                    <NavLink to={"/auth/" + footer.link} title={footer.linkText} className="underline font-medium hover:opacity-75">
                        {footer.linkText}
                    </NavLink>
                </p>}
            </main>
        </>
    )
}

export default AuthWrapper