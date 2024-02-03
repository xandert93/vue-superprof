import { PATHS } from './paths'
import {
  NotFoundPage,
  RequestsPage,
  TutorContactPage,
  TutorDetailPage,
  TutorRegistrationPage,
  TutorsPage,
} from '../pages'

const routes = [
  {
    path: '/',
    redirect: PATHS.TUTORS,
  },
  {
    path: PATHS.TUTORS,
    component: TutorsPage,
  },
  {
    path: PATHS.TUTOR_DETAIL,
    component: TutorDetailPage,
    props: true,
    children: [
      {
        path: PATHS.TUTOR_CONTACT,
        component: TutorContactPage,
      },
    ],
  },
  {
    path: PATHS.TUTOR_REGISTRATION,
    component: TutorRegistrationPage,
  },
  {
    path: PATHS.REQUESTS,
    component: RequestsPage,
  },
  {
    path: PATHS.NOT_FOUND,
    component: NotFoundPage,
  },
]

export default routes
