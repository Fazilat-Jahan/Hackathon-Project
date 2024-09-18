const resumeForm = document.getElementById('resume') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const citycountryInput = document.getElementById('city-country') as HTMLInputElement;
const contactInput = document.getElementById('contact-number') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const linkedinInput = document.getElementById('linkedin') as HTMLInputElement;
const summaryInput = document.getElementById('summary') as HTMLTextAreaElement;
const workInput = document.getElementById('work-experience') as HTMLTextAreaElement
const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
const educationInput = document.getElementById('education') as HTMLTextAreaElement;
const resumeOutput = document.getElementById('resume-output') as HTMLElement;

resumeForm.addEventListener('submit', function (event: Event) {
  event.preventDefault();


  const name: string = nameInput.value;
  const citycountry: string = citycountryInput.value;
  const contact: string = contactInput.value;
  const email: string = emailInput.value;
  const linkedin: string = linkedinInput.value;
  const summary: string = summaryInput.value;
  const work: string = workInput.value;
  const skills: string = skillsInput.value;
  const education: string = educationInput.value;

 // Generate a username for the URL
 const username = name.toLowerCase().replace(/\s+/g, '-');

 // Store the resume data locally (for demonstration)
 const resumeData = {
     name, citycountry, contact, email, linkedin, summary, work, skills, education
 };
 localStorage.setItem(username, JSON.stringify(resumeData));

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
  margin-top: 20px;
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

        <h1 contenteditable="true"> ${name} </h1>
        <strong>
        <p contenteditable="true"> ~ ${citycountry}\t~ ${contact}\t~ ${email} </p>
        <p> <a href="${linkedin}" target="_blank" contenteditable="true"> https://www.linkedin.com/in/${name} </a>
        </a> </p> </strong>
        </header>
        <hr>
        
         <p contenteditable="true">${summary}</p>
         
          <hr>
          <h2>Work Experience</h2>
          <ul contenteditable="true">
         
          ${work.replace(/\n/g, '<br>')}
       
            </ul>

            <hr>

        <h2> Relevent Skills </h2>
        <ul contenteditable="true">
         ${skills.replace(/\n/g, '<br>')}
        </ul>
        <hr>

         <h2>Education</h2>
      <ul contenteditable="true">
      
      ${education.replace(/\n/g, '<br>')}
        
      </ul>
       </div>


      <button id="download-pdf">Download PDF</button>
    <button id="copy-link">Copy Shareable Link</button>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>
    <script>
        document.getElementById('download-pdf').addEventListener('click', function() {
            const element = document.querySelector('.container');
            const opt = {
                margin: 0.5,
                filename: '${name} Resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(element).set(opt).save();
        });

        document.getElementById('copy-link').addEventListener('click', function() {
           
            const username = '${name.toLowerCase().replace(/\s+/g, '-')}' 
            const shareableLink = \`https://resumebuilder.vercel.app/\${username}/resume\`;
            navigator.clipboard.writeText(shareableLink).then(() => {
                alert('Shareable link copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy link: ', err);
            });
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