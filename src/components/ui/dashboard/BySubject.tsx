type Props = {
    total_by_subj: Record<string, number>;
    title_subject: string;
    title_tests: string;
    test_data: Record<string, number>;
};

export const BySubject = ({ total_by_subj, title_subject, title_tests, test_data }: Props) => {
	return (
		<div className="max-w-xs">
			<h2 className="text-md font-semibold">Top Subject</h2>
			<table className="border border-slate-300">
				<thead>
					<tr>
						<th className="border border-slate-300 px-4 py-2">{title_subject}</th>
						<th className="border border-slate-300 px-4 py-2">{title_tests}</th>
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
