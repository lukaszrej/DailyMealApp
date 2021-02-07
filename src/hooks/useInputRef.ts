import { useRef, useEffect } from 'react';

export const useInputRef = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [inputRef])

	return [ inputRef ];
};
