import React from 'react';

const DropDownIcon = () => (
<svg  {...props}>
    <path d="M7 10l5 5 5-5z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>
);

DropDownIcon.defaultProps = {
    width: 24,
    height: 24,
    viewBox: '0 0 160 160',
};

export default DropDownIcon;
