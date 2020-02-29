var x = document.querySelectorAll("p");

var i;
for (i = 0; i < x.length; i++) {
  let e = x[i];
  console.log(e);

  e.addEventListener("click", () => {

    if (e.style.backgroundColor === "") {
      e.style.backgroundColor = "	 #1aff66";

    } else {
      e.style.backgroundColor = "";

    }

  })

}