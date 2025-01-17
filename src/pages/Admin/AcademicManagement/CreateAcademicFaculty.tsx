import { Button, Col, Flex } from "antd";
import CustomForm from "../../../components/Customs/CustomForm";
import CustomInput from "../../../components/Customs/CustomInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useCreateAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";


const CreateAcademicFaculty = () => {
      const [createAcademicFaculty] = useCreateAcademicFacultyMutation()
      const handelCreateAcademicFaculty: SubmitHandler<FieldValues> = async (data) => {
            const toastId = toast.loading("Creating Academic Faculty...")
            const res = await createAcademicFaculty(data);
            if (res?.data?.success) {
                  toast.success("AcademicFaculty created successfully", { id: toastId })
            } else {
                  toast.error("Failed to create AcademicFaculty", { id: toastId })
            }
      }
      return (
            <Flex align="center" justify="center" style={{ minHeight: "100%" }}>
                  <Col span={7} style={{ border: "1px solid blue", padding: "40px", borderRadius: "16px", backgroundColor: "white" }}>
                        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Create Faculty</h1>
                        <CustomForm onSubmit={handelCreateAcademicFaculty}>
                              <CustomInput size="large" label="Enter Faculty Name" name="name" />
                              <Flex justify="end"><Button size="large" color="geekblue" type="primary" htmlType="submit">Create Now</Button></Flex>
                        </CustomForm>
                  </Col>
            </Flex>
      );
};

export default CreateAcademicFaculty;