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
    };

    function display(item){
        console.log(item.currentTarget.src);
        console.log(item.currentTarget.itemName);
        console.log(item.currentTarget.itemDate);
        console.log(item.currentTarget.itemDescription);


    }
    
})();