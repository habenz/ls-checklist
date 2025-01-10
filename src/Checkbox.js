import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

function Checkbox({ checked, ariaLabel, onChange }) {
  return (
    <label className="cursor-pointer text-xl">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        aria-label={ariaLabel}
        onChange={onChange}
      />
      {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
    </label>
  );
}

export default Checkbox;
