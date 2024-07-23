document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("declarationForm");
    const addRowButton = document.getElementById("addRowButton");
    const itemsTable = document
        .getElementById("itemsTable")
        .getElementsByTagName("tbody")[0];
    let rowCount = 1;

    addRowButton.addEventListener("click", () => {
        rowCount++;
        const row = itemsTable.insertRow();
        row.innerHTML = `
          <td>${rowCount}</td>
          <td><input type="text" name="Item Name of Row ${rowCount}" required></td>
          <td><input type="date" name="Issue Date of Row ${rowCount}" required></td>
          <td><input type="date" name="Return Date of Row${rowCount}" required></td>
          <td><input type="text" name="Having Serial Number ${rowCount}" required></td>
          <td><button type="button" class="deleteRowButton">Delete</button></td>
      `;
        // Add event listener for delete button in the new row
        const deleteButton = row.querySelector(".deleteRowButton");
        deleteButton.addEventListener("click", () => {
            row.remove();
        });
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (form.checkValidity()) {
            // const mainEmail = "tih@ihubiitmandi.in";
            const additionalEmail = "pooja@ihubiitmandi.in";
            //const mainEmail = "gm2623@cse.jgec.ac.in";
            //const additionalEmail = "pooja@ihubiitmandi.in";
            const subject = "ANT Neuro EEG Device User Application Form";
            const initial_string = "Applicant's Details\n\n";
            const body = initial_string + getFormData();

            const mailtoLink = `mailto:${additionalEmail}?subject=${encodeURIComponent(
                subject
            )}&body=${encodeURIComponent(body)}`;

            window.location.href = mailtoLink;

            // Display confirmation message
            document.getElementById("confirmationMessage").style.display =
                "block";
        } else {
            alert("Please fill in all the required fields.");
        }
    });

    function getFormData() {
        const formData = new FormData(form);
        let body = "";
        formData.forEach((value, key) => {
            body += `${key}: ${value}\n`;
        });
        return body;
    }
});
