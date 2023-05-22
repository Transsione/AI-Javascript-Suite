# AI Javascript Suite
This repository contains a set of experiments with Machine Learning and AI algorithms using Node.js (as server), **client-side JavaScript** for operations, and MongoDB as data source.

../data/ folder contains a sample database, 'dataset', that includes a training set in every collection.

Everything crucial is client side, located in ../public/javascripts/ folder. Node.js merely serves as a server and retrieves data from MongoDB.

#### Purpose?
This repo is ideal for learning and experimenting with AI and Machine Learning. Numerous mature libraries for ML already exist but this can be a great starting point to grasp the basics and more.

## Implemented algorithms
* C4.5
* K-Means
* Cross Validation
* Simulated Annealing
* Genetic Algorithm

##Installation
To use core functions you only need a browser and the contents of the ../public/javascripts/ folder.

Just provide a data set in JSON format (see demo.js or tests.html for examples).

To use server and database functions, first install [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.org/). Afterwards, simply run the following commands in the terminal to install required modules and start the server:

```bash
cd /your/path/to/AI-Javascript-Suite/
npm install
```

```bash
cd /your/path/to/AI-Javascript-Suite/
npm start
```

Ensure MongoDB is running correctly using one of the below commands depending on your operating system:

```bash
#(Unix)
/your/path/to/mongod --dbpath /your/path/to/AI-Javascript-Suite/data
```

```command
::(Windows)
"Drive:\your\path\to\mongod.exe" --dbpath "Drive:\your\path\to\AI-Javascript-Suite\data"
```

Lastly, navigate to [localhost:3000](http://localhost:3000) in your browser. It may take some time for the data to load depending on your system's capability.

#### Credits
Several concepts, pseudo-codes, and ideas are directly derived from the course book, *"Artificial Intelligence: A Modern Approach (Third edition) by Stuart Russell and Peter Norvig"*. Pseudo code for K-Means implementation is taken from [Stanford.edu](http://stanford.edu/~cpiech/cs221/handouts/kmeans.html)