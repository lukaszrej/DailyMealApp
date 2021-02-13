import { useRef, useEffect } from 'react';

export const useInputFocus = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [inputRef])

	return [ inputRef ];
};
