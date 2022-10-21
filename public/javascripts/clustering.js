/* returns true or false if k-means is done. K-means terminates either
 * because it has run a maximum number of iterations OR the centroids
 * stop changing (with a certain tolerance).
 */
var should_stop = function(old_centroids, centroids, iterations, options) {
    if(options == null || options.max_iterations == null) max_iterations = 10000;
    else max_iterations = options.max_iterations;
    if(options == null || options.tolerance == null) tolerance = 10;
    else tolerance = options.tolerance;

    return (iterations > max_iterations || Math.abs(old_centroids - centroids) < tolerance);
};


/* returns a label for each piece of data in the dataset.
 * for each element in the dataset, chose the closest centroid.
 */
var get_labels = function(dataset, centroids) {
    var labels = [];
    for(var i=0; i<dataset.length; i++){
        var distances = [];
        //calculate distance from each centroid
        for(var j=0; j<centroids.length; j++){
            distances[j] = get_distance(dataset[i], centroids[j]);
        }
        labels[i] = get_i