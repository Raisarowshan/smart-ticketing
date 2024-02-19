let count =0;
let count2 =40;


let totalDiscount = 0;
const clickedTickets = [];
const totalBdt = document.getElementById("BDT")
const seatInfo = document.getElementById("seat");
const classInfo =document.getElementById("class");
const ticketInfo = document.getElementById("ticketInfo");
const priceInfo =document.getElementById("price");
const tickets =document.querySelectorAll(".ticket");
let finalBdt = document.getElementById("finalBdt")

function handleTicketClick(){
const ticketId = this.id
    if(!clickedTickets.includes(ticketId)){
        if(clickedTickets.length < 4) {
            // console.log(this.innerText);
            clickedTickets.push(ticketId);
            seatInfo.innerText = `${clickedTickets.join(',')}`;
            ticketInfo.style.display ="flex"
            priceInfo.innerText = `${clickedTickets.length*550}`
            this.style.backgroundColor = "green";
            totalBdt.innerText=`${clickedTickets.length*550}`;
            finalBdt.innerText=totalBdt.innerText;
            

        } else{
            const index = clickedTickets.indexOf(ticketId);
            clickedTickets.splice(index, 1);

        }
        //     else{
        //     console.log("can choose only 4 ticktes");
        // } 
       
       
    }else{
        console.log("already choosen")
    }
}
 tickets.forEach(ticket=>{
    ticket.addEventListener("click",handleTicketClick);
        // console.log(ticket.innerHTML);
    })
    const totatTicket = 0;
const btn = document.getElementById("Apply-btn");
btn.addEventListener("click",function(){

    const couponElement = document.getElementById("discount").value;
  const couponCode = couponElement.split(" ").join("").toUpperCase();
//   console.log(couponCode);
//    if(totatTicket === 4){
// if(couponCode ==="NEW15"){
//     let finalBdt = document.getElementById("finalBdt")
//     const discountAmount = finalBdt-.15;
//     finalBdt.innerText = discountAmount;
//     console.log(discountAmount)

// const restTotal = document.getElementById("finalBdt");
// restTotal.innerText = totalBdt.innerText  * 0.15;
// }else{
//     alert("invalid coupon");
// }
//    }else{
//     alert("please buy 4 ticket");
//    }
})
    