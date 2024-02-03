import { api } from './api-config'

export const getAll = () => {
  return api.get(`/tutors`)
}

export const getById = (id) => {
  return api.get(`/tutors/${id}`)
}
