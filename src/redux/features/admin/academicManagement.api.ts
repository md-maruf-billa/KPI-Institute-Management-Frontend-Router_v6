import { TAcademicParams } from '../../../Types'
import { baseAPI } from '../../api/baseAPI'

const academicManagementAPI = baseAPI.injectEndpoints({
  endpoints: builder => ({
    getAllAcademicSemesters: builder.query({
      query: params => {
        const queries = new URLSearchParams()
        params.forEach((element: TAcademicParams) =>
          queries.append(element.name, element.value)
        )

        return {
          url: '/academic-semesters',
          method: 'GET',
          params: queries
        }
      }
    }),
    createAcademicSemester: builder.mutation({
      query: payload => ({
        url: '/academic-semesters/create-academic-semester',
        method: 'POST',
        body: payload
      })
    }),
    createAcademicFaculty: builder.mutation({
      query: payload => ({
        url: '/academic-faculties/create-academic-faculty',
        method: 'POST',
        body: payload
      })
    })
  })
})

export const {
  useGetAllAcademicSemestersQuery,
  useCreateAcademicSemesterMutation,
  useCreateAcademicFacultyMutation
} = academicManagementAPI
