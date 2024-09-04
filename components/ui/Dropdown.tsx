import { lengthUnits, temperature, weight } from "@/config/options";

const Dropdown = ({
  onChange,
  tab,
}: {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  tab: string;
}) => {
  return (
    <select
      className="border border-gray-300 p-2 rounded-md mx-1"
      name=""
      id=""
      onChange={onChange}
    >
      <option value="">Select</option>
      <DropdownOptions tab={tab} />
    </select>
  );
};

const DropdownOptions = ({ tab }: { tab: string }) => {
  let options;
  if (tab === "length") {
    options = lengthUnits;
  } else if (tab === "weight") options = weight;
  else options = temperature;
  return options.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ));
};

export default Dropdown;


