import {
	faCheckSquare,
	faCheckToSlot,
	faCircleCheck,
	faCircleExclamation,
	faCircleXmark,
	faCross,
	faListCheck,
	faSchoolCircleCheck,
	faSpellCheck,
	faThumbsDown,
	faThumbsUp,
	faWon,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
	test: any;
	idx: number;
}

export const OneDynamicQuestion = ({ test, idx }: Props) => {
	return (
		<div className="relative w-full">
			<div className="pr-6">
				<div className="p-2">
					<h3 className="text-sm font-semibold">
						{idx + 1}: {test.question}
					</h3>
				</div>
				<div>
					You answered: <strong className="p-2">{test.choices?.[test.submitted_answer]}</strong>
				</div>

				{test.is_correct ? (
					<div className="position-absolute right-0 top-0 text-green-500">
						<FontAwesomeIcon
							icon={faCircleCheck}
							fontSize={30}
							className="absolute right-0 top-0"
							style={{
								strokeWidth: '2px',
								stroke: '#cb4bf2',
							}}
						/>
					</div>
				) : (
					<div>
						<FontAwesomeIcon
							icon={faCircleExclamation}
							fontSize={30}
							className="absolute right-0 top-0"
							style={{
								strokeWidth: '1px',
								stroke: '#1e293b',
								color: 'slategray',
							}}
						/>
						Correct Answer: <strong className="p-2">{test.choices?.[test.correct_answer]}</strong>
					</div>
				)}
			</div>
		</div>
	);
};
