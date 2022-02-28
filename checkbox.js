Array.from(document.getElementsByClassName('checkbox')).forEach(checkbox => {
    checkbox.addEventListener('click', function() {
        this.classList.toggle('checkbox-active');
    });
});