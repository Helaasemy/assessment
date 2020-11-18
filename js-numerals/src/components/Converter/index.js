import React, { useState } from 'react';
import './Converter.css';

function Converter() {
    const [value, setValue] = useState('');
    const handleChange = ({ target }) => {
        setValue(target.value)
    }

    return (
        <div className="input">
            <input
                placeholder="write an arabic number"
                type="text"
                onChange={handleChange}
            />
            <div className='result' >
                {value}
            </div>
        </div>
    );
}

export default Converter