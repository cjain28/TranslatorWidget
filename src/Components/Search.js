import React, { useEffect, useState } from "react";
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [result, setResult] = useState([]);

    console.log(result);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId)
        };
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                },
            });

            setResult(data.query.search);
        };
        search();
    }, [debouncedTerm]);

    const renderedResult = result.map((results) => {
        return (
            <div key={results.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${results.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {results.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: results.snippet }}></span>
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Input to Search</label>
                    <input
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResult}
            </div>
        </div>
    );
};

export default Search;