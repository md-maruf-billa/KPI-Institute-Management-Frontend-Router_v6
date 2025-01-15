import {  Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { Controller } from "react-hook-form";

const CustomInput = ({ name, size, label }: { name: string, size?: SizeType, label: string }) => {
      return (
            <div className="custom-input-field">
                  <label htmlFor={name}>{label}</label>
                  <Controller
                        name={name}
                        render={({ field }) => <Input {...field} size={size || "middle"} placeholder={"Enter " + name} />
                        }
                  />
            </div>

      );
};

export default CustomInput;