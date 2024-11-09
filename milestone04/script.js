var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    var _a, _b, _c, _d, _e, _f;
    e.preventDefault();
    // Get form elements by their IDs
    var nameInput = document.getElementById("name");
    var phoneInput = document.getElementById("phone");
    var emailInput = document.getElementById("email");
    var linkedinInput = document.getElementById("linkedin");
    var objectiveInput = document.getElementById("objective");
    var certificationInput = document.getElementById("certification");
    var educationInput = document.getElementById("education");
    var experienceInput = document.getElementById("experience");
    var skillsInput = document.getElementById("skills");
    // Update the displayed text content with form input values
    var nameText = document.getElementById("nameText");
    var phoneText = document.getElementById("phoneText");
    var emailText = document.getElementById("emailText");
    var linkedinText = document.getElementById("linkedinText");
    var objectiveText = document.getElementById("objectiveText");
    var certificationText = document.getElementById("certificationText");
    var educationText = document.getElementById("educationText");
    var experienceText = document.getElementById("experienceText");
    var skillsList = document.getElementById("skillsList");
    // Set the values to the corresponding text elements
    nameText.textContent = nameInput.value;
    phoneText.textContent = phoneInput.value;
    emailText.innerHTML = "<a href=\"mailto:".concat(emailInput.value, "\">").concat(emailInput.value, "</a>");
    linkedinText.innerHTML = "<a href=\"".concat(linkedinInput.value, "\" target=\"_blank\">").concat(linkedinInput.value, "</a>");
    objectiveText.textContent = objectiveInput.value;
    certificationText.textContent = certificationInput.value;
    educationText.textContent = educationInput.value;
    experienceText.textContent = experienceInput.value;
    // Populate skills list
    var skillsArray = skillsInput.value.split(",");
    skillsList.innerHTML = ""; // Clear previous skills
    skillsArray.forEach(function (skill) {
        var li = document.createElement("li");
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
    // Attach Edit button handlers
    (_a = document.getElementById("editPersonalInfo")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        toggleEditSection("personalInfo", nameText, phoneText, emailText, linkedinText);
    });
    (_b = document.getElementById("editObjective")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        toggleEditSection("objective", objectiveText);
    });
    (_c = document.getElementById("editCertification")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
        toggleEditSection("certification", certificationText);
    });
    (_d = document.getElementById("editEducation")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
        toggleEditSection("education", educationText);
    });
    (_e = document.getElementById("editSkills")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
        toggleEditSection("skills", skillsList);
    });
    (_f = document.getElementById("editExperience")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function () {
        toggleEditSection("experience", experienceText);
    });
});
// Function to toggle edit mode
function toggleEditSection(section) {
    var textElements = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        textElements[_i - 1] = arguments[_i];
    }
    textElements.forEach(function (textElement) {
        // Get the current text content
        var currentText = textElement.textContent || "";
        var inputElement = document.createElement("textarea");
        inputElement.value = currentText;
        inputElement.classList.add("editable");
        // Clear the section and add the input element
        textElement.innerHTML = "";
        textElement.appendChild(inputElement);
        // Create a Save button
        var saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.classList.add("save-button");
        textElement.appendChild(saveButton);
        // Handle save button click
        saveButton.addEventListener("click", function () {
            // Save the changes back to the resume section
            textElement.innerHTML = inputElement.value;
            // Optionally, you can store the updated values back in the form or send it to the backend
        });
    });
}
