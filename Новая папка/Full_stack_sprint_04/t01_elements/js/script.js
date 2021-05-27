let li = document.getElementsByTagName("li")




for(item of li) {
    if(!item.classList.contains("good") &&  !item.classList.contains("evil") && !item.classList.contains("unknown")){
        item.classList.add("unknown")        
    }
    
    if (!item.dataset.element) {
        item.setAttribute("data-element", "none");
    }
    let dataE = item.dataset.element.split(" ")    
    
    item.append(document.createElement('br'));

    console.log(dataE);
console.log (item);

    for (item2 of dataE) {
console.log (item2)
        let div = document.createElement('div');
        item.append(div);
        div.classList.add(item2);
        div.classList.add("elem"); 
        if (item2 == "none") {         
        let div2 = document.createElement('div');
        div.append(div2);
        div2.classList.add("line");
        }
    }    
        
    console.log(item);
    console.log(dataE);

}   











// Property	                                             Description
//element.innerHTML =  new html content	Change the inner HTML of an element
//element.attribute = new value	Change the attribute value of an HTML element
//element.style.property = new style	Change the style of an HTML element
//Method	                                     Description
//element.setAttribute(attribute, value)	Change the attribute value of an HTML element
//Method	Description
//document.createElement(element)	Create an HTML element
//document.removeChild(element)	Remove an HTML element
//document.appendChild(element)	Add an HTML element
//document.replaceChild(new, old)	Replace an HTML element
//document.write(text)	Write into the HTML output stream
