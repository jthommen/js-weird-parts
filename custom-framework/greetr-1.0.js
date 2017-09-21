// Greetr

// Requirements
// - Helps give greetings
// - When given a first name, last name, and optinal language, it generates formal and informal greetings.
// -  Support English and Spanish languages
// - Reusable library/framework
// - Easy to type'G$()'
// - Support jQuery

// Safe environment in new execution context
;(function(global, $) {

    // 'new' object
    var greetr = function(firstname, lastname, language) {

        // Returns function constructor
        return new greetr.init(firstname, lastname, language, this);

    }

    // Array with languages accessible with closures
    // hidden within the scope of the IIFE and never directly accessible
    var supportedLanguages = ['en', 'es'];

    // Declaring greetings
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    // Logging function
    var logMessages = {
        en: 'Logged in',
        es: 'Inció sesión'
    };

    greetr.prototype = {
        
        // Greeting methods go here
        fullName: function() {
            return this.firstname + ' ' + this.lastname;
        },

        validate: function(language) {
            if(supportedLanguages.indexOf(this.language) === -1) {
                throw 'Invalid language';
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstname + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function(formal){
            var msg;

            // if undefind or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes th method chainable
            return this;

        },

        log: function() {
            if(console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            return this;
        },

        setLanguage: function(lang) {
            this.language = lang;

            this.validate();
            
            return this;
        },

        setGreeting: function(selector, formal) {
            if(!$){
                throw 'jQuery not loaded';
            }

            if (!selector){
                throw 'Missing jQuery selector';
            }

            var msg;

            if (formal){
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;

        }
    };

    // Function constructor
    greetr.init = function(firstname = '', lastname = '', language = 'en') {

        var self  = this;
        self.firstname = firstname;
        self.lastname = lastname;
        self.language = language;

        self.validate();

    }

    greetr.init.prototype = greetr.prototype;

    // On global object those are synonyms
    global.greetr = global.g$ = greetr;



})(window, jQuery);
