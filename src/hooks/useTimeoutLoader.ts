import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useTimeoutLoader = (action: () => void, isLoading: boolean) => {
	const dispatch = useDispatch();

	useEffect(
		() => {
			const timer = setTimeout(() => {
				dispatch(action());
			}, 400);

			return () => {
				clearTimeout(timer);
			};
		},
		[ action, isLoading, dispatch ]
	);
};
