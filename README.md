# whisk-test

##Folder structure

* **config** app configuration (e.g. api keys, can be extended to store production/dev configs)
* **src** app source code
  * **common** shared parts of the app
    * **components** React jsx components
    * **modules** JS modules (ES6, or CommonJS). Redux store, reducers and action creators, as well as other helper modules are here.
    * **styles** css
  * **feed** parts of the app related to recipe feed
    * *(same as common structure)*
* **www** webroot
