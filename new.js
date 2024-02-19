let count = 0;
let count2 = 40;
let totalDiscount = 0;
const clickedTickets = [];
const totalBdt = document.getElementById("BDT");
const seatInfo = document.getElementById("seat");
const classInfo = document.getElementById("class");
const ticketInfo = document.getElementById("ticketInfo");
const priceInfo = document.getElementById("price");
const tickets = document.querySelectorAll(".ticket");
const finalBdt = document.getElementById("finalBdt");

function setInnerText(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerText = text;
    }
}

function handleTicketClick() {
    const ticketId = this.id;
    if (!clickedTickets.includes(ticketId) && clickedTickets.length < 4) {
        clickedTickets.push(ticketId);
        seatInfo.innerText = `${clickedTickets.join(",")}`;
        ticketInfo.style.display = "flex";
        priceInfo.innerText = `${clickedTickets.length * 550}`;
        this.style.backgroundColor = "green";
        totalBdt.innerText = `${clickedTickets.length * 550}`;
        finalBdt.innerText = totalBdt.innerText;

        // Decrease the total number of available seats
        count2--;
        setInnerText("40-seat", count2);
        count++;
        setInnerText("seat-count", count);
    } else if (clickedTickets.includes(ticketId)) {
        const index = clickedTickets.indexOf(ticketId);
        clickedTickets.splice(index, 1);
        this.style.backgroundColor = ""; // Reset background color when unselecting

        // Increase the total number of available seats
        count2++;
        setInnerText("40-seat", count2);
        count--;
        setInnerText("seat-count", count);
    }
}

tickets.forEach((ticket) => {
    ticket.addEventListener("click", handleTicketClick);
});

const btn = document.getElementById("Apply-btn");
btn.addEventListener("click", function () {
    const couponElement = document.getElementById("discount");
    const couponCode = couponElement.value.split(" ").join("").toUpperCase();

    if (clickedTickets.length === 4) {
        let discountPercentage = 0;
        if (couponCode === "NEW15") {
            discountPercentage = 0.15;
        } else if (couponCode === "COUPLE20") {
            discountPercentage = 0.20;
        } else {
            alert("Invalid coupon code");
            return;
        }

        const discountAmount = totalBdt.innerText * discountPercentage;
        finalBdt.innerText = totalBdt.innerText - discountAmount;

        setTimeout(() => {
            alert("You got the discount, Enjoy!");
            couponElement.value = ""; // Clear the input field after the alert
        }, 100);
    } else {
        alert("Please buy 4 tickets to apply the coupon");
    }
});
