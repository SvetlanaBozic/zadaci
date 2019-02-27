let M: number [][] = [[1, 2, 3, 4],[4, 3, 2, 1],[5, 6, 7, 8], [9, 10, 11, 12]];

var S = 0;
for (var i = 0; i < M.length; i++) {
    var trenutniRed = M[i];
    for (var i = 0; i < trenutniRed.length; i++) {
        S =S + trenutniRed[i];
    }
}
 
// Ovako nećemo daleko dogurati jer samo prođe kroz prvi red. 
 
var button = document.createElement('button');
button.textContent = "Pa da pogledamo.";
button.onclick = function () {
alert(S);
};
document.body.appendChild(button);

