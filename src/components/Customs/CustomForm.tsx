import { Form } from "antd";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";


const CustomForm = ({ onSubmit, children }: { onSubmit: any, children: ReactNode }) => {
      const methods = useForm()
      return (
            <FormProvider {...methods}>
                  <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
                        {children}
                  </Form>
            </FormProvider>
      );
};

export default CustomForm;