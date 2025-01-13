type Props = {
  total_score: number;
  total_questions: number;
  total_tests: number;
};

export const Summary = ({ total_score, total_questions, total_tests }: Props) => (
	<div className="mb-4 max-w-xl rounded-lg bg-white p-4">
		<h2 className="text-md font-semibold">Summary</h2>
		<ul className="flex list-none gap-4 py-3">
			<li className="flex flex-col gap-2">
				<p>Total Score:</p>
				<span className="my-1 w-20 rounded-md bg-[#c98d9e] p-1 text-center text-white shadow-md">
					{total_score}
				</span>
			</li>
			<li className="flex flex-col gap-2">
				<p>Total Questions:</p>

				<span className="my-1 w-20 rounded-md bg-[#c98d9e] p-1 text-center text-white shadow-md">
					{total_questions}
				</span>
			</li>
			<li className="flex flex-col gap-2">
				<p>Total Tests:</p>
				<span className="my-1 w-20 rounded-md bg-[#c98d9e] p-1 text-center text-white shadow-md">
					{total_tests}
				</span>
			</li>
		</ul>
	</div>
);
