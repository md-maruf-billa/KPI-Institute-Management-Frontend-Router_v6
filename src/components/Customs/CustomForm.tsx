import { Form } from "antd";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

type TFromProps = {
      onSubmit: any,
      children: ReactNode,
      resolver?: any
}


const CustomForm = ({ onSubmit, children, resolver }: TFromProps) => {
      const methods = useForm({ resolver })
      return (
            <FormProvider {...methods} >
                  <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
                        {children}
                  </Form>
            </FormProvider>
      );
};

export default CustomForm;