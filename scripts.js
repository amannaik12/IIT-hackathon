// JavaScript for Placement Platform

// Admin Section Logic
document.getElementById('college-setup').addEventListener('submit', function(event) {
    event.preventDefault();
    const logo = document.getElementById('college-logo').files[0];
    const color = document.getElementById('branding-color').value;
    const policy = document.getElementById('placement-policy').value;
    console.log("Admin Settings:", { logo, color, policy });
    alert("College setup saved successfully!");
});

// Student Profile Management
document.querySelector('#profile-management form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const resume = document.getElementById('resume').files[0];
    console.log("Student Profile:", { name, email, resume });
    alert("Profile updated successfully!");
});

//Saving Student Profile
const saveProfile = () => {
    const profileData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        resume: document.getElementById('resume').value
    };

    fetch('http://127.0.0.1:5000/api/students/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
};


// Job Applications
const jobButtons = document.querySelectorAll('#job-applications button');
jobButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        console.log(`Applied to Job ${index + 1}`);
        alert(`You have applied to Job ${index + 1}`);
    });
});

//Fetch Job Listings
const fetchJobs = () => {
    fetch('http://127.0.0.1:5000/api/students/jobs')
        .then(response => response.json())
        .then(jobs => {
            console.log(jobs);
            // Dynamically display jobs in the frontend
        })
        .catch(error => {
            console.error('Error:', error);
        });
};


// Recruiter Job Posting
document.querySelector('#job-posting form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('job-title').value;
    const description = document.getElementById('job-description').value;
    console.log("New Job Posting:", { title, description });
    alert("Job posted successfully!");
});

// Applicant Management
const applicantButtons = document.querySelectorAll('#applicant-management button');
applicantButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const action = button.textContent;
        console.log(`Applicant ${index + 1}: ${action}`);
        alert(`Applicant ${index + 1} has been ${action.toLowerCase()}ed.`);
    });
});
