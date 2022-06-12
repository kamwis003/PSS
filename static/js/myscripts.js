$(".target").on("click", function() {
    let $button = $(this);
    let oldVal = parseInt($button.parent().find("input").val());
    let newVal = 0;

    if ($button.text() == '+') {
        newVal = oldVal + 1;
    }

    else {
        if (oldVal > 0) {
            newVal = oldVal - 1;
        }
        else {
            newVal = 0;
        }
    }

    $button.parent().find("input").val(newVal);
});





$('.addToCart').on("click", function(event) {
    console.log('hello');
    if($(this).prev().prev().prev().find("input").val() == '0') {
        event.preventDefault();
        $(this).next().next().next().html("Musisz wybrać przynajmniej jeden produkt.");
        $(this).next().next().next().css("display", "block");
        $(this).next().next().next().delay(3000).slideUp();
    }

    if ($(this).prev().val() == "0") {
            event.preventDefault();
            $(this).next().next().next().html("Aby zakupić, musisz się wpierw zalogować.");
            $(this).next().next().next().css("display", "block");
            $(this).next().next().next().delay(3000).slideUp();
        }
});


$(".flashMessage").delay(3000).slideUp();

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});