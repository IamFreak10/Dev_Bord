function attachDate(elementId) {
    const options = {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
    };

    const currentDate = new Date().toLocaleDateString("en-US", options);
    
    const parts = currentDate.split(", ");
    const weekday = parts[0];
    const date = parts[1];
    const year = new Date().getFullYear();

    const formattedDate = `${weekday} , <br> <strong>${date} ${year}</strong>`;
    
    document.getElementById(elementId).innerHTML = formattedDate;
}

window.onload = function () {
    attachDate("date-container");
};
