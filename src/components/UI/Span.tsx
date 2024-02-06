import React from "react"

interface Props extends React.HTMLAttributes<HTMLSpanElement> { }

function Span({ children, ...props }: Props) {
    return (
        <span
            {...props}
            className="text-gray-200 text-sm text text-center"
        >
            {children}
        </span>
    )
}

export default Span