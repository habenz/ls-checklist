import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

function Checkbox({ size = "large", checked, ariaLabel, onChange, disabled }) {
  const sizeClasses = {
    small: "text-l",
    large: "text-xl",
  };

  return (
    <label className={`cursor-pointer ${sizeClasses[size]}`}>
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        aria-label={ariaLabel}
        onChange={onChange}
        disabled={disabled}
      />
      {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
    </label>
  );
}

export default Checkbox;
