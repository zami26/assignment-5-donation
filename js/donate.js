function donateNow(btnIdToDonate,amountFromInput,amountAlreadyHave){
    document.getElementById(btnIdToDonate).addEventListener('click',function(event){
        donationAmountText=document.getElementById(amountFromInput).value;
        alreadyHavingText=document.getElementById(amountAlreadyHave).innerText;
        ownedAmountText= document.getElementById("owned-amount").innerText;
        donationAmount=Number(donationAmountText);
        alreadyHaving=Number(alreadyHavingText);
        ownedAmount=Number(ownedAmountText);
        newAmount=alreadyHaving+donationAmount;
        restAmount=ownedAmount-donationAmount;
        document.getElementById("noa-having-amount").innerText=newAmount;
        document.getElementById("owned-amount").innerText=restAmount;
      })
}

donateNow("donate-noa","donating-amount","noa-having-amount");