import { Form, Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { Controller } from "react-hook-form";

const CustomInput = ({ name, size, label }: { name: string, size?: SizeType, label: string }) => {
      return (
            <Form.Item label={label}>

                  <Controller
                        name={name}
                        render={({ field }) => <Input  {...field} size={size || "middle"} placeholder={"Enter " + name} />
                        }
                  />
            </Form.Item>

      );
};

export default CustomInput;