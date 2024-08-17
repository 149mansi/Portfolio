document.addEventListener("DOMContentLoaded", function () {
    const projectContainer = document.querySelector(".projects-container");
    const projects = [
      {
        title: "Recipe App",
        imgSrc: "Build recipe app.jpg",
        details:"Responsive app for recipe search, management, and theme customization",
        link: "https://149mansi.github.io/Build-a-Recipe-App-with-Vanilla-JavaScript/",
        category: "Web Development",
      },
      {
        title: "Netflix Clone",
        imgSrc: "netflixClone.png",
        details: "A clone of Netflix using HTML, CSS, and JavaScript.",
        link: "#",
        category: "Web Development",
      },
      {
        title: "Greeny Earth",
        imgSrc: "greenyEarth.png",
        details: "A project focused on environmental sustainability.",
        link: "#",
        category: "Environment",
      },
    ];
  
    function renderProjects(filterCategory = "All") {
      projectContainer.innerHTML = "";
      const filteredProjects = filterCategory === "All" 
        ? projects 
        : projects.filter(project => project.category === filterCategory);
      
      filteredProjects.forEach(project => {
        const projectCard = `
          <div class="project-container project-card">
            <img src="${project.imgSrc}" alt="${project.title}" loading="lazy" class="project-pic" />
            <h3 class="project-title">${project.title}</h3>
            <p class="project-details">${project.details}</p>
            <a href="${project.link}" target="_blank" class="project-link">Check it Out</a>
          </div>
        `;
        projectContainer.insertAdjacentHTML("beforeend", projectCard);
      });
    }
  
    // Initial render
    renderProjects();
  
    // If you want to add a filter functionality
    const filterButtons = document.querySelectorAll(".filter-button");
    filterButtons.forEach(button => {
      button.addEventListener("click", function () {
        const filterCategory = this.dataset.category;
        renderProjects(filterCategory);
      });
    });
  });
  