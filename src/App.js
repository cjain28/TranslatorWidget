import React, { useState } from 'react';
import Accordion from './Components/Accordion';
import Dropdown from './Components/Dropdown';
import Search from './Components/Search';
import Translate from './Components/Translate';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },

    {
        title: 'Why use React?',
        content: 'React is a favorite library among Front-end developers'
    },

    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];

const options = [
    {
        label: "The color Red",
        value: "red"
    },
    {
        label: "The color Green",
        value: "green"
    },
    {
        label: "The shade of blue",
        value: "blue"
    }
];

const App = () => {
    const [Selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button> */}
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            {/* {showDropdown ?
                <Dropdown
                    Selected={Selected}
                    onSelectedChange={setSelected}
                    options={options} />
                : null
            } */}
            <Translate />
        </div>
    );
};

export default App;
