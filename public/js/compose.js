let button = document.querySelector("#submitForm");
let form = document.querySelector("#form");


button.addEventListener('click',(e)=>{
  e.preventDefault();
  let textArea = document.querySelector("textarea").value.length;

  if(textArea < 100) {
    alert("Please enter more then 100 characters to post");
  } else {
    form.submit();
  }
});