// Dark Mode Detector
// with this one-liner, you can verify if the user is using dark mode in the application, then you can update some functionality according to dark mode.

const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches;
