import React from 'react';
import Svg from './Svg';
import Path from './Path';

const Dashboard = props =>
<Svg {...props}>
    <Path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
</Svg>

export default Dashboard;
