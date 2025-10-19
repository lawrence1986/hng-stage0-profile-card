# hng-stage0-profile-card

🎯 HNG Stage 0 — Profile Card Task
👋 Introduction

This project is a Profile Card Component built as part of Stage 0 of the HNG Learn Program.
It demonstrates semantic, accessible, and responsive web design using plain HTML, CSS, and Vanilla JavaScript — no frameworks.

🧱 Features

✅ Semantic HTML5 elements (<article>, <header>, <figure>, <nav>, <section>)
✅ Accessible markup (alt text, focusable links, ARIA labels)
✅ Responsive design for mobile, tablet, and desktop
✅ Current time displayed dynamically in milliseconds (Date.now())
✅ All required data-testid attributes included
✅ Keyboard navigation for links
✅ Avatar photo included

🧑🏽‍💻 Developer Info

Name: Lawrence Maduabuchi
Role: Software Engineer & ICT Consultant
Location: Port Harcourt, Rivers State, Nigeria

📸 Preview

⚙️ Tech Stack

HTML5

CSS3 (Flexbox for responsiveness)

Vanilla JavaScript

🚀 Live Demo

🔗 Live URL: https://your-netlify-link.netlify.app

🔗 GitHub Repo: https://github.com/yourusername/hng-stage0-profile-card

Replace the above URLs with your actual hosted and repository links before submission.

🧩 Project Structure
/profile-card
│
├── index.html
├── style.css
├── script.js
├── lawreal.png
└── README.md

🧠 Implementation Details
HTML

All elements include the required data-testid attributes for automated testing.
Example:

<h2 data-testid="test-user-name">Lawrence Maduabuchi</h2>

JavaScript

Displays the current time in milliseconds:

function updateTime() {
  document.getElementById("current-time").textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);

CSS

Flexbox used for responsive layout

Scales smoothly from mobile to desktop

Includes hover and focus styles for accessibility

🧪 How to Run Locally

Clone the repository

git clone https://github.com/yourusername/hng-stage0-profile-card.git


Navigate into the project folder

cd hng-stage0-profile-card


Open the project

open index.html


or double-click index.html in your file explorer.

✅ Acceptance Criteria Checklist
Requirement	Status
All data-testid attributes present	✅
Semantic HTML used	✅
Current time shows Date.now() value	✅
Avatar renders correctly	✅
Social links open in new tab	✅
Distinct hobbies and dislikes lists	✅
Keyboard navigation works	✅
Layout is responsive	✅
