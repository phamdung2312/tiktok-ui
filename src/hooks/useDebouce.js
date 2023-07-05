import { useState, useEffect } from 'react';
function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value);
    useEffect(() => {
        const IdSetTime = setTimeout(() => setDebounce(value), delay);
        return () => clearTimeout(IdSetTime);
    }, [value, delay]);

    return debounce;
}

export default useDebounce;
