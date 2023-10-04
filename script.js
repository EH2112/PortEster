const projectsContainer = document.getElementById("projects-container");

// Sample projects data
const projects = [
    { name: "Projeto 1", description: "Projetos desenvolvidos no Elas na Tech" },
    { name: "Projeto 2", description: "Projetos desenvolvidos no IFSP" },
    { name: "Projeto 3", description: "Projetos desenvolvidos Externamente" }
];

// Function to display projects
function displayProjects() {
    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
        projectsContainer.appendChild(projectDiv);
    });
}

// Call the function to display projects
displayProjects();
