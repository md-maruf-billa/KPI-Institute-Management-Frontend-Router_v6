import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFromProps = {
      onSubmit: any,
      children: ReactNode,
      resolver?: any
}


const CustomForm = ({ onSubmit, children, resolver }: TFromProps) => {
      const methods = useForm({ resolver })
      const submitForm:SubmitHandler<FieldValues> =(data)=>{
            onSubmit(data);
            // methods.reset()
      }
      return (
            <FormProvider {...methods} >
                  <Form layout="vertical" onFinish={methods.handleSubmit(submitForm)}>
                        {children}
                  </Form>
            </FormProvider>
      );
};

export default CustomForm;