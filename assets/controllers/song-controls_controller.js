import { Controller } from '@hotwired/stimulus';

/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
import axios from 'axios';

export default class extends Controller {

  play(event) {
    event.preventDefault();

    axios.get(this.infoUrlValue)
        .then((response) => {
          console.log(response);
        });
  }
}
