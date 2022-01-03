console.log($("img").attr("src"));
$("img").attr("src", "https://assets2.rockpapershotgun.com/minecraft-slime-header.jpg/BROK/thumbnail/1200x1200/quality/100/minecraft-slime-header.jpg")

$("h1").click( () =>{
    $("h1").css("color", "red")
})

$("button").click(()=>{
    $("h1").slideToggle()
})

$("body").keypress((e)=>{
    $("h1").text(e.key)
})
$("img").on("mouseover", ()=>{
    $("img").css("height", "300px")
})
$("img").before("<h2>Halla</h2>")