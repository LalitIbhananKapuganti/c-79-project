function nonveg()
{
    menu_list_array = [
        "Chicken Pizza",
        "Pepper Barbecue Chicken With Cheese",
        "Non Veg Supreme",
        "Chicken Golden Delight"
                      ]
}

function veg()
{
    menu_list_array = [
        "Margherita",
        "Double Cheese Margherita",
        "Farm House",
        "Peppy Paneer"
                      ]
}

function getmenu()
{
    var htmldata;
    htmldata="<ol class='menulist>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+ '<li>'+menu_list_array[i] + '</li>'
    }
    htmldata=htmldata+ "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item()
{
    var htmldata;
    var item-document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var j=0;i<menu_list_array.length;i++>)
    {
        htmldata=htmldata+"<div class='card'>"+ '<img src="pizza (1).jpg"/>'+menu_list_array[i] + '</div>'
    }
    htmldata=htmldata+'</section>'
    document.getElementById("display_addmenu").innerHTML = htmldata;
}