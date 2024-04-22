export function formatDate(dateString) {
    const months = [
      "Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.",
      "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."
    ];
  
    const dateParts = dateString.split("-");
    const year = dateParts[0].substring(2);
    const monthIndex = parseInt(dateParts[1]) - 1; // Month index starts from 0
    const day = parseInt(dateParts[2]);
  
    const month = months[monthIndex];
  
    // Adding "st", "nd", "rd", or "th" to the day
    let daySuffix;
    if (day === 1 || day === 21 || day === 31) {
      daySuffix = "st";
    } else if (day === 2 || day === 22) {
      daySuffix = "nd";
    } else if (day === 3 || day === 23) {
      daySuffix = "rd";
    } else {
      daySuffix = "th";
    }
  
    return `${month} ${day}${daySuffix}, ${year}`;
  }