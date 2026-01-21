function sendToSheet(data) {
    fetch(CONFIG.GOOGLE_SHEET_URL, {
        method: "POST",
        body: JSON.stringify(data)
    });
}
