# AngularInterviewApp

## Congrats!

Your interviewing at rackspace and that is awesome.

This is a live code challenge.

Before we get started we require a couple of things

* Node must be installed.
* Gulp needs to be installed

```
npm install -g gulp
```

Given you have those you should be able to check this repo out
and run

```
gulp
```

This will start the gulp connect server and you should be good to go!

Now to the challenges:

1. Debug any initial errors
2. Explain what the app is doing and how the pieces fit together
3. Add a checkbox to each row that when clicked removes it

##Solution
Initial errors
1 return have two items so semi-colon can't be placed after items:[] in app.js, replace with comma instead

2 in index.html ng-repeat should have item in items

3 while attaching variables with scope in controller, view doesn't requires the expressions to be using $scope as well. 
    Which means replace ng-click='$scope.add()' with ng-click='add()' inside index.html file  

Code is updated with checkbox feature