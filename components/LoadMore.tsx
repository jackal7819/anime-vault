'use client';

import Image from 'next/image';
import { JSX, useEffect, useState } from 'react';
import { fetchAnime } from '@/app/action';
import { useInView } from 'react-intersection-observer';

let page = 2;

export default function LoadMore() {
	const { ref, inView } = useInView();
	const [data, setData] = useState<JSX.Element[]>([]);

	useEffect(() => {
		if (inView) {
			fetchAnime(page)
				.then((res) => {
					setData([...data, ...res]);
					page++;
				})
				.catch((error) => console.log(error));
		}
	}, [inView, data]);
	return (
		<>
			<section className='grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
				{data}
			</section>
			<section className='flex items-center justify-center w-full'>
				<div ref={ref}>
					<Image
						src='./spinner.svg'
						alt='spinner'
						width={56}
						height={56}
						className='object-contain'
					/>
				</div>
			</section>
		</>
	);
}
