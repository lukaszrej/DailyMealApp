import { useSelector } from 'react-redux';
import { getIsLoading } from '../../store/loader/Loader.selectors';
import * as S from '../../styles';

export const Loader = () => {
    const isLoading = useSelector(getIsLoading);
    
	return (
        <>
            {isLoading && 
                <S.Loader>
                    <S.CircularProgress size={48} />
                </S.Loader>
            }
        </>
	);
};
