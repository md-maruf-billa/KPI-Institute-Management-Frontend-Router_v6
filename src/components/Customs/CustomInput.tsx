import { Form, Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { Controller } from "react-hook-form";


type TInputProps = { name: string, size?: SizeType, label: string, placeholder?: string, type?: string }
const CustomInput = ({ name, size, label, placeholder, type }: TInputProps) => {
      return (


            <Controller
                  name={name}
                  render={({ field, fieldState }) => <Form.Item label={label}> <Input  {...field} size={size || "middle"} type={type} placeholder={placeholder || "Please enter valid info...."} />
                        {fieldState.error && <small style={{ color: "red" }}>{fieldState.error.message}</small>}
                  </Form.Item>}
            />


      );
};

export default CustomInput;