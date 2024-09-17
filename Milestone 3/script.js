"use strict";
const resumeForm = document.getElementById('resume');
const nameInput = document.getElementById('name');
const citycountryInput = document.getElementById('city-country');
const contactInput = document.getElementById('contact-number');
const emailInput = document.getElementById('email');
const linkedinInput = document.getElementById('linkedin');
const summaryInput = document.getElementById('summary');
const workInput = document.getElementById('work-experience');
const skillsInput = document.getElementById('skills');
const educationInput = document.getElementById('education');
const resumeOutput = document.getElementById('resume-output');
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = nameInput.value;
    const citycountry = citycountryInput.value;
    const contact = contactInput.value;
    const email = emailInput.value;
    const linkedin = linkedinInput.value;
    const summary = summaryInput.value;
    const work = workInput.value;
    const skills = skillsInput.value;
    const education = educationInput.value;
    const generatedResume = `
    <html> 
    <head>
    <title>${name}'s Resume</title>
    
    <style> 
    body{
  background: beige;
  font-family: 'Times New Roman', Times, serif;
  color: black;
}
.container{
  width: 60%;
  margin: 0 auto;
  background: beige;
  padding: 20px;
  box-shadow: 0 0 10px rgb(205, 81, 81);
}

.summary{
  text-align: justify;
}

header{
  text-align: center;
}

header h1{
  font-size: 30px;
}
header p{
  margin: 20px 0;
}

h2{
  font-size: 24px;

}
  button {
 margin-left: 75%;
 padding: 10px;
  background-color: rgb(205, 81, 81);
  color: white;
  border-radius: 6px;
  width: 25%;
  cursor:grab;

}

button:hover {
  background-color: rgb(153, 60, 60);
}
   
 </style>
 </head>
 <body> 
 <div class="container">
 <header> 

        <h1> ${name} </h1>
        <strong>
        <p> ~ ${citycountry}\t~ ${contact}\t~ ${email} </p>
        <p> <a href="${linkedin}" target="_blank"> https://www.linkedin.com/in/${name} </a>
        </a> </p> </strong>
        </header>
        <hr>
        
         <p>${summary}</p>
         
          <hr>
          <h2>Work Experience</h2>
          <ul>
         
          ${work.replace(/\n/g, '<br>')}
       
            </ul>

            <hr>

        <h2> Relevent Skills </h2>
        <ul>
         ${skills.replace(/\n/g, '<br>')}
        </ul>
        <hr>

         <h2>Education</h2>
      <ul>
      
      ${education.replace(/\n/g, '<br>')}
        
      </ul>
       </div>


      <button id="download-pdf">Download PDF</button>
     
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>
      <script>
        document.getElementById('download-pdf').addEventListener('click', function() {
          const element = document.querySelector('.container');
          const opt = {
            margin:       0.5,
            filename:     '${name} Resume.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
          };
          html2pdf().from(element).set(opt).save();
        });
      </script>
       </body>
    </html>
            
`;
    const blob = new Blob([generatedResume], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    // For open the resume in a new tab:
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.click();
});
