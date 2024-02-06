import React from "react";

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string; // Agrega la propiedad htmlFor a la interfaz Props
}

function Label({ children, ...props }: Props) {
  return (
    <label className="text-gray-900 text-sm text text-left" {...props}>
      {children}
    </label>
  );
}

export default Label;
