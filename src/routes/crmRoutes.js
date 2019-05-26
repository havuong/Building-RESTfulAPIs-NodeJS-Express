const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, (req, res, next) => {
            res.send('GET request successfull!!!');
        })

        .post((req, res) => res.send('POST request successfully !!!'));

    app.route('/contact/:contactID')
        .put((req, res) => res.send('PUT resquest successfully !!!'))

        .delete((req, res) => res.send('DELETE request successfully !!!'));
}

export default routes;