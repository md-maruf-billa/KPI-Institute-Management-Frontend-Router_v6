import { TAcademicParams } from '../../../Types'
import { baseAPI } from '../../api/baseAPI'

const academicManagementAPI = baseAPI.injectEndpoints({
  endpoints: builder => ({
    getAllAcademicSemesters: builder.query({
      query: params => {
        const queries = new URLSearchParams()
        if (params) {
          params?.forEach((element: TAcademicParams) =>
            queries.append(element.name, element.value)
          )
        }
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
    getAllAcademicFaculty: builder.query({
      query: () => ({
        url: '/academic-faculties',
        method: 'GET'
      })
    }),
    createAcademicFaculty: builder.mutation({
      query: payload => ({
        url: '/academic-faculties/create-academic-faculty',
        method: 'POST',
        body: payload
      })
    }),
    createAcademicDepartment: builder.mutation({
      query: payload => ({
        url: '/academic-departments/create-academic-department',
        method: 'POST',
        body: payload
      })
    }),
    getAllAcademicDepartment: builder.query({
      query: () => ({
        url: '/academic-departments',
        method: 'GET'
      })
    })
  })
})

export const {
  useGetAllAcademicSemestersQuery,
  useCreateAcademicSemesterMutation,
  useCreateAcademicFacultyMutation,
  useGetAllAcademicFacultyQuery,
  useCreateAcademicDepartmentMutation,
  useGetAllAcademicDepartmentQuery
} = academicManagementAPI
