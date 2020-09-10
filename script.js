const themeSwitch = document.querySelector('input#checkbox[type=checkbox]');
themeSwitch.addEventListener("change", function(){
    /* When the toggle switch is checked, the event listener is activated and it causs the theme to alternate between light mode and dark mode */
    if(this.checked){
        document.querySelector('body').classList.add('light')
        document.querySelector('.word').textContent = "Light Mode"
    } else {
        document.querySelector('body').classList.remove('light')
        document.querySelector('.word').textContent = "Dark Mode"
    }
})