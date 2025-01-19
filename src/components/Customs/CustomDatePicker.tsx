import { DatePicker, Form } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { Controller } from 'react-hook-form';

type TDatepickerProps = {
      name: string,
      size?: SizeType,
      label: string,
      disabled?: boolean
}

const CustomDatePicker = ({ name, size, label, disabled }: TDatepickerProps) => {
      return (
            <Controller
                  name={name}
                  render={({ field, fieldState }) => <Form.Item label={label}>
                        <DatePicker size={size || "middle"} {...field} style={{ width: "100%" }} disabled={disabled} />
                        {fieldState.error && <small style={{ color: "red" }}>{fieldState.error.message}</small>}
                  </Form.Item>}
            />
      );
};

export default CustomDatePicker;