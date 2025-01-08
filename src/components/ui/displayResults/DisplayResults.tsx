type Props = {
  results: {
    correct: number;
    incorrect: number;
    score: number;
  };
};

export const DisplayResults = ({ results }: Props) => {
  return (
    <div className="results grid grid-cols-1 gap-4 bg-slate-600 p-4 text-white max-w-sm mx-auto rounded-md">
      <h3 className="text-center">Results</h3>
      <p>Correct Answers: {results.correct}</p>
      <p>Incorrect Answers: {results.incorrect}</p>
      <p>Score: {results.score}</p>
    </div>
  );
};
