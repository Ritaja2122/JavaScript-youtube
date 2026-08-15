let nums = [1,2,3,4,5,6,7,8]
//normal for loop
for(let i = 0; i<nums.length; i++){
    console.log(nums[i]);
    
}
//for of loop

for(let num of nums){
    console.log(num);
    
}

//for each loop
nums.forEach(function(num){
    console.log(num)
});
//if we want to update the array
nums.forEach(function(num,index){
    nums[index] = num*2;
})
for(let num of nums){
    console.log(num);
    
}
