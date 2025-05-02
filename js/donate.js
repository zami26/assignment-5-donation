function donateNow(btnIdToDonate,amountFromInput,amountAlreadyHave){
    document.getElementById(btnIdToDonate).addEventListener('click',function(event){
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
        newAmount=alreadyHaving+donationAmount;
        restAmount=ownedAmount-donationAmount;
        restAmountForPhone=ownedAmountForPhone-donationAmount;
        document.getElementById(amountAlreadyHave).innerText=newAmount;
        document.getElementById("owned-amount").innerText=restAmount;
        document.getElementById("update-for-phone").innerText=restAmountForPhone;

        document.getElementById(amountFromInput).value='';
      })
}

donateNow("donate-noa","donating-amount","noa-having-amount");
donateNow("donate-feni", "donating-amount-feni", "feni-having-amount");
donateNow("donate-student", "donating-amount-student", "student-having-amount");