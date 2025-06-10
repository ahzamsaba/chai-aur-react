import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <>
            <h1>Custom App | Chai</h1>
        </>
    )
}

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google' 
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = " | Chai aur React"
const reactEle = React.createElement(//babel injects it
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click to visit GOOGLE',
    anotherUser
)

createRoot(document.getElementById('root')).render(

    // <App />

    // <MyApp />
    // MyApp()

    // <ReactElement />     //->does not work
    // ReactElement         //->does not work

    // anotherElement

    reactEle
    
)
