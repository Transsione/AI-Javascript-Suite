// example problem
var queens_puzzle = {};
queens_puzzle.name = "queens puzzle";
queens_puzzle.size = 20;
queens_puzzle.get_initial_node = function(){
    var arr = [];
    for(var i = 0; i< queens_puzzle.size; i++){
        arr[i] = i;
    }
    return arr;
};
queens_puzzle.randomswap = function(c1, node){
    var arr = clone(node);
    var c2 = Math.floor((Math.random() * (node.length)));
    var app = arr[c1];
    arr[c1] = arr[c2];
    arr[c2] = app;
    return arr;
};
queens_puzzle.create_random_node = function() {
    var arr = queens_puzzle.get_initial_node();
    //random perturbation
    for(var j=0; j<100; j++) {
        for (var i=0; i<arr.length; i++) {
            arr = queens_puzzle.randomswap(i, arr);
        }
    }
    return arr;
};
queens_puzzle.select_random_successor = function(node) {
    var app = clone(node);
    // randomly swap 2 columns
    var rand_index = Math.floor((Math.random() * (node.length)));
    return queens_puzzle.randomswap(rand_index, app);
};
queens_puzzle.evaluate = function(node) {
    var conflicts = 0;
    // for each column/queen
    for(var c=0; c<node.length; c++){
        // and again for each column
        for(var j=0; j<node.length; j++){
			if(c!=j && node[c]==node[j]) conflicts++
            if(c!=j && (Math.abs(c-j)==Math.abs(node[c]-node[j]))) conflicts++
 