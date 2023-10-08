// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers, dname) {
    for (let i=0; i < drivers.length;){
        const newMatch =[];
        const match = drivers.filter(element => {
            if (element.toUpperCase() === dname.toUpperCase()){
                newMatch.push(element);
            }else{
                return newMatch;
            }
        }
            );
       return match ? newMatch : undefined;
    }
    
}

console.log(findMatching(drivers,dname));


// fuzzyMatch : REturns drivers whose first 2 letters match provided string

function fuzzyMatch(drivers,stringChars){
    for (let i=0; i < drivers.length;){
        const sameChars = [];
        const nameChars = drivers.filter(element => {
            if (element.slice(0,2) === stringChars){
                sameChars.push(element);
            }else{
                return sameChars;
            }

        })
        return nameChars ? sameChars : undefined;
    }

}


console.log(fuzzyMatch(drivers,dname));


//matchName: Provides elements whose name match the input name string

function matchName(drivers,nameString){
    for (let i=0; i < drivers.length;){
        const driversName = [];
        const dname = drivers.filter(element =>{
            if (element.name === nameString){
                driversName.push(element);
            }else{
                return driversName;
            }
        })
        return dname ? driversName : undefined;
    }
}

console.log(matchName(drivers,nameString));
