import { InlineLoader as InlineLoaderContainer, CircularProgress } from '../../styles';

export const InlineLoader = () => {
	return (
		<InlineLoaderContainer>
			<CircularProgress size={24} />
		</InlineLoaderContainer>
	);
};
