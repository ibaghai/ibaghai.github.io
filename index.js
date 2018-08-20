let projects = [{
   title: 'Immigration Visualization',
   desc: 'A visualization examining the change in population across the 2000s. Made with D3.js.',
   img: `url('img/immigration.png')`,
   href: 'https://ishansaksena.github.io/immigration-viz/'
}];

for (let i = 0; i < projects.length; i++) {
   document.querySelector('.projects').innerHTML += makeProject(projects[i]);
}



function makeProject(project) {
   return  `<div class="project">
      <a href="${project.href}" class="project-img" style="background: ${project.img}; background-size: contain;
      background-repeat: no-repeat;"></a>
      <div class="project-info">
         <a href="${project.href}" class="project-title">${project.title}</a>
         <div class="project-desc">${project.desc}</div>
      </div>
   </div>`;
}
