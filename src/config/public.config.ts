class studentPage {
  HOME = '/';
  EXPLORE = '/explore';
  SEARCH = '/search';
  DASHBOARD = '/dashboard';
  AWARDS = '/awards';
  SCHEDULE = '/schedule';
  GENERATE = '/generate';
  SETTINGS = '/settings';
  TEST(path: string) {
    return `/t/${path}`;
  }
}
class AuthPage {
  LOGIN = '/login';
  REGISTER = '/register';
  FORGOT = '/forgot';
  RESET = '/reset';
}
class TeacherPage {
  readonly DASHBOARD = '/teacher/dashboard';
  readonly PROFILE = '/teacher/profile';
  readonly SETTINGS = '/teacher/settings';
}
export const STUDENT_PAGE_config = new studentPage();
export const AUTH_PAGE_CONFIG = new AuthPage();
export const TEACHER_PAGE_CONFIG = new TeacherPage();
