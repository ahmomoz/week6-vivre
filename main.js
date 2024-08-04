import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})