const seats = document.querySelectorAll(".seat");
// console.log(seats);
// const prices = document.querySelectorAll(".price");
// let count =0;

// let count2 = 40;


// for (let index = 0; index < takas.length; index++) {
//     const price = takas[index];
//     taka.addEventListener("click", function(){
//         const priceBus = taka.querySelector(".per-seat");
//         // console.log(taka.innerText)

//         count = count + 1;
//         setInnerText("seat-count",count);
//         count2 = count2 -1;
//         setInnerText("40-seat",count2)
//     })
// }
for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    console.log(seat)
    seat.addEventListener("click", function (){
        console.log("clicked")
        

        // const seatName = event.target.innerText;
        // // console.log(seatName)

        const title = seat.querySelector(".bus-seat");
        // console.log(title.innerHTML);

        
            // const button = document.getElementById("myButton");
          
            // // Check if the button is not disabled
            // if (!button.disabled) {
            //   // Disable the button
            //   button.disabled = true;
          
            //   // Perform other actions if needed
          
            //   // Optionally, you can re-enable the button after a certain delay
            //   // setTimeout(() => {
            //   //   button.disabled = false;
            //   // }, 3000); // 3000 milliseconds (3 seconds) in this example
            // } else {
            //   // Perform actions if the button is already disabled
            //   console.log("Button is already disabled");
            // }
          
        
            
    })   
}
// function setInnerText(id,value){
//     document.getElementById(id).innerText =value;
// }