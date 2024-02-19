interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

export function ButtonPrimary({ children, onClick,...props }: Props) {
    return (
        <button
        type="button"
            className="bg-indigo-500 px-4 py-2 rounded-md text-white"
            onClick={onClick}
            {...props}>
            {children}
        </button>
    )
}


export function ButtonLogin({ children, ...props }: Props) {
    return (
        <button
            className=" p-2 bg-blue-700 rounded-md text-white hover:bg-blue-800 duration-150 transition-all my-5 w-full"
            {...props}>
            {children}
        </button>
    )
}

export function ButtonNav({ children, ...props }: Props) {
    return (
        <button
            className="text-center p-4 hover:bg-indigo-500 ease-linear duration-100 rounded-md text-white"
            {...props}
        >
            {children}
        </button>
    );
}