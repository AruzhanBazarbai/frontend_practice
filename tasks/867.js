/**
 * Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const res=[];
    for(let j=0;j<matrix[0].length;j++){
        res[j]=[]
        for(let i=0;i<matrix.length; i++){
            res[j].push(matrix[i][j]);
        }
    }
    return res;
};