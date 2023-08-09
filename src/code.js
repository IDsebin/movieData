const member = {
  name: "Jason",
  email: "jason@codeitmall.kr",
  department: "marketing",
};

fetch('https://learn.codeit.kr/api/membersddd/1"', {
  method: "DELETE",
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("error");
  });
