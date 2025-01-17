import { baseAPI } from '../../api/baseAPI'

const academicManagementAPI = baseAPI.injectEndpoints({
  endpoints: builder => ({
    getAllAcademicSemesters: builder.query({
      query: () => ({
        url: '/academic-semesters',
        method: 'GET'
      })
    }),
    createAcademicSemester: builder.mutation({
      query: payload => ({
        url: '/academic-semesters/create-academic-semester',
        method: 'POST',
        body: payload
      })
    })
  })
})

export const {
  useGetAllAcademicSemestersQuery,
  useCreateAcademicSemesterMutation
} = academicManagementAPI
