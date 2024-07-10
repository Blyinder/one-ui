/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import './bootstrap';

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import './components/Example';
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { NavigationMenuDemo } from './components/header/menu';


document.querySelectorAll('[data-react-component]').forEach(element => {
    const props = JSON.parse(element.getAttribute('data-props'));
    const Component = require(`./components/${element.getAttribute('data-react-component')}`).default;

    const root = createRoot(element);
    root.render(<Component {...props} />);
});

const root = document.getElementById('root');

const App = () => {
    return (
        <div>
            <NavigationMenuDemo />
            {/* Autres composants ou contenu */}
        </div>
    );
};
