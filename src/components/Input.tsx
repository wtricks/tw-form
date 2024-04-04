import { ChangeEventHandler, useId } from "react"

interface InputProps {
    type: "input" | "select" | "checkbox" | "password" | "email" | "textarea" | "text",
    onChange: (v: string) => void,
    value: string,
    label?: string,
    placeholder?: string,
    options?: ({ value: string, label: string })[],
    className?: string,
    error?: string
}

const Input = ({ type, label, value, onChange, options, placeholder, className, error }: InputProps) => {
    const isCheckBox = type == "checkbox";
    const id = useId()

    const inputStyles = {
        default: 'border p-2.5 text-sm font-medium text-slate-800 rounded-md'
            + ' focus:outline-1 hover:bg-slate-50'
            + (isCheckBox ? ' size-4' : '')
            + (error ? ' border-red-600': ' border-slate-300'),
        container: isCheckBox ? 'flex-row-reverse items-center justify-end ' : 'flex-col border',
        label: isCheckBox ? 'ml-2' : 'ml-1 mb-1',
        errorMessage: 'text-xs text-red-600 ml-1 mt-1'
    }

    const onInputChange: ChangeEventHandler<HTMLElement> = (event) => {
        onChange((event.target as HTMLInputElement).value)
    }

    return (
        <div className={"flex-1 flex " + inputStyles.container  + className}>
            {label && <label htmlFor={id} className={'text-sm font-medium select-none ' + inputStyles.label}>{ label }</label>}
            {
                type == 'select' && options
                    ? (
                        <select className={inputStyles.default} id={id} value={value} onChange={onInputChange}> 
                            <option>{ placeholder}</option>
                            { options.map((listItem) => (
                                <option 
                                    key={listItem.value} 
                                    value={listItem.label}>
                                        { listItem.label}
                                </option>
                            )) }
                        </select>
                    )
                    : type == 'textarea'
                        ? (
                            <textarea 
                                id={id} 
                                className={inputStyles.default}
                                placeholder={placeholder} 
                                value={value} 
                                rows={4}
                                onChange={onInputChange}>
                            </textarea>
                        )
                        : (
                            <input 
                                id={id} 
                                className={inputStyles.default}
                                placeholder={placeholder} 
                                value={value} 
                                onChange={onInputChange} 
                                type={type}
                            />
                        )
            }

            {error && <span className={inputStyles.errorMessage}>{ error }</span>}
        </div>
    )
}

export default Input