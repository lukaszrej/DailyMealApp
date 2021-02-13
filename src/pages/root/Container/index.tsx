import { Props } from './types';
import { Navigation } from './Navigation';
import { Notifier } from './Notifier';
import { Container as StyledContainer } from "../../../styles";

export const Container = (props: Props) => {
    const { children } = props;

	return (
		<>
			<StyledContainer >
				<Navigation />

				<main>
					{children}
				</main>
			</StyledContainer>

            <Notifier />
		</>
	);
};
