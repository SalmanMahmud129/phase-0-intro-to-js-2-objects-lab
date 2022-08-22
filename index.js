// Write your solution in this file!
const employee = {name: "Salman", streetAddress: "test"}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = {...obj}

    newObj[key] = value
    

    //console.log(newObj)
    return newObj
}


//updateEmployeeWithKeyAndValue(employee, "hairColor", "Black")


function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value

    return obj
}

function deleteFromEmployeeByKey(obj, key){
    const newObj = {...obj}

    //delete newObj.key
    delete newObj[key] 

    return newObj
}



function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]

    return obj
}
