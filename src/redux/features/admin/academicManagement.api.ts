import { baseAPI } from '../../api/baseAPI'

const academicManagementAPI = baseAPI.injectEndpoints({
  endpoints: builder => ({
    getAllAcademicSemesters: builder.query({
      query: () => ({
        url: '/academic-semesters',
        method: 'GET'
      })
    })
  })
})

export const {useGetAllAcademicSemestersQuery} = academicManagementAPI;