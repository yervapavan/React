function customRender(reactElement,container){
    const child=document.createElement(reactElement.type);
    child.innerHTML=reactElement.text;
    child.setAttribute('target',reactElement.attributes['target']);
    child.setAttribute('href',reactElement.attributes['href']);
    container.appendChild(child)
}




const reactElement={
    type:'a',
    attributes:{
        href:"https://google.com",
        target:"__blank",
    },
    text:"click here",
}

const container=document.querySelector("#root");
customRender(reactElement,container);