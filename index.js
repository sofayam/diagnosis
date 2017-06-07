"use strict"

var nools = require("nools")

var flow = nools.compile(__dirname + "/diagnosis.nools")

var Patient = flow.getDefined("Patient")

function createPatient() {
    return new Patient({
        name: "bob", fever: "high",
        spots: false, rash: false,
        soreThroat: true, innoculated: true
    }
    )
}

var session = flow.getSession()



session.matchUntilHalt().then(
      function() {
        console.log("All done!");
    },
    function(err) {
        console.log("Error matchUntilHalt()", err.stack);
    }  
)

var pat = createPatient()

session.assert(pat)

//session.on("fire", function (x) {
//   console.log("Fired ", x.toString())
//} )

session.on("bloop", function(x) {
    console.log("custom event bloop emitted")
}
)
      