'use client';
import React from 'react';

interface Props {
  item: {
    question: string;
    choices: { [key: string]: string };
  };
  handleChange: (value: number) => void;
  question_index: number;
  selectedValue: number;
}

export default function QuestionItemNoAnswer({
  item,
  handleChange,
  question_index,
  selectedValue,
}: Props) {
  return (
		<li className="w-sm bg-white p-6">
			<div className="divide-y divide-gray-200">
				<div className="flex-wrap">
					<p>{item.question}</p>
				</div>
				{Object.entries(item.choices).map(([key, value]) => (
					<label
						key={key}
						htmlFor={`choice-${question_index}-${key}`}
						className="mb-3 flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-3 transition hover:bg-gray-50 has-[:checked]:bg-indigo-300"
					>
						<div className="flex items-center">
							&#8203;
							<input
								className="size-4 rounded border-gray-300"
								type="radio"
								value={key}
								onChange={() => handleChange(Number(key))}
								id={`choice-${question_index}-${key}`}
								checked={selectedValue === Number(key)}
							/>
						</div>
						<span className="flex-wrap">
							<p className="text-pretty text-gray-700">{value}</p>
						</span>
					</label>
				))}
			</div>
		</li>
	);
}
