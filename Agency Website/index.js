const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));

const navBar = $('.nav-bar');
const navVerticalBar = $('.nav-bar-vertical');
if (navBar.isIntersecting) {
    navBar.addClass('show');
} else {
    navBar.removeClass('show');
    navVerticalBar.addClass('show');
}