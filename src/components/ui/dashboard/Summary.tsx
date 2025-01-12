type Props = {
  total_score: number;
  total_questions: number;
  total_tests: number;
};

export const Summary = ({ total_score, total_questions, total_tests }: Props) => (
  <div className="mb-6">
    <h2 className="text-md font-semibold">Summary</h2>
    <ul className="list-none pl-5 flex gap-4">
      <li>
        Total Score: <span className="ml-4 outline px-2">{total_score}</span>
      </li>
      <li>
        Total Questions: <span className="ml-4 outline px-2">{total_questions}</span>
      </li>
      <li>
        Total Tests: <span className="ml-4 outline px-2">{total_tests}</span>
      </li>
    </ul>
  </div>
);
