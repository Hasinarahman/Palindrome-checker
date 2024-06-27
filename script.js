const textInput = document.getElementById("text-input");

const checkButton = document.getElementById("check-btn");

const result = document.getElementById("result");

checkButton.addEventListener('click', () => {
   if (textInput.value === '') {
    return window.alert("Please input a value");
  } else if (textInput.value.length === 1) {
result.innerText = `${textInput.value} is a palindrome`
  }  else if (textInput.value === [...textInput.value].reverse().join("")){
    result.innerText = `${textInput.value} is a palindrome`
  }
})


