const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

       
        const targetId = this.getAttribute('href'); 
        const targetSection = document.querySelector(targetId);

        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
window.onload = function () {
    alert("What are you doing here? Wanna know me? you huh😉");
};