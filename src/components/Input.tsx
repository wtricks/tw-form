import { ChangeEventHandler, useId } from "react"

interface InputProps {
    type: "input" | "select" | "checkbox" | "password" | "email" | "textarea" | "text",
    onChange: (v: string) => void,
    value: string,
    label?: string | JSX.Element | JSX.Element[],
    placeholder?: string,
    options?: ({ value: string, label: string })[],
    className?: string,
    error?: string
}

const Input = ({ type, label, value, onChange, options, placeholder, className, error }: InputProps) => {
    const isCheckBox = type == "checkbox";
    const id = useId()

    const inputStyles = {
        default: 'border p-2.5 text-sm font-medium text-slate-800 rounded-md placeholder:font-normal'
            + ' focus:outline-1 hover:bg-slate-50'
            + (error ? ' border-red-600': ' border-slate-300'),
        container: isCheckBox ? 'flex-row-reverse items-center justify-end ' : 'flex-col ',
        label: isCheckBox ? 'ml-2 font-normal' : 'ml-1 text-slate-700',
        errorMessage: 'text-xs text-red-600 ml-1 mt-1 font-medium'
    }

    const onInputChange: ChangeEventHandler<HTMLElement> = (event) => {
        onChange((event.target as HTMLInputElement).value)
    }

    return (
        <div className={"flex-1 flex " + inputStyles.container  + className}>
            {label && <label htmlFor={id} className={'text-sm font-medium select-none mb-1 ' + inputStyles.label}>{ label }</label>}
            {
                type == 'select' && options
                    ? (
                        <select className={inputStyles.default + ' !font-normal'} id={id} value={value} onChange={onInputChange}> 
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
                        : type == 'checkbox'
                            ? (
                                <div className={"h-4 w-4 min-w-4 px-[1px] border rounded-sm flex justify-center items-center relative " + (error ? 'border-red-400' : 'border-slate-600') + (value ? ' bg-emerald-400 !border-0' : '')}>
                                    <input 
                                        type="checkbox" 
                                        checked={value as unknown as boolean} 
                                        onChange={() => onChange(!value as unknown as string)} 
                                        className="absolute appearance-none h-full w-full"
                                        id={id}
                                    />
                                    {value && <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>}
                                </div>
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

            {error && type != 'checkbox' && <span className={inputStyles.errorMessage}>{ error }</span>}
        </div>
    )
}

export default Input