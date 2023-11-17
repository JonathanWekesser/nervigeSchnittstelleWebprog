const { app } = require('@azure/functions');

app.http('getStuff', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        //requests: name, 

        let name = request.query.get('name') || await request.text.name();
        let calculation = request.query.get('calculation') || await request.text.calculation();
        let luckynumber = request.query.get('luckynumber') || await request.text.luckynumber();
        let favouriteanimal = request.query.get('favouriteanimal') || await request.text.favouriteanimal();
        let addmoney = request.query.get('addmoney') || await request.text.addmoney();
        
        if (name != '' && name != null) {
            return { body: `Wie kann man nur "${name}" heißen ... ?` };
        } else if (calculation != '' && calculation != null) {
            return { body: `Warum fragst du mich, rechne das gefälligst selber aus!` };
        } else if (luckynumber != '' && luckynumber != null) {
            if (!isNaN(luckynumber)) {
                luckynumber = parseInt(luckynumber);
                return { body: `Wusstest du dass deine Lucky Number addiert mit 5 "${luckynumber + 5}" ergibt?` };
            } else {
                return { body: `Bist du dir bewusst, dass du eine Zahl angeben musst, damit das hier funktionieren kann?` };
            }
        } else if (favouriteanimal != '' && favouriteanimal != null) {
            return { body: `Wusstest du, dass "${favouriteanimal}" gebraten wirklich ausgezeichnet schmeckt? Mmmhhh🤌` };
        } else if (addmoney != '' && addmoney != null) {
            if (!isNaN(addmoney)) {
                addmoney = parseInt(addmoney) * 100;
                return { body: `Vielen Dank, Sie haben hiermit "${addmoney}" € an Nestle gespendet!` };
            } else {
                return { body: `Schon gewusst? Buchstaben kann man nicht auf Konten überweisen!` };
            }
        } else {
            return { body: `Ich weiß wo du wohnst, also gib lieber keine Dummheiten ein.` };
        }
    }
});
