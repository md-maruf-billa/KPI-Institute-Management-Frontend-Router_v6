import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomForm from "../../../components/Customs/CustomForm";
import CustomSelect from "../../../components/Customs/CustomSelect";
import { Button, Col, Flex } from "antd";
import { semesterNameConstants, semesterStartAndEndMonths, semesterStartYear } from "../../../constants/global.constant";


const CreateAcademicSemester = () => {
      const handelCreateAcademicSemester: SubmitHandler<FieldValues> = (data) => {
            const name = semesterNameConstants[Number(data.code - 1)].label
            const semesterData = {
                  name,
                  ...data

            }
            console.log(semesterData)
      }
      return (
            <Flex justify="center" align="center" style={{ minHeight: "100%" }}>
                  <Col span={6} style={{ border: "1px solid blue", padding: "20px", borderRadius: "8px" }}>
                        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Create Academic Semester</h1>

                        <CustomForm onSubmit={handelCreateAcademicSemester}>
                              <CustomSelect selectOptions={semesterNameConstants} placeholder="Choose a Name" name="code" label="Semester Name" />
                              <CustomSelect selectOptions={semesterStartYear} placeholder="Choose a Year" name="year" label="Semester Start Year" />
                              <CustomSelect selectOptions={semesterStartAndEndMonths} placeholder="Choose a Month" name="startMonth" label="Semester Start Month" />
                              <CustomSelect selectOptions={semesterStartAndEndMonths} placeholder="Choose a Month" name="endMonth" label="Semester End Month" />
                              <Button size="large" type="primary" style={{ width: "100%" }} htmlType="submit">Create Semester</Button>
                        </CustomForm>
                  </Col>

            </Flex>
      );
};

export default CreateAcademicSemester;