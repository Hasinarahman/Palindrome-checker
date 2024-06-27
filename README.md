# palindromeChecker 🚀

## Project Description 📝

> Palindrome checker project created in HTML, CSS and javaScript it can check vlaue enterd in input box is a palindrome or not.



### HTML:
```html

  <<div class="wrapper">
      <header>
        <h1>This is a Palindrome checker box</h1>
        <p>You can check everything is a palindrome or not.</p>
      </header>
      <div class="new">
        <input id="text-input" type="text" class="place" placeholder="Enter your palindrome:">
        <button id="check-btn" class="place">Check the Palindrome</button>
        <div id="result" class="box"></div>
      </div>
    </div>

```
### CSS:
```css

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: rgb(228, 26, 218);
  background-position: center;
  background-size: cover;
}

.wrapper {
  width: 500px;
  height: 230px;
  border-radius: 10px;
  padding: 20px 25px 15px;
  box-shadow: 0 0 20px rgb(3, 3, 3);
  background-color: azure;
  text-align: center;
}

```
### JS:
```javascript

checkButton.addEventListener('click', () => {
  const lowerReplaced = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (textInput.value === '') {
    alert('Please input a value');
  } else if (textInput.value.length === 1) {
    result.innerText = `${textInput.value} is a palindrome`;
  } else if (lowerReplaced === [...lowerReplaced].reverse().join('')) {
    result.innerText = `${textInput.value} is a palindrome`;
  } else {
    result.innerText = `${textInput.value} is not a palindrome`;
  }
});


```

## Demo 📸

![Demo](/images/Annotation%202024-06-21%20151053.png)

## Technologies Used 🛠️

- HTML
- CSS
- JavaScript

## Features ⭐

- Building palindrome checker.

## Author 👩‍💻


- LinkedIn: (linkedin.com/in/hasina-rahmani-4a21a9311)
- Email: (hasinarahmani548@gmail.com)
- GitHub:(https://github.com/Hasinarahman/Palindrome-checker/tree/palindrome-checker)
