// 'this' Keyword

// Function expressions or function statements point to global object
function a() {
    console.log(this); // global object (window)
    this.newvariable = 'hello';
}
a();
console.log(newvariable);

var b = function() {
    console.log(this); // global object (window)
}
b();


// Method (function within an object)
var c = {
    name: 'The c object',
    log: function() {
        this.name = 'Updated c object';
        console.log(this); // this points to the c object
    }
};

c.log();


// Method JS 'Bug'
// Function within a method refers to the global object
var d = {
    name: 'The d object',
    log: function() {
        console.log(this);
        
        var setname = function(newname) {
            console.log(this);  // refers to global object
            this.name = newname;
        }

        setname('Updated d object!');
        console.log(this); // refers to d object
    }
}

d.log();

// Workaround: Assigning variable to object reference
var e = {
    name: 'The e object',
    log: function() {
        var self  = this; // pointing to the e object

        var setname = function(newname) {
            console.log(self);  // refers to the e object
            self.name = newname;
        }

        setname('Updated e object!');
        console.log(self); // refers to the e object
    }
}

e.log();