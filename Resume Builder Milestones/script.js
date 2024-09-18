var resumeForm = document.getElementById('resume');
var nameInput = document.getElementById('name');
var citycountryInput = document.getElementById('city-country');
var contactInput = document.getElementById('contact-number');
var emailInput = document.getElementById('email');
var linkedinInput = document.getElementById('linkedin');
var summaryInput = document.getElementById('summary');
var workInput = document.getElementById('work-experience');
var skillsInput = document.getElementById('skills');
var educationInput = document.getElementById('education');
var resumeOutput = document.getElementById('resume-output');
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = nameInput.value;
    var citycountry = citycountryInput.value;
    var contact = contactInput.value;
    var email = emailInput.value;
    var linkedin = linkedinInput.value;
    var summary = summaryInput.value;
    var work = workInput.value;
    var skills = skillsInput.value;
    var education = educationInput.value;
    // Generate a username for the URL
    var username = name.toLowerCase().replace(/\s+/g, '-');
    // Store the resume data locally (for demonstration)
    var resumeData = {
        name: name,
        citycountry: citycountry,
        contact: contact,
        email: email,
        linkedin: linkedin,
        summary: summary,
        work: work,
        skills: skills,
        education: education
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    var generatedResume = "\n    <html> \n    <head>\n    <title>".concat(name, "'s Resume</title>\n    \n    <style> \n    body{\n  background: beige;\n  font-family: 'Times New Roman', Times, serif;\n  color: black;\n}\n.container{\n  width: 60%;\n  margin: 0 auto;\n  background: beige;\n  padding: 20px;\n  box-shadow: 0 0 10px rgb(205, 81, 81);\n}\n\n.summary{\n  text-align: justify;\n}\n\nheader{\n  text-align: center;\n}\n\nheader h1{\n  font-size: 30px;\n}\nheader p{\n  margin: 20px 0;\n}\n\nh2{\n  font-size: 24px;\n\n}\n  button {\n  margin-top: 20px;\n margin-left: 75%;\n padding: 10px;\n  background-color: rgb(205, 81, 81);\n  color: white;\n  border-radius: 6px;\n  width: 25%;\n  cursor:grab;\n\n}\n\nbutton:hover {\n  background-color: rgb(153, 60, 60);\n}\n   \n </style>\n </head>\n <body> \n <div class=\"container\">\n <header> \n\n        <h1 contenteditable=\"true\"> ").concat(name, " </h1>\n        <strong>\n        <p contenteditable=\"true\"> ~ ").concat(citycountry, "\t~ ").concat(contact, "\t~ ").concat(email, " </p>\n        <p> <a href=\"").concat(linkedin, "\" target=\"_blank\" contenteditable=\"true\"> https://www.linkedin.com/in/").concat(name, " </a>\n        </a> </p> </strong>\n        </header>\n        <hr>\n        \n         <p contenteditable=\"true\">").concat(summary, "</p>\n         \n          <hr>\n          <h2>Work Experience</h2>\n          <ul contenteditable=\"true\">\n         \n          ").concat(work.replace(/\n/g, '<br>'), "\n       \n            </ul>\n\n            <hr>\n\n        <h2> Relevent Skills </h2>\n        <ul contenteditable=\"true\">\n         ").concat(skills.replace(/\n/g, '<br>'), "\n        </ul>\n        <hr>\n\n         <h2>Education</h2>\n      <ul contenteditable=\"true\">\n      \n      ").concat(education.replace(/\n/g, '<br>'), "\n        \n      </ul>\n       </div>\n\n\n      <button id=\"download-pdf\">Download PDF</button>\n    <button id=\"copy-link\">Copy Shareable Link</button>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js\"></script>\n    <script>\n        document.getElementById('download-pdf').addEventListener('click', function() {\n            const element = document.querySelector('.container');\n            const opt = {\n                margin: 0.5,\n                filename: '").concat(name, " Resume.pdf',\n                image: { type: 'jpeg', quality: 0.98 },\n                html2canvas: { scale: 2 },\n                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }\n            };\n            html2pdf().from(element).set(opt).save();\n        });\n\n        document.getElementById('copy-link').addEventListener('click', function() {\n           \n            const username = '").concat(name.toLowerCase().replace(/\s+/g, '-'), "' \n            const shareableLink = `https://resumebuilder.vercel.app/${username}/resume`;\n            navigator.clipboard.writeText(shareableLink).then(() => {\n                alert('Shareable link copied to clipboard!');\n            }).catch(err => {\n                console.error('Failed to copy link: ', err);\n            });\n        });\n       \n      </script>\n       </body>\n    </html>\n            \n");
    var blob = new Blob([generatedResume], { type: 'text/html' });
    var url = URL.createObjectURL(blob);
    // For open the resume in a new tab:
    var a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.click();
});
