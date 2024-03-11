let count=0;
document.getElementById("inc").onclick= function(){
    count++;
    document.getElementById("title").textContent=count;
}
document.getElementById("dec").onclick= function(){
    count--;
    document.getElementById("title").textContent=count;
}
document.getElementById("res").onclick= function(){
    count=0;
    document.getElementById("title").textContent=count;
}