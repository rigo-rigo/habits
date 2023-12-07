function submitForm() {
  const form = document.getElementById('habitForm');
  const formData = new FormData(form);
  
  // Convert FormData to a plain object
  const habits = {};
  formData.forEach((value, key) => {
      habits[key] = value;
  });

  // Send habits data to the server (AJAX can be used here)
  sendToServer(habits);
}

function sendToServer(habits) {
  // You'll implement AJAX to send habits data to the server here
  console.log(habits);
}
