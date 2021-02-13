import { useSelector } from 'react-redux';
import { getIsLoading } from '../../store/loader/Loader.selectors';
import { Loader as LoaderContainer, CircularProgress } from '../../styles';

export const Loader = () => {
    const isLoading = useSelector(getIsLoading);
    
	return (
        <>
            {isLoading && 
                <LoaderContainer>
                    <CircularProgress size={48} />
                </LoaderContainer>
            }
        </>
	);
};
