// MediumFeed.jsx

import React, { useEffect } from 'react';

const MediumFeed = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://widgets.sociablekit.com/medium-publication-feed/widget.js';
        script.async = true;
        script.defer = true;
        script.setAttribute('data-embed-id', '25429606');

        // Append the script to the document body
        document.body.appendChild(script);

        // Clean up: remove the script when component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className='sk-ww-medium-publication-feed'></div>
    );
};

export default MediumFeed; // Ensure this line exports the component correctly
