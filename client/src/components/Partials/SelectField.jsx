//External Import
import { Field } from "formik";

const SelectField = ({ name, label, require, options }) => {
  return (
    <>
      <label
        htmlFor="PreferredAreas"
        className="inline-block my-3 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white "
      >
        {label}
      </label>

      {require && <span className="text-red-600 ml-1">*</span>}

      <Field id="PreferredAreas" name="PreferredAreas" className="form-control">
        {options.map((option, i) => (
          <option value={option.value} key={i}>
            {option.label}
          </option>
        ))}
      </Field>
    </>
  );
};
export default SelectField;
