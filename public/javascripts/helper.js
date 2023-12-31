
/* returns the array with one element removed
 */
var remove_attribute = function(attrib, to_remove) {
    var array = attrib.slice(0);
    for (var i=array.length-1; i>=0; i--) {
        if (array[i] === to_remove) {
            array.splice(i, 1);
        }
    }
    return array;
};


/* base 2 logarithm
 */
var base2_log = function(x) {
    return Math.log(x)/Math.log(2);
};


/* recursively clones an object
 */
function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}


/* use it like this:
 getJSON("http://...", function(err, data) {
     if (err != null) {
        alert("Something went wrong: " + err);
     }
     else {
        alert("Your query count: " + data.query.count);
     }
 });
 */
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "json";
    xhr.onload = function() {
        var status = xhr.status;
        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    xhr.send();
};

function syntaxHighlight(json) {
    if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

function add_zero(x,n) {
    while (x.toString().length < n) {
        x = "0" + x;
    }
    return x;
}

function display_time() {
    var d = new Date();
    var h = add_zero(d.getHours(), 2);
    var m = add_zero(d.getMinutes(), 2);
    var s = add_zero(d.getSeconds(), 2);
    var ms = add_zero(d.getMilliseconds(), 3);
    return h + ":" + m + ":" + s + ":" + ms + " ";
}

function print_queens(node){
    var board = "";
    var sep = "";
    for(var i = 0; i<1+node.length*4; i++) {
        sep += "_";
    }
    sep += "\n<br />";
    for(var i = 0; i<node.length; i++){
        board += sep;
        board += "|";
        for(var j = 0; j<node.length; j++){
            if(j==node[i])
                board += " Q ";
            else
                board += "   ";
            board += "|";
        }
        board += "\n";
    }
    board += sep;
    return board;
}

function get_index_and_max_value(array, excluded_indexes){
    if(typeof excluded_indexes == 'undefined' || excluded_indexes == null) excluded_indexes = [];
    var control = true;
    var max = null;
    var index = -1;
    var provmax = null;
    var prov = -1;
    while(control) {
        // find a min
        for (var k in array) {
            if (max == null || max < array[k]) {
                max = array[k];
                index = k;
            }
        }
        // check if index is excluded, if it is, then repeat, else stop
        if (excluded_indexes.indexOf(1*index) != -1) {
            if(prov == -1) {
                prov = index;
                provmax = max;
            }
            array = remove_attribute(array, max);
            max = null;
            index = -1;
            if(array.length == 0) return {"index": prov, "max": provmax }; // everything excluded, returning the best value
        }
        else control = false;
    }
    return {"index": index, "max": max };
}

function get_index_and_min_value(array, excluded_indexes){
    if(typeof excluded_indexes == 'undefined' || excluded_indexes == null) excluded_indexes = [];
    var control = true;
    var min = null;
    var index = -1;
    var provmin = null;
    var prov = -1;
    while(control) {
        // find a min
        for (var k in array) {
            if (min == null || min > array[k]) {
                min = array[k];
                index = k;
            }
        }
        // check if index is excluded, if it is, then repeat, else stop
        if (excluded_indexes.indexOf(1*index) != -1) {
            if(prov == -1) {
                prov = index;
                provmin = min;
            }
            array = remove_attribute(array, min);
            min = null;
            index = -1;
            if(array.length == 0) return {"index": prov, "min": provmin }; // everything excluded, returning the best value
        }
        else control = false;
    }
    return {"index": index, "min": min };
}

function is_even(n) {
    return n == parseFloat(n)? !(n%2) : void 0;
}