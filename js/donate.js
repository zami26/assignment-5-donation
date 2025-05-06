function donateNow(btnIdToDonate,amountFromInput,amountAlreadyHave,reason){
    document.getElementById(btnIdToDonate).addEventListener('click',function(){
        donationAmountText=document.getElementById(amountFromInput).value;
        alreadyHavingText=document.getElementById(amountAlreadyHave).innerText;
        ownedAmountText= document.getElementById("owned-amount").innerText;
        ownedAmountForPhoneText= document.getElementById("update-for-phone").innerText;
        // console.log(donationAmountText);
                       
        donationAmount=Number(donationAmountText);
        alreadyHaving=Number(alreadyHavingText);
        ownedAmount=Number(ownedAmountText);
        ownedAmountForPhone=Number(ownedAmountForPhoneText);
        // console.log(donationAmount,alreadyHaving,ownedAmount,ownedAmountForPhone);
        if (isNaN(donationAmount) || donationAmount==" ") {
            alert('Enter a valid amount');
            return;
        } else if (donationAmount > ownedAmount) {
            alert("Not enough amount");
            return;
        } else {
            document.getElementById('my_modal_2').showModal();
        }
        
        newAmount=alreadyHaving+donationAmount;
        restAmount=ownedAmount-donationAmount;
        restAmountForPhone=ownedAmountForPhone-donationAmount;
        document.getElementById(amountAlreadyHave).innerText=newAmount;
        document.getElementById("owned-amount").innerText=restAmount;
        document.getElementById("update-for-phone").innerText=restAmountForPhone;

        occar=document.getElementById(reason).innerText;
// adding history
        const newDiv=document.createElement("div");
        newDiv.classList="border  border-gray-300 px-6 py-5 rounded mb-5 font-bold";

        const p = document.createElement("p");
        p.innerText = `${donationAmount} Taka is Donated for ${occar}`;
        const p2=document.createElement("p");
        p2.innerText = `Date: ${new Date().toString()}`;
        newDiv.appendChild(p);
        newDiv.appendChild(p2);
    
        document.getElementById("history-details").appendChild(newDiv);

        document.getElementById(amountFromInput).value='';
      })
}

donateNow("donate-noa","donating-amount","noa-having-amount", "first");
donateNow("donate-feni", "donating-amount-feni", "feni-having-amount","second");
donateNow("donate-student", "donating-amount-student", "student-having-amount","third");


document.getElementById("history").addEventListener('click',function(){
    document.getElementById("cart-sec").classList.add("hidden");
    document.getElementById("history").classList.add("btn-color-active");
    document.getElementById("donation").classList.remove("btn-color-active");
    document.getElementById("history-sec").classList.remove("hidden");
})
document.getElementById("donation").addEventListener('click',function(){
    document.getElementById("cart-sec").classList.remove("hidden");
    document.getElementById("history").classList.remove("btn-color-active");
    document.getElementById("donation").classList.add("btn-color-active");
    document.getElementById("history-sec").classList.add("hidden");

})


// const currentPage = window.location.pathname;
// if (currentPage.includes("blog.html")) {
//     document.getElementById("blog-btn").classList.add("btn-color-active");
//   } else if (currentPage.includes("index.html") || currentPage === "/") {
//     document.getElementById("blog-btn").classList.remove("btn-color-active");
//   }