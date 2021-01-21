import { useState, ChangeEvent, SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getStartedApp } from '../../store/login/Login.selectors';
import { createUser, calculateDailyNeed } from '../../store/user/User.actions';
import { startApp } from '../../store/login/Login.actions';
import { ModalTitle } from '../../components/ModalTitle';
import { Form } from '../../components/Form';
import { routes } from '../../routing/routes';
import * as S from '../../styles';
import * as T from '../../constants/constants';

export const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const isStarted = useSelector(getStartedApp);

	const [name, setName] = useState('');
	const [height, setHeight] = useState('170');
	const [weight, setWeight] = useState('70');
	const [age, setAge] = useState('28');
	const [gender, setGender] = useState('male');
	const [activityLevel, setActivityLevel] = useState('1.2');

	const onGenderChange = (event: ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
		setGender((event.target as HTMLInputElement).value);
	};

	const onActivityLevelChange = (event: ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
		setActivityLevel((event.target as HTMLInputElement).value);
	};

	const onLoginSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		dispatch(createUser({ name, height, weight, age, gender, activityLevel }));
		dispatch(calculateDailyNeed({ height, weight, age, gender, activityLevel }));
		dispatch(startApp());
		localStorage.setItem("started", "true");
		localStorage.setItem("user", JSON.stringify({ name, height, weight, age, gender, activityLevel }));
		history.push(routes.home);
	};

	return (
		<S.Dialog open={!isStarted} aria-labelledby='start-form-title'>
			<ModalTitle id='start-form-title'>
				{T.FILL_THE_FORM}
			</ModalTitle>

            <Form 
                onSubmit={onLoginSubmit}
                name={name}
                setName={setName}
                height={height}
                setHeight={setHeight}
                weight={weight}
                setWeight={setWeight}
                age={age}
                setAge={setAge}
                activityLevel={activityLevel}
                onActivityLevelChange={onActivityLevelChange}
                gender={gender}
                onGenderChange={onGenderChange}
				isInitialComponent
			/>
		</S.Dialog>
	);
};
