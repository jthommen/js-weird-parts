// Large initialization of data

// Looks intimidating but good way to create data
// also very useful to prototype things
var people = [
    {
        firstname: 'John',
        lastname: 'Doe',
        addresses: [
            '111 Main St.',
            '222 Third St.'  
        ]
    },
    {
        firstname: 'Jane',
        lastname: 'Doe',
        addresses: [
            '333 Main St.',
            '444 Fifth St.'
        ],
        greet: function() {
            return 'Hello';
        }
    }
];

// Most common errors: unxpected string, {, }, 