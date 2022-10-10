async function makeRequest() {
    document.getElementById("results").innerHTML = "";
    songquery = document.getElementById("song").value;

    let url = "/api/songs?song=" + songquery;
    try {
      let response = await fetch(url)
      let responseText = await response.text()

      document.getElementById("results").innerHTML = responseText
    }catch(error) {
      console.log("error", error);
      document.getElementById("results").innerHTML = "Error: " + error;
    }
}


