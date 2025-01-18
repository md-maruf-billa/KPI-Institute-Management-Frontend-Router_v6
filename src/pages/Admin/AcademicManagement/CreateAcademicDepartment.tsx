import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomForm from "../../../components/Customs/CustomForm";
import CustomSelect from "../../../components/Customs/CustomSelect";
import { academicDepartmentsContant } from "../../../constants/global.constant";
import { Button, Col, Flex, Form, Select } from "antd";
import { useEffect, useState } from "react";
import { TAcademicDepartment, TAcademicFaculty } from "../../../Types";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicFacultySchema } from "../../../Schemas/academicManagement.schema";

const CreateAcademicDepartment = () => {
      const { data } = useGetAllAcademicFacultyQuery(undefined);

      const [departmentField, setDepartmentField] = useState("");
      const [departmentFieldOptions, setDepartmentFieldOptions] = useState<{ label: string; value: string }[]>([]);
      const departmentSelectOptions = academicDepartmentsContant.map(department => ({ label: department.name, value: department.name }))
      const academicFacultySelectOptions = data?.data?.map((faculty: TAcademicFaculty) => ({ label: faculty.name, value: faculty._id }))


      // find field under the department
      useEffect(() => {
            const departmentSelectedFields = academicDepartmentsContant.find(
                  (dp) => dp.name === departmentField
            ) as TAcademicDepartment | undefined;

            if (departmentSelectedFields) {
                  setDepartmentFieldOptions(
                        departmentSelectedFields.subjects.map((sb) => ({ label: sb, value: sb }))
                  );
            } else {
                  setDepartmentFieldOptions([]); // Fallback to an empty array
            }
      }, [departmentField]);


      const handleSubmit: SubmitHandler<FieldValues> = data => {
            const refactorData = {
                  name: `${departmentField} ( ${data.name} )`,
                  academicFaculty: data.academicFaculty
            }
            console.log(refactorData)
      }
      return (
            <Flex justify="center" align="center" style={{minHeight:"100%"}}>
                  <Col span={8} style={{border:"1px solid blue", padding:"40px" , borderRadius:"16px"}} >
                        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Create Academic Department</h1>

                        <CustomForm onSubmit={handleSubmit} resolver={zodResolver(academicFacultySchema)}>
                              <Form.Item label="Select Academic Department">
                                    <Select onChange={(selectedValue) => setDepartmentField(selectedValue)}
                                          size="large" style={{ width: "100%" }} defaultValue="Pick one" options={
                                                departmentSelectOptions
                                          } />
                              </Form.Item>

                              <CustomSelect name="name" label="Select Academic Field" size="large" selectOptions={departmentFieldOptions} disabled={departmentField.length > 0 ? false : true} />

                              <CustomSelect name="academicFaculty" label="Select Academic Faculty" size="large" selectOptions={academicFacultySelectOptions} disabled={departmentField.length > 0 ? false : true} />


                              <Button size="large" type="primary" htmlType="submit">Create Now</Button>
                        </CustomForm>
                  </Col>
            </Flex>
      );
};

export default CreateAcademicDepartment;