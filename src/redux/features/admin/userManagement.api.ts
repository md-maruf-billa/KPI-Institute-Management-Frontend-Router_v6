import { baseAPI } from '../../api/baseAPI'

const academicManagementAPI = baseAPI.injectEndpoints({
  endpoints: builder => ({
    createStudent: builder.mutation({
      query: payload => ({
        url: '/users/create-student',
        method: 'POST',
        body: payload
      })
    })
  })
})

export const { useCreateStudentMutation } = academicManagementAPI
