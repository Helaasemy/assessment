import React, { useState } from 'react';
import { LanguageConvert, InputNumConverter } from '../../utils';
import './Converter.css';

function Converter() {
    const [value, setValue] = useState('');
    const handleChange = ({ target }) => {
        setValue(target.value)
    }
    const number = LanguageConvert(value)
    const result = InputNumConverter(number)

    return (
        <div className="input">
            <input
                placeholder="write an arabic number"
                type="text"
                onChange={handleChange}
                data-testid="input"
            />
            <div className='result' data-testid="result" >
                {result}
            </div>
        </div>
    );
}

export default Converter