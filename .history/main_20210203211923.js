let individualFormBtn = document.getElementById('individual-form-btn');
let individualForm = document.getElementById('individual-form');
let companyFormBtn = document.getElementById('company-form-btn');
let companyForm = document.getElementById('company-form');

if (companyForm.style.display !== "none"){
    individualForm.style.display = "none";
    companyFormBtn.classList.remove
}

individualFormBtn.addEventListener("click", function() {
    if (individualForm.style.display === "none"){
        companyForm.style.display = "none";
        individualForm.style.display = "block";
    } else {
        companyForm.style.display = "block";
        individualForm.style.display = "none";
        
    }
});
companyFormBtn.addEventListener("click", function() {
    if (individualForm.style.display !== "none"){
        individualForm.style.display = "none";
        companyForm.style.display = "block";
       
    } 
});