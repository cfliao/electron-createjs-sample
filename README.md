 Used to record the hacks for using library in HTML
 ```js
 <!-- Insert this line above script imports  -->
 <script>if (typeof module === 'object') {window.module = module; module = undefined;}</script>
 ...
 <!-- Insert this line after script imports -->
 <script>if (window.module) module = window.module;</script>
 ```
 
 