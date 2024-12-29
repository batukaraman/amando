import * as React from "react";

interface ICheckboxProps {
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  id: string;
  label: string;
}

const Checkbox: React.FC<ICheckboxProps> = (props) => {
  return (
    <div className="relative w-full flex gap-2">
      <input
        className="
        peer appearance-none shrink-0 w-4 h-4 border-2 border-slate-400 rounded-sm mt-1 bg-white focus:outline-none focus:ring-offset-0  checked:bg-primary6 checked:border-0 disabled:border-steel-400 disabled:bg-steel-400
      "
        type="checkbox"
        id={props.id}
        checked={props.checked}
        disabled={props.disabled}
        onChange={(e) => props.onChange && props.onChange(e.target.checked)}
      />
      <svg
        className="absolute w-3 h-3 pointer-events-none hidden peer-checked:block stroke-white ml-0.5 mt-[6px] outline-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <label htmlFor={props.id} className="select-none">
        {props.label}
      </label>
    </div>
  );
};

export default Checkbox;
