type Props = {
  total_score: number;
  total_questions: number;
  total_tests: number;
};

export const Summary = ({ total_score, total_questions, total_tests }: Props) => (
	<div className="mb-6">
		<h2 className="text-md font-semibold">Summary</h2>
		<ul className="flex list-none gap-4 pl-5">
			<li>
				Total Score:{' '}
				<span className="ml-4 inline-block w-10 rounded-sm outline">{total_score}</span>
			</li>
			<li>
				Total Questions:{' '}
				<span className="ml-4 inline-block w-10 rounded-sm outline">{total_questions}</span>
			</li>
			<li>
				Total Tests:{' '}
				<span className="ml-4 inline-block w-10 rounded-sm outline">{total_tests}</span>
			</li>
		</ul>
	</div>
);
