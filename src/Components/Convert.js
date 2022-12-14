import React, { useState, useEffect } from "react";
import Axios from 'axios';

const Convert = ({ language, text }) => {
    const [Translated, setTranslated] = useState('');
    const [debouncedText,setDebouncedText] = useState(text);

    useEffect(() =>{
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 5000);

        return () =>{
            clearTimeout(timerId);
        };
    },[text]);

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await Axios.post(
                'https://translation.googleapis.com/language/translate/v2',
                {},
                {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                    },
                }
            );
            setTranslated(data.data.translations[0].translatedText);
        };
        doTranslation();
    }, [language, debouncedText]);

    return (
        <div>
            <h1 className="ui header">{Translated}</h1>
        </div>
    );
};

export default Convert;