
document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Construct Gmail compose URL
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=charlesablanya@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message)}`;

    // Open Gmail in a new tab
    window.open(mailtoLink, "_blank");
});
