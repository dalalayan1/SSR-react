import React from 'react';
import { renderToString } from 'react-dom/server';
import MainComponent from './components/main-component.js';
import document from './template.js';

export default function (req,res){
    const html = renderToString(<MainComponent />);

    res.send(document({
        title: 'server-side react',
        body: html
    }))
}