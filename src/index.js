/*Importing the React module*/
import React from 'react';
/*Importing the React-DOM module*/
import ReactDOM from 'react-dom';
/*Importing from the app.js file*/
import App from './components/App';
/*Importing from Map.js*/
import Map from './components/Map';
/*Importing from Quiz.js*/
import Quiz from './components/Quiz';
/*Importing from PopupButton.js*/
import PopupButton from './components/PopupButton';
/** */
import Video from './components/Video';
/*Importing from the registerServiceWorker.js file*/
import registerServiceWorker from './registerServiceWorker';
/*Importing from the index.css file*/
import './styles/css/index.css';


/*Render the App with the document.getElementById('root')*/
ReactDOM.render(<App />, document.getElementById('root'));

/*Render the Map with the document.getElementById('maproot')*/
ReactDOM.render(<Map />, document.getElementById('maproot'));

/*Render the Quiz with the document.getElementById('quiz')*/
ReactDOM.render(<Quiz />, document.getElementById('quiz'));

/*Render the Popup with the document.getElementById('quiz')*/
ReactDOM.render(<PopupButton />, document.getElementById('popupbutton'));

/** */
ReactDOM.render(<Video />, document.getElementById('video'));

/*Recall the regiserServiceWorker*/
registerServiceWorker();