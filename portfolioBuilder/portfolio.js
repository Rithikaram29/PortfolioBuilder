const contactContainer = document.getElementById("contactinfo");
const dp = document.getElementById("dphoto")
let obj = JSON.parse(localStorage.getItem("data"));


//DP----------------------------------------------------------------------------
dp.innerHTML = `<img src=${obj.photo}>`

//CONTACT-----------------------------------------------------------------------
contactContainer.innerHTML = `
<p><span class="material-symbols-outlined">call</span> ${obj.phone}</p>
<a href="${obj.email}"><span class="material-symbols-outlined">mail</span> ${obj.email}</a>
<p><span class="material-symbols-outlined">home_pin</span> ${obj.address}</p>
<a href="${obj.linkedin}"><i class="fa fa-linkedin-square" style="font-size:24px"></i>${obj.linkedin}</a>
<br>
<br>
<a href="${obj.github}"><i class="fa fa-github" style="font-size:24px"></i>${obj.github}</a>
`

//EDUCATION---------------------------------------------------------------------------------------------------------------------------

const eduData = obj.educationData;
function displayEdu() {
    const container = document.getElementById("education");
    container.innerHTML = '';

    if (Object.keys(eduData).length > 0) {

        for (const key in eduData) {
            if (eduData.hasOwnProperty(key)) {
                const element = eduData[key];

                // Create a new <p> element for each item
                const para = document.createElement("p");
                para.innerHTML = `${key}: <br>${element.degree} at ${element.institute} from ${element.from} to ${element.to}`;

                // Append the new <p> element to the container
                container.appendChild(para);
            }
        }
    } else {
        // If no data, display a message
        const para = document.createElement("p");
        para.textContent = "No education data available.";
        container.appendChild(para);
    }
}
displayEdu()


//SKILLS-------------------------------------------

function displaySkills() {

    //technical skill display
    const techContain = document.getElementById("techskill");
    const techSkills = obj.techskill;
    let tech = techSkills.filter(item => item.length > 0)
    tech.forEach(item => {
        const gridItem = document.createElement('div');
        gridItem.style.backgroundColor = "white";
        gridItem.style.borderRadius = "3px";
        gridItem.style.margin = "1%";
        gridItem.style.padding = "1%";
        gridItem.className = 'grid-item';
        gridItem.textContent = item;
        techContain.appendChild(gridItem);
    });

    //softskill display
    const softContain = document.getElementById("softskill");
    const softSkills = obj.softskill;
    let soft = softSkills.map(item => item.trim()).filter(item => item.length > 0)
    soft.forEach(item => {
        const gridItem = document.createElement('div');
        gridItem.style.backgroundColor = "white";
        gridItem.style.borderRadius = "3px";
        gridItem.style.margin = "1%";
        gridItem.style.padding = "1%";
        gridItem.className = 'grid-item';
        gridItem.textContent = item;
        softContain.appendChild(gridItem);
    });

}
displaySkills();

//name and bio-----------------------
const intro = document.getElementById("intro");
intro.innerHTML=`
<h1 id="ogName">${obj.name}</h1>
<p id="titleof">applying for the role of ${obj.title}</p>
<h3>PROFESSIONAL SUMMARY</h3>
<hr class="hr">
<p>${obj.bio}</p>
`


//PROJECTS-------------------------------
const projects = document.getElementById("projects");
const project1 = obj.project1;
const project2 = obj.project2;
const project3 = obj.project3;
projects.innerHTML=`
<h3>PROJECTS WORKED ON:</h3>
<hr class="hr">
<h4>Project 1:</h4>
<p><b>Link: </b></p>
<a href="${project1.link}">${project1.link}</a>
<p><b>Description: </b></p>
<p>${project1.desc}</p>

<hr>
<h4>Project 2:</h4>
<p><b>Link: </b></p>
<a href="${project2.link}">${project2.link}</a>
<p><b>Description: </b></p>
<p>${project2.desc}</p>

<hr>
<h4>Project 3:</h4>
<p><b>Link: </b></p>
<a href="${project3.link}">${project3.link}</a>
<p><b>Description: </b></p>
<p>${project3.desc}</p>
`


