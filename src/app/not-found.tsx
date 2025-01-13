// pages/404.tsx
'use client';

import Link from 'next/link';

export default function Custom404() {
  return (
		<div className="flex flex-col items-center justify-center text-center">
			<h1 className="mb-4 text-6xl font-bold">404</h1>
			<p className="mb-8 text-xl">Oops! The page you are looking for could not be found.</p>
			<Link
				className="inline-block cursor-pointer p-2 text-center text-lg transition duration-200 hover:border-[#c98d9e] hover:text-[#c98d9e]"
				href="/"
			>
				Go back home
			</Link>
		</div>
	);
}
