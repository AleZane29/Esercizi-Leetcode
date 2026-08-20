function areSimilar(mat: number[][], k: number): boolean {
	const jump = k % mat[0].length;
	let cell;
	for (let i = 0; i < mat.length; i++) {
		for (let n = 0; n < mat[0].length; n++) {
			if (i % 2 == 0) {
				cell = n - jump;
				if (cell < 0) {
					cell = mat[0].length + cell;
				}
			} else {
				cell = n + jump;
				if (cell >= mat[0].length) {
					cell = cell - mat[0].length;
				}
			}
			if (mat[i][n] != mat[i][cell]) {
				return false;
			}
		}
	}
	return true;
}
