import { z } from 'zod'

export const studentSchema = z.object({
  name: z.object({
    firstName: z.string({ required_error: 'First name is required' }),
    middleName: z.string({ required_error: 'Middle name is required' }),
    lastName: z.string({ required_error: 'Last name is required' })
  }),
  gender: z.enum(['male', 'female', 'other'], {
    required_error: 'Gender is required'
  }),
  dateOfBirth: z.any({required_error: 'Date of Birth is required'}),
  email: z.string({required_error: 'Email is required'}),
  contactNo: z
    .string({ required_error: 'Contact number is required' })
    .min(11)
    .max(11),
  emergencyContactNo: z
    .string({ required_error: 'Contact number is required' })
    .min(11)
    .max(11),
  bloogGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
    required_error: 'Blood Group is required'
  }),
  presentAddress: z.string({ required_error: 'Presend address is required' }),
  permanentAddress: z.string({
    required_error: 'Permanent address is required'
  }),
  guardian: z.object({
    fatherName: z.string({ required_error: "Father's name is required" }),
    fatherOccupation: z.string({
      required_error: "Father's occupation is required"
    }),
    fatherContactNo: z
      .string({ required_error: 'Contact number is required' })
      .min(11)
      .max(11),
    motherName: z.string({ required_error: "Mother's name is required" }),
    motherOccupation: z.string({
      required_error: "Mother's occupation is required"
    }),
    motherContactNo: z
      .string({ required_error: 'Contact number is required' })
      .min(11)
      .max(11)
  }),
  localGuardian: z.object({
    name: z.string({ required_error: "Local guardian's name is required" }),
    occupation: z.string({
      required_error: "Local guardian's occupation is required"
    }),
    contactNo: z
      .string({ required_error: 'Contact number is required' })
      .min(11)
      .max(11),
    address: z.string({
      required_error: "Local guardian's address is required"
    })
  }),
  admissionSemester: z.string({
    required_error: 'Addmission semester is required'
  }),
  academicDepartment: z.string({
    required_error: 'Academic department ID is required'
  })
})
