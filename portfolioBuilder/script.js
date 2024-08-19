const form = document.getElementById('portfolio-form');
const portfolioOutput = document.getElementById('portfolio-output');
const portfolioContent = document.getElementById('portfolio-content');
const edubutton = document.getElementById('edubutton');
const eduForm = document.getElementById('eduForm');
const edusubmit = document.getElementById('eduSubmit');
let formid = 0;

edubutton.addEventListener('click', (event) => {
    event.preventDefault();
    formid = formid + 1;
    const form = document.createElement('div')
    form.innerHTML = `
    <div id="divform${formid}">
        <h4>Education</h4>
        <form id="form${formid}">
        <label for="eduInstitute${formid}">Institute ${formid}:</label>
        <input type="text" id="eduInstitute${formid}" required>

        <label for="eduDegree${formid}">Degree${formid}:</label>
        <input type="text" id="eduDegree${formid}" required>

        <label for="eduInMonth${formid}">Start-Date</label>
        <input type="month" id='eduInMonth${formid}'>

        <label for="eduOutMonth${formid}">End-Date</label>
        <input type="month" id='eduOutMonth${formid}'>
        </form>
    </div>`

    eduForm.append(form)
})


// edusubmit.addEventListener('click', (e) => {
//     e.preventDefault()
//     let institute = document.getElementById("eduInstitute").value
//     console.log(institute)
// })
// console.log(eduinstitute)

function getEducation() {
    const educationData = {}
    for (let i = 1; i <= formid; i++) {
        const form = document.getElementById(`divform${i}`)

        if (form) {
            educationData[`Degree${i}`] = {
                degree: document.getElementById(`eduDegree${i}`).value,
                institute: document.getElementById(`eduInstitute${i}`).value,
                from: document.getElementById(`eduInMonth${i}`).value,
                to: document.getElementById(`eduOutMonth${i}`).value
            }
        }
    }
    return educationData;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const photo = document.getElementById('dp').value;
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const bio = document.getElementById('bio').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const github = document.getElementById('github').value;
    const linkedin = document.getElementById('linkedin').value;
    const email = document.getElementById('mail').value;
    const techskills = document.getElementById('technical').value.split(',');
    const softskills = document.getElementById('softskill').value.split(',');
    const proj1link = document.getElementById('pro1link').value;
    const proj1desc = document.getElementById('pro1desc').value;
    const proj2link = document.getElementById('pro2link').value;
    const proj2desc = document.getElementById('pro2desc').value;
    const proj3link = document.getElementById('pro3link').value;
    const proj3desc = document.getElementById('pro3desc').value;
    const educationdata = getEducation();

    let obj = {
        photo: photo,
        name: name,
        title: title,
        bio: bio,
        phone: phone,
        address: address,
        github: github,
        linkedin: linkedin,
        email: email,
        techskill: techskills,
        softskill: softskills,
        project1: {
            link: proj1link,
            desc: proj1desc
        },
        project2: {
            link: proj2link,
            desc: proj2desc
        },
        project3: {
            link: proj3link,
            desc: proj3desc
        },
        educationData: educationdata
    }

    localStorage.setItem("data", (JSON.stringify(obj)))
    form.reset();
    window.location.href = './portfolio.html'
    // portfolioOutput.style.display = 'block';
});

