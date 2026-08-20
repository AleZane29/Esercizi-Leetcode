/*function trapRainWater(heightMap: number[][]): number {
  let res:number =0;
  for(let x=1; x<heightMap.length-1; x++){
    for(let y=1; y<heightMap[x].length-1; y++){
      for(let i=-1; i<=1; i+=2){
        while(heightMap[x][y+i]<=heightMap[x][y]){}
        while(heightMap[i+x][y]<=heightMap[x][y]){}
      }
    }
  }
  return res;
};*/
