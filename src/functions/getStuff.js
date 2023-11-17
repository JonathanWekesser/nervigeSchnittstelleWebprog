const { app } = require('@azure/functions');

app.http('getStuff', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        //requests: name, 

        let name = request.query.get('name') || await request.text();
        let calculation = request.query.get('calculation') || await request.text();
        let luckynumber = request.query.get('luckynumber') || await request.text();
        let favouriteanimal = request.query.get('favouriteanimal') || await request.text();
        
        if (name != '' && name != null) {
            return { body: `Wie kann man nur "${name}" heißen ... ?` };
        } else if (calculation != '' && calculation != null) {
            return { body: `Warum fragst du mich, rechne das gefälligst selber aus!` };
        } else if (luckynumber != '' && luckynumber != null) {
            luckynumber = parseInt(luckynumber);
            return { body: `Wusstest du dass deine Lucky Number addiert mit 5 "${luckynumber + 5}" ergibt?` };
        } else if (favouriteanimal != '' && favouriteanimal != null) {
            return { body: `Wusstest du, dass "${favouriteanimal}" gebraten ganz gut schmeckt?` };
        } else {
            return { body: `Ich weiß wo du wohnst, also gib lieber keine Dummheiten ein.` };
        }
    }
});
