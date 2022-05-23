import React from 'react';
import PropTypes from 'prop-types';

import "../css/Technologies.css"

Technologies.propTypes = {
    
};
const doms = [
    {
        name: "html5",
        competently: [1, 2, 3, 4]
    },
    {
        name: "css3",
        competently: [1, 2, 3, 4]
    },
    {
        name: "javascript",
        competently: [1, 2, 3, 4]
    },
    {
        name: "html5",
        competently: [1, 2, 3, 4]
    },
    {
        name: "sass",
        competently: [1, 2, 3, 4]
    }
]
const libraries = [
    {
        name: "react",
        competently: [1, 2, 3, 4]
    },
    {
        name: "redux",
        competently: [1, 2, 3, 4]
    }
    ,   {
        name: "tailwind-css",
        competently: [1, 2, 3, 4]
    }
]
function Technologies(props) {
    return (
        <div className = 'technologies'>
            <u>Technologies</u>
            <div className = 'technologies__content'>
                <span >
                These are some technologies that I've learnt
                so far through some small projects and courses.
                </span>
                <div className = 'technologies__content-1'>DOM world
                    <div className = 'technologies__content-item1'>
                    <ul>
                        {doms.map((dom) => (
                            <li><i class={`bx bxl-${dom}`}>{dom}</i><i class='bx bx-star'></i></li>
                        ))}
                    </ul>
                    </div>
                </div>
                <div className = 'technologies__content-2'>Libraries/ Frameworks
                    <div className = 'technologies__content-item2'>
                    <ul>
                        {libraries.map((librarie) => (
                            <li><i class={`bx bxl-${librarie}`}>{librarie}</i><i class='bx bx-star'></i></li>
                        ))}
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;