export type TResponse = {
  error?: {
    status: number
    data: {
      message: string
    }
  }
  data?: {
    success: boolean
    message: string
    data?: any
  }
}

export type TSemesterInfo = {
  _id: string
  name: string
  year: string
  code: string
  startMonth: string
  endMonth: string
}

export type TAPIParams = {
  name: string
  value: string
}
export type TAcademicFaculty = {
  _id: string
  name: string
}

export type TAcademicDepartment = {
  _id?: string
  name: string
  subjects: string[]
  facultyName?: string
  academicFaculty?: {
    _id?: string
    name: string
  }
}

export type TStudentInfo = {
  student: {
    name: {
      firstName: string
      middleName: string
      lastName: string
    }
    gender: string
    dateOfBirth: string
    email: string
    contactNo: string
    emergencyContactNo: string
    bloogGroup: string
    presentAddress: string
    permanentAddress: string
    guardian: {
      fatherName: string
      fatherOccupation: string
      fatherContactNo: string
      motherName: string
      motherOccupation: string
      motherContactNo: string
    }
    localGuardian: {
      name: string
      occupation: string
      contactNo: string
      address: string
    }
    admissionSemester: string
    academicDepartment: string
  }
}
