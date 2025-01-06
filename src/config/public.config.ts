class studentPage {
  HOME = '/';
  EXPLORE = '/explore';
  DASHBOARD = '/dashboard';
  AWARDS = '/awards';
  GENERATE = '/generate';
}
class AuthPage {
  LOGIN = '/login';
  REGISTER = '/register';
  FORGOT = '/forgot';
  RESET = '/reset';
}
class TeacherPage {
  readonly DESK = '/teacher/desk';
}
export const STUDENT_PAGE_config = new studentPage();
export const AUTH_PAGE_CONFIG = new AuthPage();
export const TEACHER_PAGE_CONFIG = new TeacherPage();
