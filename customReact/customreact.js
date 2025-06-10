function customRender(ele,container){
    /*
        thoda kharab code
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = ele.children
    domElement.setAttribute('href', ele.props.href)
    domElement.setAttribute('target', ele.props.target)

    container.appendChild(domElement)
    */

    const domEle = document.createElement(reactElement.type)
    domEle.innerHTML = ele.children
    for (const prop in ele.props) {
        if(prop === 'children') continue//safety check

        domEle.setAttribute(prop, ele.props[prop])
    }
    container.appendChild(domEle)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google' 
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)
