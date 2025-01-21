import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Divider, Flex, Form, Input } from "antd";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useCreateStudentMutation } from "../../../redux/features/admin/userManagement.api";
import { useGetAllAcademicDepartmentQuery, useGetAllAcademicSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { bloodGroupConstant, genderConstant } from "../../../constants/global.constant";
import CustomForm from "../../../components/Customs/CustomForm";
import { studentSchema } from "../../../Schemas/userManagement.schema";
import CustomInput from "../../../components/Customs/CustomInput";
import CustomSelect from "../../../components/Customs/CustomSelect";
import CustomDatePicker from "../../../components/Customs/CustomDatePicker";


const CreateStudent = () => {
    // local state
    const [imageFile, setImageFile] = useState<File | undefined>(undefined);
    // some api 
    const [createStudent] = useCreateStudentMutation();
    const { data: semesterData, isLoading } = useGetAllAcademicSemestersQuery(undefined);
    const { data: departmentData } = useGetAllAcademicDepartmentQuery(undefined);


    // select options
    const genderSelectOptions = genderConstant.map((gender: string) => ({ label: gender, value: gender.toLowerCase() }))
    const bloodGroupSelectOptions = bloodGroupConstant.map((bld: string) => ({ label: bld, value: bld }))
    const semesterSelectOptions = semesterData?.data?.map((sem: any) => ({ label: `${sem.name} - ${sem.year}`, value: sem._id }))
    const departmentSelectOptions = departmentData?.data?.map((dept: any) => ({ label: dept.name, value: dept._id }))




    const submitForm: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Student creating.......")
        const formData = new FormData();
        const formattedDate = data.dateOfBirth?.format("YYYY-MM-DD");

        const accualData = {
            student: {
                ...data,
                dateOfBirth: formattedDate
            }
        }


        formData.append("data", JSON.stringify(accualData));
        if (imageFile) {
            formData.append("file", imageFile);
        }
        const res = await createStudent(formData);
        console.log(res)
        if (res?.data?.success) {
            toast.success("Student created successfully", { id: toastId })
        } else {
            toast.error("Failed to create Student", { id: toastId })
        }

    }
    return (
        <>
            <CustomForm onSubmit={submitForm} resolver={zodResolver(studentSchema)}>
                <Flex align="center" justify="center" >

                    <Col span={16} style={{ border: "1px solid blue", padding: "40px", borderRadius: "16px" }}>
                        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Create a Student Account's</h1>
                        <Divider>Personal Info</Divider>
                        <Flex style={{ width: "100%" }} gap={30} justify="space-between">
                            <div style={{ width: "100%" }}>
                                <CustomInput size="large" name="name.firstName" label="Enter Your First Name" />
                                <CustomInput size="large" name="name.middleName" label="Enter Your Middle Name" />
                                <CustomInput size="large" name="name.lastName" label="Enter Your Last Name" />
                            </div>
                            <div style={{ width: "100%" }}>
                                <CustomSelect size="large" name="gender" label="Select Your Gender" selectOptions={genderSelectOptions} placeholder="Select a gender" />
                                <CustomSelect size="large" name="bloogGroup" label="Select Your Blood Group" selectOptions={bloodGroupSelectOptions} placeholder="Select a group" />

                                <Controller
                                    name=""
                                    render={({ field }) => <Form.Item label="Select your profile image">
                                        <Input size="large" {...field} onChange={(e) => setImageFile(e.target.files ? e.target.files[0] : undefined)} type="file" />
                                    </Form.Item>}
                                />

                            </div>
                        </Flex>

                        <Divider>Contact Info</Divider>
                        <Flex style={{ width: "100%" }} gap={30} justify="space-between">
                            <div style={{ width: "100%" }}>
                                <CustomInput size="large" name="email" label="Enter Your Email" />
                                <CustomInput size="large" name="contactNo" label="Enter Your contact number" />
                                <CustomInput size="large" name="emergencyContactNo" label="Enter another number" />
                            </div>
                            <div style={{ width: "100%" }}>
                                <CustomInput size="large" name="presentAddress" label="Enter your present address" />
                                <CustomInput size="large" name="permanentAddress" label="Enter your permanenet address" />
                                <CustomDatePicker size="large" name="dateOfBirth" label="Enter your Date of birth" />
                            </div>
                        </Flex>

                        <Divider>Guardian information</Divider>
                        <Flex style={{ width: "100%" }} gap={30} justify="space-between">
                            <div style={{ width: "100%" }}>
                                <CustomInput size="large" name="guardian.fatherName" label="Enter Your Father Name" />
                                <CustomInput size="large" name="guardian.fatherOccupation" label="Enter your father occupation" />
                                <CustomInput size="large" name="guardian.fatherContactNo" label="Enter your father phone number" />
                            </div>

                            <div style={{ width: "100%" }}>
                                <CustomInput size="large" name="guardian.motherName" label="Enter your mother name" />
                                <CustomInput size="large" name="guardian.motherOccupation" label="Enter your mother occupations" />
                                <CustomInput size="large" name="guardian.motherContactNo" label="Enter your mother contact number" />
                            </div>
                        </Flex>
                        <Divider>Local Guardian information</Divider>
                        <Flex style={{ width: "100%" }} gap={30} justify="space-between">
                            <div style={{ width: "100%" }}>
                                <CustomInput size="large" name="localGuardian.name" label="Enter another guardian name" />
                                <CustomInput size="large" name="localGuardian.occupation" label="Guardian occupation" />
                            </div>

                            <div style={{ width: "100%" }}>
                                <CustomInput size="large" name="localGuardian.contactNo" label="Guardian contact number" />
                                <CustomInput size="large" name="localGuardian.address" label="Guardian address" />
                            </div>
                        </Flex>
                        <Divider>Academic Information</Divider>
                        <Flex style={{ width: "100%" }} gap={30} justify="space-between">
                            <div style={{ width: "100%" }}>
                                <CustomSelect selectOptions={semesterSelectOptions} size="large" name="admissionSemester" label="Select admission semester" placeholder="Select Semester" disabled={isLoading} />

                            </div>

                            <div style={{ width: "100%" }}>
                                <CustomSelect selectOptions={departmentSelectOptions} size="large" name="academicDepartment" label="Select academic department" placeholder="Select Department" />

                            </div>
                        </Flex>
                        <Button size="large" type="primary" htmlType="submit">Create Now</Button>
                    </Col>
                </Flex>
            </CustomForm>
        </>
    );
};

export default CreateStudent;
