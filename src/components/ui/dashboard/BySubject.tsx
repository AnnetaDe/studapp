type Props = {
    total_by_subj: Record<string, number>;
    title_subject: string;
    title_tests: string;
    test_data: Record<string, number>;
};

export const BySubject = ({ total_by_subj, title_subject, title_tests, test_data }: Props) => {
    // const testBySubjet = test_data.reduce((acc: Record<string, number>, test: Record<string, number>) => {
    //   if acc(test.test_subject){
    //     acc[test.test_subject] += 1

    //   }
    // })
    return (
        <div>
            <h2 className="text-lg font-semibold">Top Subject</h2>
            <table className="table-auto border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">{title_subject}</th>
                        <th className="border border-gray-300 px-4 py-2">{title_tests}</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(total_by_subj).map(([subject, count]) => (
                        <tr key={subject}>
                            <td className="border border-gray-300 px-4 py-2">{subject}</td>
                            <td className="border border-gray-300 px-4 py-2">{count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
