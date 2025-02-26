// Generate Calendar
document.addEventListener("DOMContentLoaded", () => {
  const calendar = document.getElementById("calendar");

  // Example events
  const events = {
    "2024-11-25": "Spartan Quiz Night",
    "2024-12-01": "End-of-Year Banquet",
    "2024-12-05": "Community Outreach",
  };

  // Create 30 days for demonstration
  for (let i = 1; i <= 30; i++) {
    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date");

    // Format date
    const currentDate = `2024-11-${i.toString().padStart(2, "0")}`;

    // Add date number
    dateDiv.innerHTML = `<strong>${i}</strong>`;

    // Check for events
    if (events[currentDate]) {
      const eventSpan = document.createElement("span");
      eventSpan.classList.add("event");
      eventSpan.textContent = events[currentDate];
      dateDiv.appendChild(eventSpan);
    }

    calendar.appendChild(dateDiv);
  }
});
