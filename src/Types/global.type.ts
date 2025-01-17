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

export type TAcademicParams = {
    name: string,
    value: string;
}
