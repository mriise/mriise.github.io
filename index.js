import {render, html} from 'https://unpkg.com/htm/preact/standalone.module.js';
import * as test from './src/test.js'

render(html`<a href="/">Hello!</a>`, document.body);
console.log('loaded index')
