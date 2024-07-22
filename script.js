// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('declarationForm');
//   const addRowButton = document.getElementById('addRowButton');
//   const itemsTable = document.getElementById('itemsTable').getElementsByTagName('tbody')[0];
//   let rowCount = 1;

//   addRowButton.addEventListener('click', () => {
//       rowCount++;
//       const row = itemsTable.insertRow();
//       row.innerHTML = `
//           <td>${rowCount}</td>
//           <td><input type="text" name="itemname${rowCount}" required></td>
//           <td><input type="date" name="issuedate${rowCount}" required></td>
//           <td><input type="date" name="returndate${rowCount}" required></td>
//           <td><input type="text" name="serialno${rowCount}" required></td>
//       `;
//   });

//   form.addEventListener('submit', (event) => {
//       event.preventDefault();
//       if (form.checkValidity()) {
//           const mailtoLink = `mailto:tih@ihubiitmandi.in?subject=Declaration Form Submission&body=${getFormData()}`;
//           window.location.href = mailtoLink;
//       } else {
//           alert('Please fill in all the required fields.');
//       }
//   });

//   function getFormData() {
//       const formData = new FormData(form);
//       let body = '';
//       formData.forEach((value, key) => {
//           body += `${key}: ${value}\n`;
//       });
//       return encodeURIComponent(body);
//   }
// });

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
          <td><input type="text" name="itemname${rowCount}" required></td>
          <td><input type="date" name="issuedate${rowCount}" required></td>
          <td><input type="date" name="returndate${rowCount}" required></td>
          <td><input type="text" name="serialno${rowCount}" required></td>
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
            const mailtoLink = `mailto:tih@ihubiitmandi.in?subject=Declaration Form Submission&body=${getFormData()}`;
            window.location.href = mailtoLink;
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
        return encodeURIComponent(body);
    }
});
