let myData = [];
let allSearch = [];
let data;

let searchValue = document.getElementById("search-value");
let searchValueApi = document.getElementById("search-API")


let searchApi = searchValueApi.value;
searchValueApi.onkeyup = () =>{
  searchApi.value == "" ?
    displayData(myData)
  :
  getsearch(searchValueApi.value)
}


searchValue.onkeyup =  ()=> {
  let search = searchValue.value;
  let newSearch = "";

  for (let i = 0; i < myData.length; i++) {
    if (myData[i].title.toLowerCase().includes(search.toLowerCase())) {
      newSearch += ` <div class="col-md-4 py-4">
     <div class="image-hover position-relative">
         <img  src="https://image.tmdb.org/t/p/w500/${myData[i].poster_path}" alt="Avatar" class=" w-100 rounded-2">
         <div class="overlay position-absolute">
           <div class="text p-2">
             <h2>${myData[i].title}</h2>
             <p>${myData[i].overview}</p>
             <p>${myData[i].vote_average}</p>
             <p>${myData[i].release_date}</p>
           </div>
         </div>
       </div>
 </div>`;
      document.getElementById("movies-search").innerHTML = newSearch;
    }else{
     
    }
  }
};


async function getsearch(keyword) {
  let myHttp = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false`
  );
  var res = await myHttp.json();
  data = res.results;
  allSearch = data;
  displayData(allSearch);
}

async function getTrending() {
  let myHttp = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44"
  );
  var res = await myHttp.json();
  data = res.results;
  myData = data;
  displayData(myData);
}

async function getPopular() {
  let myHttp = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44"
  );
  var res = await myHttp.json();
  data = res.results;
  myData = data;
  displayData(myData);
}

async function getToprated() {
  let myHttp = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44"
  );
  var res = await myHttp.json();
  data = res.results;
  myData = data;
  displayData(myData);
}

async function getUpcoming() {
  let myHttp = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44"
  );
  var res = await myHttp.json();
  data = res.results;
  myData = data;
  displayData(myData);
}

async function getNowplaying() {
  let myHttp = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44"
  );
  var res = await myHttp.json();
  data = res.results;
  myData = data;
  displayData(myData);
}

(async function () {
  await getTrending();
  await getPopular();
  await getToprated();
  await getUpcoming();
  await getNowplaying();

})();

function displayData(data) {
  cartoona = "";
  for (let i = 0; i < data.length; i++) {
    if (
      data[i].title == undefined ||
      data[i].overview == undefined ||
      data[i].vote_average == undefined ||
      data[i].release_date == undefined
    ) {
      cartoona += ` <div class="col-md-4 py-4">
            <div class="image-hover position-relative">
                <img  src="https://image.tmdb.org/t/p/w500/${data[i].poster_path}" alt="Avatar" class=" w-100 rounded-2">
                <div class="overlay position-absolute">
                  <div class="text p-2">
                    <h2>${data[i].name}</h2>
                    <p class="m-5" >${data[i].overview}</p>
                    <p>${data[i].vote_average}</p>
                    <p>${data[i].first_air_date}</p>
                  </div>
                </div>
              </div>
        </div>`;
    } else {
      cartoona += ` <div class="col-md-4 py-4">
        <div class="image-hover position-relative">
            <img  src="https://image.tmdb.org/t/p/w500/${data[i].poster_path}" alt="Avatar" class=" w-100 rounded-2">
            <div class="overlay position-absolute">
              <div class="text p-2">
                <h2>${data[i].title}</h2>
                <p class="m-2" >${data[i].overview}</p>
                <p>${data[i].vote_average}</p>
                <p>${data[i].release_date}</p>
              </div>
            </div>
          </div>
    </div>`;
    }
  }

  document.getElementById("movies-cat").innerHTML = cartoona;
}

$(".start").click(function () {
  $(".menu-nav").toggle(300);
});



///////////////////////////////////////////////////////////////////////////////////////////////////////

// regex contantUS

let nameContact = document.getElementById("nameID");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let repassword = document.getElementById("rePassword");
let age = document.getElementById("age");
let email = document.getElementById("email");



nameContact.oninput = () => {
  let regexName = /^[A-Z][a-z]{3,8}$/;
  if (regexName.test(nameContact.value)) {
    nameContact.classList.replace("is-invalid","is-valid");
    document.getElementById("nameValidate").innerHTML =""
  } else {
    nameContact.classList.add("is-invalid");
    document.getElementById("nameValidate").innerHTML ="should first name contain Capital letter"
  }
};


phone.oninput = () => {
  let regexPhone = /^01[0125][0-9]{8}$/
  if(regexPhone.test(phone.value)){
    phone.classList.replace("is-invalid","is-valid")
    document.getElementById("phoneValidate").innerHTML =""

  }else{
    phone.classList.add("is-invalid")
    document.getElementById("phoneValidate").innerHTML ="should write country code in first and contain 0-9 numbers"
  }
}

password.oninput = () =>{
  let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  if(regexPassword.test(password.value)){
     password.classList.replace("is-invalid","is-valid")
     document.getElementById("passwordValidate").innerHTML =""
  }else{
     password.classList.add("is-invalid")
     document.getElementById("passwordValidate").innerHTML = "Minimum eight characters, at least one letter, one number and one special character"
  }
}

repassword.oninput = () =>{
  let regexreRePassword =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  if(regexreRePassword.test(repassword.value)){
    repassword.classList.replace("is-invalid","is-valid")
    document.getElementById("repasswordValidate").innerHTML =""
  }else{
    repassword.classList.add("is-invalid")
    document.getElementById("repasswordValidate").innerHTML = "wrong Password"
  }
}


age.oninput = () => {
  // let ageRegex = /^100|[1-9]?\d$/
  if(age.value >= 18){
    age.classList.replace("is-invalid","is-valid")
    document.getElementById("ageValidate").innerHTML =""
  }else{
    age.classList.add("is-invalid")
    document.getElementById("ageValidate").innerHTML ="should your age above 18 year"
  }
}


email.oninput = ()=>{
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  if(emailRegex.test(email.value)){
    email.classList.replace("is-invalid","is-valid")
    document.getElementById("emailValidate").innerHTML =""

  }else{
    email.classList.add("is-invalid")
    document.getElementById("emailValidate").innerHTML ="wrong Email"
  }
}