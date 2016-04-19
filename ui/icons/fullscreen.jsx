import React from 'react'; 
import mixClass from 'classnames';
import SemanticUI from '../molecules/semantic_ui';

const FullScreen =  (props)=> 
<svg version="1.2" viewBox="0,0,512,512" {...props}>

    <g id="Layer_2">
    <rect x="0" y="0" rx="20" ry="20" width="100%" height="100%" fill="none" stroke="black" strokeWidth="5" />
    </g>
    <g id="Layer_3">
    <line x1="0" y1="80" x2="100%" y2="80" stroke="black" strokeWidth="3" />
    </g>
    <g id="Layer_4">
        <circle cx="50" cy="35" r="22" stroke="black" strokeWidth="5" fill="none" />
        <circle cx="110" cy="35" r="22" stroke="black" strokeWidth="5" fill="none" />
        <circle cx="170" cy="35" r="22" stroke="black" strokeWidth="5" fill="none" />
    </g>
    <g id="Layer_5">
        <g opacity="1">
            <path d="M272+272L416+128L272+272Z" fill="#ffffff" opacity="1" stroke="#000000" strokeLinecap="square" strokeWidth="5" />
            <path d="M272+176L272+272" fill="#ffffff" opacity="1" stroke="#000000" strokeLinecap="square" strokeWidth="5" />
            <path d="M368+272L272+272" fill="#ffffff" opacity="1" stroke="#000000" strokeLinecap="square" strokeWidth="5" />
        </g>
        <g opacity="1">
            <path d="M240+304L96+448L240+304Z" fill="#ffffff" opacity="1" stroke="#000000" strokeLinecap="square" strokeWidth="5" />
            <path d="M240+400L240+304" fill="#ffffff" opacity="1" stroke="#000000" strokeLinecap="square" strokeWidth="5" />
            <path d="M144+304L240+304" fill="#ffffff" opacity="1" stroke="#000000" strokeLinecap="square" strokeWidth="5" />
        </g>
    </g>
</svg>;

export default FullScreen;

