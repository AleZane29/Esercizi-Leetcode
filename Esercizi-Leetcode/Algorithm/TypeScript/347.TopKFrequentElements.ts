function topKFrequent(nums: number[], k: number): number[] {
	let map = new Map<number, number>();
	for (let i = 0; i < nums.length; i++) {
		let resI = map.get(nums[i]);
		if (resI) {
			map.set(nums[i], resI + 1);
		} else {
			map.set(nums[i], 1);
		}
	}
	//Sort hashmap
	const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

	//Retrieve the top k frequent
	let res: number[] = [];
	for (let i = 0; i < k; i++) {
		res.push([...sortedMap.keys()].at(i)!);
	}
	return res;
}
