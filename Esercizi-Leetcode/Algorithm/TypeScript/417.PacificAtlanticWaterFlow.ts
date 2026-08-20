function pacificAtlantic(heights: number[][]): number[][] {
	const check = (n: number, m: number) => {
		if (visited.some(([a, b]) => a === n && b === m)) return;
		visited.push([n, m]);
		if (n < 0 || m < 0) {
			pacific = true;
			return;
		}
		if (n >= heights.length || m >= heights[n].length) {
			atlantic = true;
			return;
		}
		if (n == 0 || heights[n][m] >= heights[n - 1][m]) {
			check(n - 1, m);
		}
		if (m == 0 || heights[n][m] >= heights[n][m - 1]) {
			check(n, m - 1);
		}
		if (m == heights[n].length - 1 || heights[n][m] >= heights[n][m + 1]) {
			check(n, m + 1);
		}
		if (n == heights.length - 1 || heights[n][m] >= heights[n + 1][m]) {
			check(n + 1, m);
		}
	};
	let visited: number[][] = [];
	let res: number[][] = [];
	let pacific: boolean = false;
	let atlantic: boolean = false;
	let count = 0;
	for (let x = 0; x < heights.length; x++) {
		for (let y = 0; y < heights[x].length; y++) {
			visited = [];
			count = 0;
			pacific = false;
			atlantic = false;
			check(x, y);
			if (pacific && atlantic) {
				res.push([x, y]);
			}
		}
	}
	return res;
}
