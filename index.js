let inputFieldSearchBox = document.querySelector('#Username') ; 
const submitFormButton = document.querySelector('#btn-search') ; 


const API__USR = "https://api.github.com/users/" ; 
let URL = [...window.location.href] ;
let equalSignIndexUrl = URL.indexOf('=') ;
let pureUrl = URL.slice(equalSignIndexUrl+1 , URL.length).join("") ; 
console.log(pureUrl);
if(pureUrl){
    fetch(API__USR + pureUrl , {
        method : "GET" 
    })
    .then(
        (response) => {
            if(response.ok){
                console.log(response.ok);
                return response.json() ; 
            }
            else{
                console.log("NO!");
            }
        }
    )
    .then(
        (data) => {
            console.log(data);
            if(data.message !== "Not Found" && data !== undefined){
                if(document.querySelector('body').classList.contains('show__card__content')){
                    overlay() ; 
                        setTimeout(() => {
                            document.querySelector('.overlay').remove() ;
                            ContentUserCard() ; 
                            render(data);
                            inputFieldSearchBox.value = pureUrl; 
                        }, 3000);
                        return ;
                    }
                    else{
                        overlay() ; 
                        setTimeout(() => {
                            document.querySelector('.overlay').remove() ;
                            ContentUserCard() ; 
                            render(data);
                            inputFieldSearchBox.value = pureUrl; 
                        }, 3000);
                    }
            }            
        }
    )
}
function eror() {
    let error = document.createElement('div') ; 
        error.setAttribute('class' , 'eror') ; 
        error.innerHTML = `<p>
            User Not Found OR The Username is NOT Correct Check AND ComeBack Later
        </p> ` ; 
    document.querySelector('body').appendChild(error) ;
}
function overlay() {
    let overlay = document.createElement('div') ; 
    overlay.setAttribute("class" , "overlay") ; 
    document.querySelector('body').appendChild(overlay) ; 
    overlay.innerHTML = `<div></div>` ; 
}
submitFormButton.addEventListener('click' , (event) => {
    let inputSearchTerm = inputFieldSearchBox.value.toLowerCase() ;
    let searchTerm = inputSearchTerm; 
    let searchItemArray = [...searchTerm] ; 
    let clearSearchBoxString = searchTerm ; 
    if (searchItemArray[0] === "@" || searchItemArray[0] === " ") {
        searchItemArray.shift() ;
        console.log(searchItemArray);
        for(let i = 0 ; i <= searchItemArray.length ; i++) {
            if(searchItemArray[i] === " "){
                searchItemArray[i] = "" ; 
            }
        }
        clearSearchBoxString = searchItemArray.join('') ; 
    }
    inputFieldSearchBox.value = clearSearchBoxString; 
    console.log(clearSearchBoxString);
    if(searchTerm){
        fetch(API__USR + clearSearchBoxString , 
            {
                method : "GET" 
            })
            .then(
                (response) => {
                    if(response.ok){
                        console.log(response.ok);
                        return response.json() ; 
                    }
                    else{
                        console.log("NO!");
                    }
                }
            )
            .then(
                (data) => {
                    if(data === undefined) {
                        console.log("uifg");
                        overlay() ; 
                        setTimeout((event) => {
                            document.querySelector('.overlay').remove() ;
                            eror() ; 
                        }, 3000);
                    }
                    if(data.message !== "Not Found" && data !== undefined){
                    if(document.querySelector('body').classList.contains('show__card__content')){
                        overlay() ; 
                        setTimeout(() => {
                            document.querySelector('.overlay').remove() ;
                            render(data);
                            inputFieldSearchBox.value = pureUrl; 
                        }, 3000);
                        return ;
                    }
                    else{
                        overlay() ; 
                        setTimeout(() => {
                            document.querySelector('.overlay').remove() ;
                            ContentUserCard() ; 
                            render(data);
                            inputFieldSearchBox.value = pureUrl; 
                        }, 3000);
                    }
                }
                }
            )
            return ; 
    }
    else{
        console.log("this is empty");
    }
}) ;
function overley(){
    let overlay = document.createElement('div') ; 
    overlay.innerHTML = `
        <p>
            hiiiii
        </p>
    ` ;
    document.querySelector('body').appendChild(overlay) ;
}
function ContentUserCard() {
    document.querySelector('body').classList.add('show__card__content')
    let userCard = document.createElement('div') ; 
    userCard.setAttribute('class' , 'user__card')
    document.querySelector('body').appendChild(userCard) ;
    
userCard.innerHTML = `
                    <div class="user__card--container">
                    <div class="user__image">
                        <img id="avatarimage" src="" loading="lazy">
                    </div>
                    <div class="user__info--container">
                        <div class="user--name">
                            <p id="userName">
                                Jafa RAdus
                            </p>
                        </div>
                        <div class="user--id">
                            <a href="" id="direct__link" target="_blank"> 
                                @GitHub Account
                            </a>
                        </div>
                        <div class="user__bio">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, saepe.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, saepe.
                            </p>
                        </div>
                        <div class="user__work--station">
                            <div class="work__container">
                                <div class="workcount--count">
                                    <p id="repo__count"> 
                                        20
                                    </p>
                                </div>
                                <div class="workcount--title">
                                    <p>
                                        Public Repository
                                    </p>
                                </div>
                            </div>
                            <div class="work__container">
                                <div class="workcount--count">
                                    <p id="followers__count">
                                        30
                                    </p>
                                </div>
                                <div class="workcount--title">
                                    <p>
                                        Followers
                                    </p>
                                </div>
                            </div>
                            <div class="work__container">
                                <div class="workcount--count">
                                    <p id="following__count">
                                        50
                                    </p>
                                </div>
                                <div class="workcount--title">
                                    <p>
                                        Following
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="user__tools">
                        <div class="user__contact">
                            <a href="" id="user__email" target="_blank">
                                Message
                            </a>
                        </div>
                        <div class="user__follow">
                            <a href="" id="user__follow" target="_blank">
                                Follow
                            </a>
                        </div>
                    </div>
                    </div>

                    ` ; 
                    const avatarImage = document.querySelector('#avatarimage') ; 
                    avatarImage.addEventListener("load" , (e) => {
                        if(avatarImage.complete){
                            console.log("ok");
                        }
                    }) ;
                }                    
document.addEventListener('keydown' , (event) => {
    if(event.key === "Enter") {
        console.log("hio");
    }
} ) ; 
function render(data) {
    const avatarImage = document.querySelector('#avatarimage') ; 
    const directLink = document.querySelector('#direct__link') ; 
    const username = document.querySelector('#userName'); 
    const repoCount = document.querySelector('#repo__count') ; 
    const followersCount = document.querySelector('#followers__count') ; 
    const followinCount = document.querySelector('#following__count') ; 
    const userEmail = document.querySelector('#user__email') ; 
    const userFollow = document.querySelector('#user__follow') ; 
    const userImageContainer = document.querySelector('.user__image') ; 
    const {public_repos , avatar_url, hireable, following, followers,login , html_url , email} = data;
    avatarImage.src = avatar_url ; 
    directLink.href = html_url ; 
    userFollow.href = html_url ; 
    username.innerHTML = login ; 
    repoCount.innerHTML = public_repos ; 
    followersCount.innerHTML = followers ; 
    followinCount.innerHTML = following ; 
    if(email === null)   {
        userEmail.href = html_url ; 
    }else{
        userEmail.href = `${email}` ; 
    }
    if(hireable) {
        userImageContainer.classList.add('varifyimage') ; 
        document.querySelector('.user__image').innerHTML += `
                    <div class="hireable">
                        <p class="hireable__title">
                            This User is Hireable
                        </p>
                        <div class="hireable__content">
                            <img class="hireimage" src="./Media/please.jpg" loading="lazy">
                            <p class="hireable__text">
                                Could You Please Hire Me , Pay me 
                                and Tell Me I'am Your Good Employee
                                🥺👉👈 </br>                                
                                <a class="hireable__github__link" href="" target="_blank">
                                    GitHub Link
                                </a>
                            </p>
                        </div>
                    </div
                    `
        document.querySelector('.hireable__github__link').href = html_url ; 
    }
    else{
        userImageContainer.classList.remove('varifyimage') ; 
    }
};  


/*
let userCard = document.createElement('div') ; 
userCard.setAttribute('class' , 'user__card')
userCard.innerHTML = `
<div class="user__card--container">
<div class="user__image varifyimage">
    <img id="avatarimage" src="" loading="lazy">
</div>
<div class="user__info--container">
    <div class="user--name">
        <p id="userName">
            Jafa RAdus
        </p>
    </div>
    <div class="user--id">
        <a href="" id="direct__link">
            @GitHub Account
        </a>
    </div>
    <div class="user__bio">
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, saepe.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, saepe.
        </p>
    </div>
    <div class="user__work--station">
        <div class="work__container">
            <div class="workcount--count">
                <p id="repo__count"> 
                    20
                </p>
            </div>
            <div class="workcount--title">
                <p>
                    Public Repository
                </p>
            </div>
        </div>
        <div class="work__container">
            <div class="workcount--count">
                <p id="followers__count">
                    30
                </p>
            </div>
            <div class="workcount--title">
                <p>
                    Followers
                </p>
            </div>
        </div>
        <div class="work__container">
            <div class="workcount--count">
                <p id="following__count">
                    50
                </p>
            </div>
            <div class="workcount--title">
                <p>
                    Following
                </p>
            </div>
        </div>
    </div>
</div>
<div class="user__tools">
    <div class="user__contact">
        <a href="" id="user__email">
            Message
        </a>
    </div>
    <div class="user__follow">
        <p>
            Follow
        </p>
    </div>
</div>
</div>
` ; 
document.querySelector('body').appendChild(userCard) ;
*/



/**
 *document.querySelector('body').innerHTML += `
<div class="user__card">
<div class="user__card--container">
<div class="user__image">
    <img src="./avt-6.jpg">
</div>
<div class="user__info--container">
    <div class="user--name">
        <p>
            Jafa RAdus
        </p>
    </div>
    <div class="user--id">
        <p>
            @jfriradus
        </p>
    </div>
    <div class="user__bio">
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, saepe.
        </p>
    </div>
    <div class="user__work--station">
        <div class="work__container">
            <div class="workcount--count">
                <p>
                    20
                </p>
            </div>
            <div class="workcount--title">
                <p>
                    repo
                </p>
            </div>
        </div>
        <div class="work__container">
            <div class="workcount--count">
                <p>
                    30
                </p>
            </div>
            <div class="workcount--title">
                <p>
                    Folloowee
                </p>
            </div>
        </div>
        <div class="work__container">
            <div class="workcount--count">
                <p>
                    50
                </p>
            </div>
            <div class="workcount--title">
                <p>
                    Foloolweiong
                </p>
            </div>
        </div>
    </div>
</div>
<div class="user__tools">
    <div class="user__contact">
        <p>
            Message
        </p>
    </div>
    <div class="user__follow">
        <p>
            Follow
        </p>
    </div>
</div>
</div>
</div>
`
 */