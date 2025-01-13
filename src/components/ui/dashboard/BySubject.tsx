type Props = {
    total_by_subj: Record<string, number>;
    title_subject: string;
    title_tests: string;
    test_data: Record<string, number>;
};

export const BySubject = ({ total_by_subj, title_subject, title_tests, test_data }: Props) => {
	return (
		<div className="mx-auto rounded-lg bg-white">
			<h2 className="text-md font-semibold">Top Subject</h2>
			<table className="max-w-xs rounded-lg border border-slate-300 text-left text-xs">
				<thead className="bg-slate-100 text-gray-700">
					<tr>
						<th className="border border-slate-300 px-1 py-2">{title_subject}</th>
						<th className="border border-slate-300 px-1 py-2">{title_tests}</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(total_by_subj).map(([subject, count]) => (
						<tr key={subject}>
							<td className="border border-slate-300">{subject}</td>
							<td className="border border-slate-300">{count}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
