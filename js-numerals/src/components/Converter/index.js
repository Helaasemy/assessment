import React, { useState } from 'react';
import { LanguageConvert } from '../../utils';
import './Converter.css';

function Converter() {
    const [value, setValue] = useState('');
    const handleChange = ({ target }) => {
        setValue(target.value)
    }
    const number = LanguageConvert(value)


    return (
        <div className="input">
            <input
                placeholder="write an arabic number"
                type="text"
                onChange={handleChange}
            />
            <div className='result' >
                {number}
            </div>
        </div>
    );
}

export default Converter