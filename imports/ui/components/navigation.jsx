import React from 'react';
import { IndexLink, Link } from 'react-router';

export const Navigation = () => (
    <ul>
        <li><IndexLink to="/">Home</IndexLink></li>
        <li><Link to="/1">1</Link></li>
        <li><Link to="/2">2</Link></li>
    </ul>
);