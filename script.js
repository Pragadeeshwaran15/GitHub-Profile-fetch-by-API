const userinput = document.getElementById("username");
const getdetsils = document.getElementById("getdetails");
const profileinfo = document.getElementById("profileinfo");
const repo = document.getElementById("repoInfo");

//!
getdetsils.addEventListener("click", async () => {
  const username = userinput.value;
  //console.log(username)
  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();
  console.log(data)
   getprofile(data)
   getrepo(username)
});

//!Get profile function it used to get user information

function getprofile(data){
    //console.log()
    profileinfo.innerHTML=`<div class="card">
    <div class="card-img">
    <img src=${data.avatar_url} alt=${data.name}>
    </div>
    <div class="card-body">
    <div class="card-head>${ data.name}</div>
    <div class="card-subHeading">${data.login}</div>
    <div class=" "card-text">
    <p>${data.bio}</p>
    <p> <i class="fa-thin fa-people-pulling"></i>${data.followers} Followers ${data.following}Following</p>
    <p> <i class="fa-light fa-location-dot"></i> ${data.location}</p>
    <button class="btn">
    <a href="${data.html_url}" target="_blank" id="main1"> Visit Profile</a>
    </button>
    </div>
</div>
</div>
    `
}

//!getting user repo from Githun Function
async function getrepo(username){
    const res=await fetch(`https://api.github.com/users/${username}/repos`)
    const projects=await res.json();
    for(i=0;i<projects.length;i++){
        repo.innerHTML +=`<div class="card">
        <div class="card-body">
        <div class="card-title">${projects[i].name}</div>
   <div class="card-subHeading">${projects[i].language}</div>
   <div class="card-text">
<button class="btn" >
   <a href="${projects[i].html_url}" target="_blank" id="main2">Visit Repo</a>
   </button>
   </div>
   </div>
   </div>
        `
    }
}