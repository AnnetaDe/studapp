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
			className="block max-w-sm cursor-pointer rounded-lg bg-slate-300 p-2 transition duration-200 hover:bg-slate-700 hover:text-slate-100"
		>
			<div className="group relative">
				<p className="text-xs">Correct Answers: {test.correct_answers}</p>
				<p className="text-xs">
					Incorrect Answers: {test.num_test_questions - test.correct_answers}
				</p>
				<p className="text-xs">Number of Test Questions: {test.num_test_questions}</p>

				<p className="text-sm">
					<strong>Score:</strong> {test.test_score}
				</p>
				<span className="absolute -top-10 hidden rounded-md bg-[#c98d9e] px-2 py-1 text-xs text-slate-800 group-hover:block">
					click to view
				</span>
			</div>
		</Link>
	);
}
