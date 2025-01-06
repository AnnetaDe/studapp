import FormGenerate from '@/ui/formGenerate/FormGenerate';
import TestGenerated from '@/ui/testGenerated/TestGenerated';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '',
};

const data = {
  test_id: '7e1fa80c-51dc-41be-957e-d84f19f5a152',
  message: 'Test created',
  status: 'success',
  level: 4,
  subject: 'math',
  tests: [
    {
      question: 'What is the sum of the first 10 terms of the arithmetic sequence 3, 7, 11, ...?',
      choices: {
        '1': 'jgjhgjhgghjgl vjhvjhljgljg jlhjllllllllll',
        '2': 'kjk;j;j;j;lj',
        '3': 'k;lklk;lk;lk',
        '4':
          'the maximum number of regions that can be formed by joining 10 points on a circle with straight lines?',
      },
      submit_answer:
        'gAAAAABneXxgYKJhr1V114iD1pgVlkG6ez40F-26p-9cBsUmEOgcOl7722NBAZvgRvfqHmxS65_lO2MwzL9vBCy7lPvMb8JlSw==',
    },
    {
      question:
        'What is the maximum number of regions that can be formed by joining 10 points on a circle with straight lines?',
      choices: {
        '1': 'jjjjjjjjjjjjj jjjjjjjjjjjjjj jjjjjjjjj jjjkllllllllll llllllllllllllllll',
        '2': 'kgkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjj jjjjjjjjjjjj',
        '3': '42',
        '4': 'kkkkkkkkk kkkkkkkk kkkkkkkkkkkkk kkkkkkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkkkkkk',
      },
      submit_answer:
        'gAAAAABneXxgTxocKu_zwaPrIcyg_IGkGrvmdSvJeJS-G4RSbO-upSDb3_yoPRIoKlpMGm9favUBrqRvZcW4hNjfvPL8S_nsqQ==',
    },
  ],
  completed: false,
  date: '2025-01-04 18:22:24',
  count: 2,
};

export default function Page() {
  return (
    <div>
      <FormGenerate />
      <TestGenerated data={data} />
    </div>
  );
}
