let item_count = 0;

function addItem()
{
    let data = document.getElementById("todo_input").value;
    data = data.trim();
    if(data.length == 0)
        alert("Please enter an Item in the Field")
    else
    {
        item_count++;
        let list_id = "item-" + item_count;
        let item = document.getElementById("list_ul");
        item.innerHTML += `<li id="${list_id}">${data}<button value="${list_id}" onclick="deleteItem(this)">X</button></li>`;
        document.getElementById("todo_input").value = "";
    }
}

function deleteItem(element)
{
    document.getElementById(element.value).remove();
}