import { CircularProgress, Card, CardBody, CardFooter, Chip } from '@nextui-org/react';

type Props = {
    results: {
        correct: number;
        incorrect: number;
        score: number;
    };
    resetTest: () => void;
};

export const DisplayResults = ({ results, resetTest }: Props) => {
    return (
        <div className="results grid max-w-sm grid-cols-1 place-items-center gap-4 bg-slate-200 p-4 text-slate-700 max-sm:mx-auto">
            <h3 className="text-center text-xl">Results</h3>

            <Card className="h-[300px] w-[300px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500">
                <CardBody className="items-center justify-center pb-0">
                    <CircularProgress
                        classNames={{
                            svg: 'w-36 h-36 drop-shadow-md',
                            indicator: 'stroke-white',
                            track: 'stroke-white/10',
                            value: 'text-3xl font-semibold text-white',
                        }}
                        showValueLabel={true}
                        strokeWidth={4}
                        value={results.score}
                    />
                </CardBody>
                <CardFooter className="items-center justify-center pt-0">
                    <div className="flex max-w-md flex-col gap-2">
                        <Chip
                            classNames={{
                                base: 'border-1 border-white/30',
                                content: 'text-white/90 text-small font-semibold',
                            }}
                            variant="bordered"
                        >
                            Correct Answers: {results.correct}
                        </Chip>
                        <Chip
                            classNames={{
                                base: 'border-1 border-white/30',
                                content: 'text-white/90 text-small font-semibold',
                            }}
                            variant="bordered"
                        >
                            Incorrect Answers: {results.incorrect}
                        </Chip>
                    </div>
                </CardFooter>
            </Card>
            <button
                onClick={() => {
                    resetTest();
                }}
                className="my-4 w-[300px] rounded-md border border-slate-300 p-4 text-center text-sm text-slate-600 shadow-sm transition-all hover:border-slate-800 hover:bg-slate-800 hover:text-white hover:shadow-lg focus:border-slate-800 focus:bg-slate-800 focus:text-white active:border-slate-800 active:bg-slate-800 active:text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
                Restart
            </button>
        </div>
    );
};
