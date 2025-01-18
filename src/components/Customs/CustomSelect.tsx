import { Form, Select } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { Controller } from "react-hook-form";

type TSelectProps = {
      label: string,
      name: string,
      placeholder?: string,
      disabled?: boolean,
      size?: SizeType,
      selectOptions: {
            value: string,
            label: string,
      }[]

}


const CustomSelect = ({ label, name, selectOptions, placeholder, size, disabled }: TSelectProps) => {
      return (
            <Controller
                  name={name}
                  render={({ field, fieldState }) => <Form.Item label={label}>
                        <Select size={size || "middle"} {...field} defaultValue={placeholder || "Pick one"} style={{ width: "100%" }} options={
                              selectOptions
                        } disabled={disabled} />
                        {fieldState.error && <small style={{ color: "red" }}>{fieldState.error.message}</small>}
                  </Form.Item>}
            />

      );
};

export default CustomSelect;