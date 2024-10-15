const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    var mudar = document.body.className;
    if(mudar.includes("dark-theme")) {
        this.textContent = "Light";
    } else {
        this.textContent = "Dark";
    }

    console.log('current class name: ' + mudar);
});
