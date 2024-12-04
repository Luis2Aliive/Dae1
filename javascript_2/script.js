// 1. Centralize JavaScript Management (all code inside this file)

// 2. Work With Constants For Reliability
const MAX_PARTICIPANTS = 100; // Named Constant For Fixed Value 
const HIGHLIGHT_COLOR = 'yellow'; // Named Constant For Styling 

// 3. Modify Web Pages For Interaction 
// Use Elements By ID, Class Name, And Tag Name 
const title = document.getElementById('main-title'); // Select By ID
title.style.color = 'darkblue'; // Modify CSS Style
title.setAttribute('data-status', 'active'); // Add New Attribute

const navItems = document.getElementsByClassName('nav-item'); // Select By Class Name
for (let i = 0; i < navItems.length; i++) {
    navItems[i].style.fontweight = 'bold'; // Modify CSS Style For All Nav Items 
}

const allLinks = document.getElementByTagName('a'); // Select By Tag Name 
for (let i = 0; i <allLinks.length; i ++) {
    allLinks[i].setAttribute('target', '_blank'); // Add New Attribute To Open Links In A New Tab
}

// 4. Direct Code Flow For Logic (Using Else If Statement)
function checkUserRole(role) {
    if (role =='admin'){
        console.log('Welcome Admin');
    } else if (role === 'user'){
        console.log('Welcome User');
    } else {
        console.log('Role not recognized');
    }
}

//5. React To User Actions For Engagement 
// Onclick Event For The Logo
const logo = document.querySelector('.logo'); // Select By Class
logo.onclick = function () {
    alert("You Clicked The Logo!"); //Onclick Action 
};

// Onload Event For When The Page Is Fully Loaded 
window.onload = function () {
    alert("Welcome To VerseVibe!"); // Onload Action
};

// Onmouseover Event For Text Highlighting 
function highlightText(element) {
    element.style.backgroundColor = HIGHLIGHT_COLOR; // Change Element Appearance
}
const promotionalText = document.querySelector('p'); // Select By Tag 
promotionalText.onmouseover = function () {
    highlightText(promotionalText); // Onmouseover Action
};

// 7. Automate repetition for simplicity (using a loop)
const discounts = [10, 15, 20]; // Example array of discounts
const discountedPrices = [];
for (let i = 0; i < discounts.length; i++) {
    const price = 100; // Example base price
    const discountedPrice = calculateDiscount(price, discounts[i]);
    discountedPrices.push(discountedPrice); // Store calculated prices in an array
    console.log(`Price with ${discounts[i]}% discount: $${discountedPrice}`); // Log result
}

// 8. Organize Data For Efficiency (Using An Array)
const products = ['T-Shirts', 'Sweatshirts', 'Pants & Shorts'];
for (let i = 0; i < products.length; i++) {
    console.log('Product:', products[i]); // Log Array Elements
}

// 9. Schedule tasks for interactive experiences (using setTimeout)
let timeoutId = setTimeout(function () {
    alert("Time's Up! Check Our New And Latest Collection Available Now."); // Delayed alert
}, 5000); // Alerts after 5 seconds

// Clear The Timeout After A Specific Action (Example)
document.querySelector('body').onclick = function () { 
    clearTimeout(timeoutId); // Cancel The Scheduled Alert 
    console.log ("Timeout cleared due to user action.");
}