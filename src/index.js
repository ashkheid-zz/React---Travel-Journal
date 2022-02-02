import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';

//#region Creating root element inside the <body> tag
//Creating <div> element
const rootElement = document.createElement('div');

//assigning #root id to it
rootElement.setAttribute('id', 'root');
rootElement.setAttribute('theme', 'red');
rootElement.classList.add('flex');

//appending to <body>
document.body.append(rootElement);
//#endregion

ReactDOM.render(<App />, rootElement);

document.querySelector('.theme-box').addEventListener('click', (e) => {
  switch (e.target.id) {
    case 'th-red':
      rootElement.setAttribute('theme', 'red');
      break;
    case 'th-teal':
      rootElement.setAttribute('theme', 'teal');
      break;
    case 'th-indigo':
      rootElement.setAttribute('theme', 'indigo');
      break;
    case 'th-amber':
      rootElement.setAttribute('theme', 'amber');
      break;
    default:
      throw new Error('Something went wrong!');
  }
});
