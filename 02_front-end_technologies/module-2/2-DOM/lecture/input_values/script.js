/*
Select/get the button   DONE
Add that something happens when button is clicked    DONE
Get/select input element    DONE
Get the value inside the input  DONE
Display the value in the console    DONE
*/

const btn = document.getElementById("btn-1");
btn.onclick = () => {
  const input = document.getElementById("input-1");
  console.log(input.value);
};
