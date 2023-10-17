let season = prompt("Please enter the current season").toLowerCase();

const seasonCheck = (array) => {
    if(array === 'summer'){
        console.log("Summertimeeeee, letsgo!");
    }
    else if(array === 'winter'){
        console.log("Wintertime, letsgo! Hopefully we will have some snow!");
    }
    else if(array === 'fall'){
        console.log("Fall, time for some hot coco!");
    }
    else if(array === 'spring'){
        console.log("Spring, Blooming flowers! yay!");
    }
    else{
        console.log("no season detected");
    }
};

console.log(seasonCheck(season));