function tab_click(element)
{
    const lastIndex = element.id[element.id.length-1]
    let tab = document.querySelectorAll(".tab")
    tab.forEach(function(node){
        if(node.id[node.id.length-1] == lastIndex)
        {
            node.classList.remove("display-none")
            node.style.display = "block";
        }
        else{
            node.className = "display-none tab"
        }
    })

}