// donation.js — compatibility wrapper
// The deployed site references `js/donation.js`, but the repo has `js/donate.js`.
// This simple wrapper dynamically loads the existing file to avoid 404 errors.
(function() {
  var s = document.createElement('script');
  s.src = 'js/donate.js';
  s.defer = true;
  s.onload = function(){ console.log('Loaded donate.js via donation.js wrapper'); };
  s.onerror = function(){ console.warn('Failed to load js/donate.js from donation.js wrapper'); };
  document.head.appendChild(s);
})();
