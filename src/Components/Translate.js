import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: "Hindi",
        value: "hi"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "Dutch",
        value: "nl"
    },
    {
        label: "Bengali",
        value: "bn"
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter a text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown
                label="Select a language"
                options={options}
                Selected={language}
                onSelectedChange={setLanguage}
            />
            <hr />
            <h3 className='ui header'>Output</h3>
            <Convert text={text} language={language} />
        </div >
    );
};

export default Translate;