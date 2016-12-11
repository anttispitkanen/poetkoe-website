import React from 'react';

//check for touchscreen
let touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
//if touchscreen, no hover effect
if (touchsupport) {
    document.documentElement.className += " no-hover";
}


export const MainLayout = ({content}) => (
    <div className="main-layout">

        <main>
            {content}
        </main>

    </div>


)
