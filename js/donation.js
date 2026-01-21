document.getElementById("razorpayBtn").onclick = function () {

    const name = document.getElementById("donorName").value;
    const amount = document.getElementById("amount").value;
    const agent = document.getElementById("agentToken").value || "N/A";

    if (!name || !amount) {
        alert("Name and amount required");
        return;
    }

    const options = {
        key: CONFIG.RAZORPAY_KEY,
        amount: amount * 100,
        currency: "INR",
        name: "Drongo Foundation",
        handler: function (response) {

            sendToSheet({
                name: name,
                receipt: response.razorpay_payment_id,
                agent: agent,
                amount: amount,
                mode: "Razorpay"
            });

            alert("Donation successful. Thank you.");
        }
    };

    const rzp = new Razorpay(options);
    rzp.open();
};
