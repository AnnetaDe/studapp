'use client';
import { useUserContext } from '@/app/UserProvider';

import { useQuery } from '@tanstack/react-query';
import { testService } from '../../../services/test.service';
import Link from 'next/link';
import React from 'react';

export const DashBoard: React.FC = () => {
  const { userId } = useUserContext();
  if (!userId) {
    return (
      <div className="m-4">
        <p>Please login to see your progress...</p>
        <Link href="/login">Login</Link>
      </div>
    );
  }
  console.log('user', userId);

  const { data, error, isLoading } = useQuery({
    queryKey: ['performance', userId],
    queryFn: () => testService.performance(userId),
    enabled: !!userId,
  });
  console.log('data', data?.data.performance);

  if (isLoading) return <div>Loading dashboard...</div>;
  if (error) return <div>Opps!... {error.message}</div>;

  return (
    <div className=" bg-white col-span-4  shadow-md mx-auto p-4 md:p-8 h-screen overflow-auto">
      <h1 className="text-xl font-bold mb-4">User Performance Dashboard</h1>
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Summary</h2>
        <ul className="list-none pl-5 flex gap-4">
          <li>
            Total Score:
            <span className="ml-4 outline px-2">
              {data ? data.data.performance.total_score : 'N/A'}
            </span>
          </li>
          <li>
            Total Questions:
            <span className="ml-4 outline px-2">
              {data ? data.data.performance.total_questions : 'N/A'}
            </span>
          </li>
          <li>
            Total Tests:
            <span className="ml-4 outline px-2">
              {data ? data.data.performance.total_tests : 'N/A'}
            </span>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">Top Subject</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Subject</th>
              <th className="border border-gray-300 px-4 py-2">Tests</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data ? data.data.performance.total_by_subj : 'N/A').map(
              ([subject, count]) => (
                <tr key={subject}>
                  <td className="border border-gray-300 px-4 py-2">{subject}</td>
                  <td className="border border-gray-300 px-4 py-2">{count as number}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <h2 className="text-lg font-semibold">Tests</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Subject</th>
              <th className="border border-gray-300 px-4 py-2">Correct Answers</th>
              <th className="border border-gray-300 px-4 py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.data.performance.tests.map(
                (
                  test: { test_subject: string; correct_answers: number; test_score: number },
                  index: number
                ) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">{test.test_subject}</td>
                    <td className="border border-gray-300 px-4 py-2">{test.correct_answers}</td>
                    <td className="border border-gray-300 px-4 py-2">{test.test_score}</td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
