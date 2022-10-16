import { getData } from "./modules/dataMiner.js";


(()=>{
    getData('../../data.json',loadItems);
    let container = document.querySelector('.content');

    //loading img elements to html from json data
    function loadItems(data){

        Object.keys(data).forEach(item=>{
            const name = data[item].name;
            const description = data[item].description;
            const date = data[item].date;
            const pictureLocation = data[item].pictureLocation;
            
            let imgObject = document.createElement('img');
            imgObject.src = pictureLocation;
            imgObject.classList.add("item");
            imgObject.alt = name;
            container.append(imgObject);
            imgObject.itemName = name;
            imgObject.itemDescription = description;
            imgObject.itemDate = date;

            imgObject.addEventListener('click',display,false);
        });
    }

    const main = document.getElementsByTagName("main")[0],
          post = document.getElementById("post"),
          hidden = document.getElementById("hidden");

    hidden.addEventListener("click",toggle,false);

    function display(item){
        console.log(item.currentTarget.src);
        console.log(item.currentTarget.itemName);
        console.log(item.currentTarget.itemDate);
        console.log(item.currentTarget.itemDescription);
        console.log(post.children);
        main.classList.add("hide");
        hidden.classList.remove("hide");

        let img = post.children[0],
            h1 = post.children[1],
            p = post.children[2],
            span = post.children[3];

        img.src = item.currentTarget.src;
        h1.innerHTML = item.currentTarget.itemName;
        p.innerHTML = item.currentTarget.itemDescription;
        span.innerHTML = item.currentTarget.itemDate;


    }

    function toggle(){
        hidden.classList.add("hide");
        main.classList.remove("hide");
    }
    
})();