

const btnRandom = document.getElementById("div-loading-card")
const RandomPeopleImages = document.getElementById("img-profile")

async function callApi() {


  const resp = await axios.get("https://randomuser.me/api/");
  RandomPeopleImages.src = resp.data.message
}




RandomPeopleImages.onload = () =>{
  
  btnRandom.disabled = false
  setTimeout (()=>{
     RandomPeopleImages.className = ""
  },1000)
 }
