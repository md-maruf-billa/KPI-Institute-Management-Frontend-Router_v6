import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomForm from "../../../components/Customs/CustomForm";
import CustomSelect from "../../../components/Customs/CustomSelect";
import { Button, Col, Flex } from "antd";
import { semesterNameConstants, semesterStartAndEndMonths, semesterStartYear } from "../../../constants/global.constant";
import { zodResolver } from "@hookform/resolvers/zod"
import { academicSemesterSchema } from "../../../Schemas/academicManagement.schema";
import { useCreateAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../Types";


const CreateAcademicSemester = () => {
      const [createAcademicSemester] = useCreateAcademicSemesterMutation()

      const handelCreateAcademicSemester: SubmitHandler<FieldValues> = async (data) => {
            const toastId = toast.loading("Academic Semester creating.....")
            const name = semesterNameConstants[Number(data.code - 1)]?.label
            const semesterData = {  name, ...data }
            const res = await createAcademicSemester(semesterData) as TResponse ;
            if (res?.error) {
                  toast.error(res?.error?.data?.message, { id: toastId })
            }
            else {
                  toast.success("Semester created successfully !!", { id: toastId })
            }

      }

      return (
            <Flex justify="center" align="center" style={{ minHeight: "100%" }}>
                  <Col span={6} style={{ border: "1px solid blue", padding: "20px", borderRadius: "8px" }}>
                        <h1  style={{ textAlign: "center", marginBottom: "20px" }}>Create Academic Semester</h1>

                        <CustomForm onSubmit={handelCreateAcademicSemester} resolver={zodResolver(academicSemesterSchema)}>
                              <CustomSelect size="large" selectOptions={semesterNameConstants} placeholder="Choose a Name" name="code" label="Semester Name" />
                              <CustomSelect size="large" selectOptions={semesterStartYear} placeholder="Choose a Year" name="year" label="Semester Start Year" />
                              <CustomSelect size="large" selectOptions={semesterStartAndEndMonths} placeholder="Choose a Month" name="startMonth" label="Semester Start Month" />
                              <CustomSelect size="large" selectOptions={semesterStartAndEndMonths} placeholder="Choose a Month" name="endMonth" label="Semester End Month" />
                              <Button size="large" type="primary" style={{ width: "100%" }} htmlType="submit">Create Semester</Button>
                        </CustomForm>
                  </Col>

            </Flex>
      );
};

export default CreateAcademicSemester;