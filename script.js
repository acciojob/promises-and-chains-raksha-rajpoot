//your JS code here. If required.
 document.getElementById("userForm").addEventListener("submit", function(event) {
      event.preventDefault(); 

      const name = document.getElementById("name").value.trim();
      const age = document.getElementById("age").value.trim();

      
      if (name === "" || age === "") {
        alert("Please enter valid details.");
        return;
      }

      const ageNumber = parseInt(age);

      const checkEligibility = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (ageNumber > 18) {
            resolve();
          } else {
            reject();
          }
        }, 4000);
      });

      checkEligibility
        .then(() => {
          alert(`Welcome, ${name}. You can vote.`);
        })
        .catch(() => {
          alert(`Oh sorry ${name}. You aren't old enough.`);
        });
    });