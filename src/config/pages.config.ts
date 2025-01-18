class studentPage {
	DASHBOARD = '/dashboard';
	PROFILE = '/me';
	TEST(path: string) {
		return `/dashboard/${path}`;
	}
}

class PublicPage {
	HOME = '/';
	EXPLORE = '/explore';
	LOGIN = '/login';
	REGISTER = '/register';
	GENERATE = '/generate';
}
export const STUDENT_PAGE_CONFIG = new studentPage();
export const PUBLIC_PAGE_CONFIG = new PublicPage();