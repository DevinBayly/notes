import App from './App.svelte';
import {handleClientLoad} from "./drive_code.js"
import {run} from "./notetool.js"
const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;

window.onload =()=> {
	handleClientLoad()
	run()
}