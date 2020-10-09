  var Names = [
  
    "Rekha",
    "Kumar",
    "Saroja",
    "Gangadhar",
    "Yukhi"
    ]
  
  var images = [
    "https://i.ytimg.com/vi/LCiLiAxpP_4/maxresdefault.jpg",
    "https://www.seekpng.com/png/detail/373-3737886_man-clipart-dad-animated-picture-of-father.png",
    "https://i.pinimg.com/originals/7e/cf/16/7ecf1629515f7cbf656b6d9508d3f0a3.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBxq9KYiGRaYUxk5twRT_t3v5p4ob5XDHubw&usqp=CAU",
    "https://previews.123rf.com/images/grgroup/grgroup1610/grgroup161000417/63754833-girl-cartoon-icon-kid-child-little-and-people-theme-isolated-design-vector-illustration.jpg"
    ]

    var NI=5;

    var i= 0;


function nextslide12(){
i++;
if(i>4){
  i=0;
}
  document.getElementById("reasontxt").innerHTML=Names[i];
  document.getElementById("album").src= images[i];
}