import { TAPIParams } from '../../../Types'
import { baseAPI } from '../../api/baseAPI'

const academicManagementAPI = baseAPI.injectEndpoints({
  endpoints: builder => ({
    createStudent: builder.mutation({
      query: payload => ({
        url: '/users/create-student',
        method: 'POST',
        body: payload
      })
    }),
    getAllStudents: builder.query({
      query: params => {
        const queries = new URLSearchParams()
        if (params) {
          params?.forEach((element: TAPIParams) =>
            queries.append(element.name, element.value)
          )
        }
        return {
          url: '/students',
          method: 'GET',
          params: queries
        }
      }
    })
  })
})

export const { useCreateStudentMutation, useGetAllStudentsQuery } =
  academicManagementAPI
