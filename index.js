let projects = [{
   title: 'Immigration Visualization',
   desc: 'A deep dive into who the American people are and where they come from, this is an exercise in tracing the history of an immigrant nation with data.',
   img: `url('img/immigration.png')`,
   href: 'https://ibaghai.github.io/immigration-viz/'
}];

for (let i = 0; i < projects.length; i++) {
   document.querySelector('.projects').innerHTML += makeProject(projects[i]);
}



function makeProject(project) {
   return `<div class="project">
      <a href="${project.href}" class="project-img" style="background: ${project.img}; background-size: contain;
      background-repeat: no-repeat;"></a>
      <div class="project-info">
         <a href="${project.href}" class="project-title">${project.title}</a>
         <div class="project-desc">${project.desc}</div>
      </div>
   </div>`;
}
