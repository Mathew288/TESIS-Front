
interface Props extends React.InputHTMLAttributes<HTMLInputElement> { }

export function Input(props: Props) {
    return (
        <input
            className="w-full py-2 text-base border-b-2 border-slate-300 outline-none placeholder-slate-400"
            {...props}
        />
    )
}
