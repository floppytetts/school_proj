document.addEventListener("DOMContentLoaded", function() {
    const projectLinks = document.querySelectorAll(".view-project");
    
    projectLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            alert("Project page is under construction!");
        });
    });
});
