// Write your code in this file!
const currentUser = 'Grace Hopper';
// const welcomeMessage = 'Welcome to Flatbook, ';
// const welcomeMessage = 'currentUser';

const welcomeMessange = 'welcome to Flatbook,currentUser';
// const welcomeMessage = 'welcome to Flatkook, '+ currentUser;
// const welcomeMessage = 'welcome to Flatbook, ${currentUser}';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
// const shortGreeting = 'Welcome, ';
// const shortGreeting = `Welcome, ${currentUser}`;
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
