const billAmount = document.querySelector('#amount_input');
const givenAmount= document.querySelector('#amount-paid-input');
const checkButton= document.querySelector('#btn-enter');
const noOfNote= document.querySelectorAll('#number_of_notes');
const NotesArray= [2000, 500, 100, 20, 10, 5, 1];

billAmount.addEventListener('focusout', () => {
    if(billAmount.value!==""){
        message.style.display="none";
        if (billAmount.value === 0){
            showError("invalid input...")
        }else {
            givenAmount.style.visibility="visible";
            lableofgivenamount.style.visibility="visible";
        }
        givenAmount.addEventListener('focusout', () =>{
            if(givenAmount.value!==""){
                message.style.display="none";
                checkButton.style.visibility="visible";
            }else{
                showError("Please! Enter the valid amount")
            }
        })
    }else{
        showError("Please! Enter the valid amount")
    }
})

checkButton.addEventListener("click", function checking(){
    cashtable.style.visibility="hidden";
    message.style.display="none";
    if (Number(givenAmount.value) >= Number(billAmount.value) ){
        const balance=Number(givenAmount.value)- Number(billAmount.value)
        mainCalculation(balance);
    }else{
        showError("Ask for more money");
    }    
});
function showError(msgError) {
    message.style.display="block";
    message.innerText=msgError;
}
function mainCalculation(balanceAmount) {
    tableContainer.style.visibility="visible";
    cashtable.style.visibility="visible";
    for (let arrayValue=0;arrayValue < NotesArray.length;arrayValue++){
        const numberOfNotes= Math.trunc(balanceAmount / NotesArray[arrayValue]);
        balanceAmount=balanceAmount % NotesArray[arrayValue];
        noOfNote[arrayValue].innerText= numberOfNotes;
    }
};