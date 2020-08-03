// Your code here
function mapToNegativize (nums){
    let newArray =[]
    for(let i=0 ; i<nums.length; i++){
        newArray.push(-nums[i])
    }
    return newArray 
}
function mapToNoChange(nums){
    return nums 
}

function mapToDouble(nums){
    let newArray =[]
    for(let i=0 ; i<nums.length; i++){
        newArray.push(nums[i]*2)
    }
    return newArray 
}


function mapToSquare(nums){
    let newArray =[]
    for(let i=0 ; i<nums.length; i++){
        newArray.push(nums[i]*nums[i])
    }
    return newArray 
}


function reduceToTotal(nums,start=0){
    let x = start 
    for(let i=0 ; i<nums.length; i++){
        x += nums[i]
    }
    return x 

}

function reduceToAllTrue(nums){
    let x = true 
    for (let i=0; i<nums.length; i++){
        if(nums[i]){
        } else {
            x = false 
        }
    }
    return x 

}


function reduceToAnyTrue(nums){
    let x = false 
    for (let i=0; i<nums.length; i++){
        if(nums[i]){
            x = true 
        } 
    }
    return x 
}