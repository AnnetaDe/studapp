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

export const STUDENT_PAGE_config = new studentPage();
