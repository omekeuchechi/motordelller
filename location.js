// const scrollTitle = document.querySelector(".scroll");
const section = ["car section", "part section"]


const discover = () =>{
    window.location.href = "discover.html"
}

const scrollDetails =() =>{
    // scrollTitle.innerHTML = "your at car section";
    // alert("car section");
    $(".scroll").append(function (index, currentValue){
        // alert(currentValue);
        return "cars sections";
    }, {
        
    });
}



// const showScrollValue = (scrolled1, scrollable1) =>{

//     scrolled1 = window.scrollY;
//     scrollable1 = document.documentElement.scrollHeight -window.innerHeight;

//     window.addEventListener("scrollend", () =>{
//         if (scrolled1 == 1000) {
//             console("ok");
//         }
//     })

// }



// window.addEventListener("scroll", () => {
//     const scrollable = document.documentElement.scrollHeight - window.innerHeight;

//     const scrolled = window.scrollY;

//     // console.log(scrolled);

//     if (scrolled === scrollable) {
//         confirm("your at end section")
//     }

//     if (scrolled == 920 || scrolled >= 900) {
//         return scrollDetails();
//     }
//     // if (scrollable == null) {
//     //     $(".scroll").css(display, none);
//     // }
// });

//get of url when we clicked
const httpValue = location.pathname;
const locationText = document.getElementById("location");
const  box = document.getElementById("box");
box.style.display = "none";
window.addEventListener("hashchange", () =>{
    // console.log(location)
    box.style.display = "block";
    setTimeout(() => {
        box.style.display = "none";
        locationText.innerHTML = httpValue;
    }, 1000);
})
document.getElementsByClassName("a").addEventListener("mouseover", () =>{
    // console.log(location)
    box.style.display = "block";
    setTimeout(() => {
        box.style.display = "none";
        locationText.innerHTML = httpValue;
    }, 1000);
})