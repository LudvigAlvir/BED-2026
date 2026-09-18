/*
What to we need?
    - two input fields
    - one button
    - Give all of them ID's



What do we need to do?
    - Get the button    DONE
    - Add click functionality to button  DONE

    - Get input 1's value
    - Get input 2's value
    - Change values to numbers
    - add values together
    - display values
*/
const btn = document.querySelector("#btn-add");
btn.addEventListener("click", () => {
  const num1 = document.querySelector("#num-1").value;
  const num2 = document.querySelector("#num-2").value;
  const result = Number(num1) + Number(num2);
  console.log(result);
  // change the h2 with id "result"
  // to be the value of result

  /*
    - select the element
    - change the element
    hint: inner<SOMETHING> = "SOMETHING"
  */
  const h2 = document.querySelector("#result");
  h2.innerText = result;
});
