import {useState} from 'react';

function NumberInput () {
    const [value, setValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const result = event.target.value.replace(/\D/g, '');
        setValue(result);
    };

    return (
        <div>
            <input type="text" value={value} onChange={handleChange}/>
        </div>
    );
}

export default NumberInput;