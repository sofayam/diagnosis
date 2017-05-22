"use strict"

var nools = require("nools")

var flow = nools.compile(__dirname + "/diagnosis.nools")

var Patient = flow.getDefined("Patient")

function createPatient() {
    return new Patient({
        name: "bob", fever: "high",
        spots: false, rash: true,
        soreThroat: false, innoculated: true
    }
    )
}

var session = flow.getSession()

var d, t;

var resultsContainer = []



session.matchUntilHalt().then(
      function() {
        console.log("All done!");
    },
    function(err) {
        console.log("Error matchUntilHalt()", err.stack);
    }  
)

session.assert(createPatient())
      