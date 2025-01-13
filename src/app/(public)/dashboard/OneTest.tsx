import { STUDENT_PAGE_config } from '@/config/public.config';
import Link from 'next/link';

interface ITest {
	test_id: string;
	test_subject: string;
	correct_answers: number;
	num_test_questions: number;
	test_score: number;
}

export function OneTest({ test }: { test: ITest }) {
	return (
		<Link
			href={STUDENT_PAGE_config.TEST(test.test_id)}
			className="cursor-pointer hover:text-slate-900"
		>
			<div className="bg mb-2 max-w-sm cursor-pointer bg-slate-300 p-2 ">
				<p>Correct Answers: {test.correct_answers}</p>
				<p>Incorrect Answers: {test.num_test_questions - test.correct_answers}</p>
				<p>Number of Test Questions: {test.num_test_questions}</p>
				<p>Score:{test.test_score}</p>
			</div>
		</Link>
	);
}
