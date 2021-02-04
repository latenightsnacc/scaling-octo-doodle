let individualFormBtn = document.getElementById('individual-form-btn');
let individualForm = document.getElementById('individual-form');
let companyFormBtn = document.getElementById('company-form-btn');
let companyForm = document.getElementById('company-form');

if (companyForm.style.display !== "none"){
    individualForm.style.display = "none";
    individualFormBtn.classList.remove('shadow-lg', 'bg-green-500', 'text-white');
    individualFormBtn.classList.add('bg-white', 'text-gray-700');
} 

individualFormBtn.addEventListener("click", function() {
    if (individualForm.style.display === "none"){
        companyForm.style.display = "none";
        individualForm.style.display = "block";
        individualFormBtn.classList.remove('bg-white', 'text-gray-700');
    individualFormBtn.classList.add('shadow-lg', 'bg-green-500', 'text-white');
    companyFormBtn.classList.remove('shadow-lg', 'bg-green-500', 'text-white');
    companyFormBtn.classList.add('bg-white', 'text-gray-700');
    
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