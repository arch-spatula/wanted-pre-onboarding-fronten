interface CustomCheckBoxType {
  id: string;
  checked: boolean;
  onChange: () => void;
}

function CustomCheckBox({ id, checked, onChange }: CustomCheckBoxType) {
  return (
    <input
      className="h-5 w-5 rounded border-gray-300 bg-gray-100 text-green-600 focus:ring-2 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-green-600"
      id={id}
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
}

export default CustomCheckBox;
