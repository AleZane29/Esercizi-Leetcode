function minimumDistance(nums: number[]): number {
  let res:number = Infinity;
  const map = new Map<number, number[]>();
  for(let i=0; i < nums.length; i++){
      if(!map.has(nums[i])){
          map.set(nums[i], [i]);
      } else {
          map.get(nums[i])!.push(i);
      }
  }

  for(let [key, value] of map){
      if(value.length >=3){
          for(let i=0; i <= value.length - 3; i++){
              res = Math.min(res, 2*(value[i+2]-value[i]))
          }
      }
  }

  return res!=Infinity ? res : -1;
};