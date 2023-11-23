// script.js
function validatePhoneNumber() {
    var phoneNumber = document.getElementById("phone").value;

    if (phoneNumber.length !== 10) {
        alert("Please Provide Correct Phone Number.");
        document.getElementById("phone").value = "";
    } else {
        var percentage = document.getElementById("percentage").value;

        if (percentage > 90) {
            document.getElementById("topClass").value = "True";
            alert("Notification on Your Mail");
            sendEmail();
        } else if (percentage >= 70 && percentage <= 90) {
            createSelectedStudentForm();
        }
    }
}

function sendEmail() {
    var studentName = document.getElementById("name").value;
    var registeredDate = new Date(); 
    var interviewDate = new Date(registeredDate.setDate(registeredDate.getDate() + 3));

    var emailContent = "Thanks for your Registration. Your Interview will be scheduled on " + interviewDate.toDateString();
    console.log(emailContent);
}

