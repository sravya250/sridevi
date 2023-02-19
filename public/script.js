let endpoint="http://localhost:5000/";

document.getElementById("send").addEventListener("click", async () => {
    let formData = new FormData(document.querySelector("form"));
    let tempData = {};
    formData.forEach((value, label) => {
      tempData[label] = value;
    });
    await fetch( endpoint + 'postData', {
      method: "POST",
      body: JSON.stringify({
        data: tempData
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((ele) => {
      window.location.reload(1);
    });
});