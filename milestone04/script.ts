document.getElementById("resumeForm")?.addEventListener("submit", function (e: Event): void {
    e.preventDefault();

    // Get form elements by their IDs
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const phoneInput = document.getElementById("phone") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const linkedinInput = document.getElementById("linkedin") as HTMLInputElement;
    const objectiveInput = document.getElementById("objective") as HTMLTextAreaElement;
    const certificationInput = document.getElementById("certification") as HTMLTextAreaElement;
    const educationInput = document.getElementById("education") as HTMLTextAreaElement;
    const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
    const skillsInput = document.getElementById("skills") as HTMLInputElement;

    // Update the displayed text content with form input values
    const nameText = document.getElementById("nameText") as HTMLElement;
    const phoneText = document.getElementById("phoneText") as HTMLElement;
    const emailText = document.getElementById("emailText") as HTMLElement;
    const linkedinText = document.getElementById("linkedinText") as HTMLElement;
    const objectiveText = document.getElementById("objectiveText") as HTMLElement;
    const certificationText = document.getElementById("certificationText") as HTMLElement;
    const educationText = document.getElementById("educationText") as HTMLElement;
    const experienceText = document.getElementById("experienceText") as HTMLElement;
    const skillsList = document.getElementById("skillsList") as HTMLElement;

    // Set the values to the corresponding text elements
    nameText.textContent = nameInput.value;
    phoneText.textContent = phoneInput.value;
    emailText.innerHTML = `<a href="mailto:${emailInput.value}">${emailInput.value}</a>`;
    linkedinText.innerHTML = `<a href="${linkedinInput.value}" target="_blank">${linkedinInput.value}</a>`;
    objectiveText.textContent = objectiveInput.value;
    certificationText.textContent = certificationInput.value;
    educationText.textContent = educationInput.value;
    experienceText.textContent = experienceInput.value;

    // Populate skills list
    const skillsArray: string[] = skillsInput.value.split(",");
    skillsList.innerHTML = ""; // Clear previous skills
    skillsArray.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });

    // Attach Edit button handlers
    document.getElementById("editPersonalInfo")?.addEventListener("click", function (): void {
        toggleEditSection("personalInfo", nameText, phoneText, emailText, linkedinText);
    });
    document.getElementById("editObjective")?.addEventListener("click", function (): void {
        toggleEditSection("objective", objectiveText);
    });
    document.getElementById("editCertification")?.addEventListener("click", function (): void {
        toggleEditSection("certification", certificationText);
    });
    document.getElementById("editEducation")?.addEventListener("click", function (): void {
        toggleEditSection("education", educationText);
    });
    document.getElementById("editSkills")?.addEventListener("click", function (): void {
        toggleEditSection("skills", skillsList);
    });
    document.getElementById("editExperience")?.addEventListener("click", function (): void {
        toggleEditSection("experience", experienceText);
    });
});

// Function to toggle edit mode
function toggleEditSection(section: string, ...textElements: HTMLElement[]): void {
    textElements.forEach(textElement => {
        // Get the current text content
        const currentText = textElement.textContent || "";
        const inputElement = document.createElement("textarea");
        inputElement.value = currentText;
        inputElement.classList.add("editable");

        // Clear the section and add the input element
        textElement.innerHTML = "";
        textElement.appendChild(inputElement);

        // Create a Save button
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.classList.add("save-button");
        textElement.appendChild(saveButton);

        // Handle save button click
        saveButton.addEventListener("click", function (): void {
            // Save the changes back to the resume section
            textElement.innerHTML = inputElement.value;
            // Optionally, you can store the updated values back in the form or send it to the backend
        });
    });
}
