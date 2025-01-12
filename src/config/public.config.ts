class studentPage {
	DASHBOARD = '/dashboard';
	TEST(path: string) {
		return `/dashboard/${path}`;
	}
}
class AuthPage {
	LOGIN = '/login';
	REGISTER = '/register';
}
class PublicPage {
	HOME = '/';
	EXPLORE = '/explore';
	AWARDS = '/awards';
	GENERATE = '/generate';
}
export const STUDENT_PAGE_config = new studentPage();
export const AUTH_PAGE_CONFIG = new AuthPage();
export const PUBLIC_PAGE_CONFIG = new PublicPage();