async function init() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        
        const projectList = document.getElementById('project-list');
        const dropdownLinks = document.getElementById('dropdown-links');

        data.projects.forEach(project => {
            const article = document.createElement('article');
            article.className = 'content-outline';
            article.innerHTML = `
                <div class="container">
                    <div class="content">
                        <h1>${project.title}</h1>
                        <div class="video">
                            <video controls><source src="${project.video}" type="video/mp4"></video>
                        </div>
                        <p>${project.desc}</p>
                        <button class="project-buttons" id="${project.id}">READ MORE</button>
                    </div>
                </div>`;
            projectList.appendChild(article);

            const link = document.createElement('div');
            link.id = project.linkId;
            link.textContent = project.title;
            dropdownLinks.appendChild(link);

            document.getElementById(project.id).onclick = () => window.open(project.url, "_blank");
            document.getElementById(project.linkId).onclick = () => window.open(project.url, "_blank");
        });

        document.getElementById("toggle-night-mode").onclick = () => {
            document.body.classList.toggle('night-mode');
        };

    } catch (error) {
        console.error("Error loading JSON:", error);
    }
}

init();