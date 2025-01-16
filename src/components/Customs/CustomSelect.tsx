import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TSelectProps = {
      label: string,
      name: string,
      placeholder?:string,
      selectOptions: {
            value: string,
            label: string,
      }[]

}


const CustomSelect = ({ label, name, selectOptions , placeholder}: TSelectProps) => {
      return (
            <Controller
                  name={name}
                  render={({ field }) => <Form.Item label={label}>
                        <Select {...field} defaultValue={placeholder || "Pick one"} style={{ width: "100%" }} options={
                              selectOptions
                        } />
                  </Form.Item>}
            />

      );
};

export default CustomSelect;