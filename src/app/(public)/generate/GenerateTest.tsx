// 'use client';
// import { testService } from '@/services/test.service';
// // import FormGenerate from '@/ui/formGenerate/FormGenerate';
// // import TestGenerated from '@/ui/testGenerated/TestGenerated';
// import { useMutation } from '@tanstack/react-query';
// import { useRef, useState } from 'react';
// import type {
//   ITestRequest,
//   ITestResponse,
//   ITestSubmit,
// } from '../../../components/ui/testGenerated/test.types';
// import { DisplayResults } from '@/ui/displayResults/DisplayResults';
// import dynamic from 'next/dynamic';
// import { useUserContext } from '@/app/UserProvider';
// const TestGenerated = dynamic(() => import('@/ui/testGenerated/TestGenerated'), { ssr: false });
// const FormGenerate = dynamic(() => import('@/ui/formGenerate/FormGenerate'), { ssr: false });

// export const GenerateTest: React.FC = () => {
//   const [generatedData, setGeneratedData] = useState<ITestResponse | null>(null);
//   const [user_id, setUserId] = useState<string>('');

//   const mutationGenerate = useMutation({
//     mutationKey: ['generate'],
//     mutationFn: (data: ITestRequest) => testService.generateTest(data),
//     onMutate: async data => {
//       console.log('loading');
//     },
//     onSuccess: data => {
//       console.log('succes', data.data);
//       setGeneratedData(data.data);
//     },
//   });
//   const mutationSubmit = useMutation({
//     mutationKey: ['submit'],
//     mutationFn: (data: ITestSubmit) => testService.submit_answers(data),
//     onMutate: async data => {
//       console.log('loading');
//     },
//     onSuccess: data => {
//       const results = {
//         correct: data.data.status.correct,
//         incorrect: data.data.status.incorrect,
//         score: data.data.status.score,
//       };
//       console.log('results', results);
//     },
//   });

//   const handleGenerate = (data: ITestRequest) => {
//     mutationGenerate.mutate(data);
//   };
//   const handleSubmit = (data: ITestSubmit) => {
//     mutationSubmit.mutate(data);
//   };

//   // const { user } = useUserContext();
//   // if (user) {
//   //   setUserId(user.data.user._id);
//   // }
//   return (
//     <div>
//       <FormGenerate generate={handleGenerate} />
//       <TestGenerated data={generatedData} submit={handleSubmit} user_id={user_id} />
//       <DisplayResults results={{ correct: 0, incorrect: 0, score: 0 }} />
//     </div>
//   );
// };
