import { Props } from './index.types';
import { Navigation } from './Navigation';
import { Notifier } from './Notifier';
import * as S from "../../../styles";

export const Container = (props: Props) => {
    const { children } = props;
    
	return (
		<>
			<S.Container >
				<Navigation />

				<main>
					{children}
				</main>
			</S.Container>

            <Notifier />
		</>
	);
};
