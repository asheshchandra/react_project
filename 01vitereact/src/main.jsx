import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myapp()
{
    return(
        <h1>Custom App | Chai</h1>
    )
}

// const reactElement = {
//     type: "a",
//     props: {
//         href: "https://www.google.com",
//         target: "_blank"
//     },
//     children: 'click me to visit google'
// }

const antherUser = "Chai aur react";

const antherElement = (
    <a href='https://google.com' target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google',
    antherUser
)

createRoot(document.getElementById('root')).render(
  
    reactElement
)
