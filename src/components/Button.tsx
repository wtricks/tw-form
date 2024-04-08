interface ButtonProps {
    variant: "primary" | "secondry",
    type: "submit" | "button",
    children: JSX.Element | JSX.Element[] | string,
    className?: string
    title?: string,
    onClick?: () => void
}

const Button = ({ variant, type, children, onClick, className, title }: ButtonProps) => {
    const baseStyles = {
        primary: 'bg-slate-800 text-white ',
        secondry: 'text-slate-700 border border-slate-700 hover:opacity-75 ',
        default: 'p-2.5 py-2 transition rounded-md text-sm font-bold hover:opacity-80 active:scale-95 '
    }
    return (
        <button 
            type={type} 
            title={title} 
            onClick={onClick}
            className={baseStyles.default + baseStyles[variant] + className}>
            { children }
        </button>
    )
}

export default Button