const routes = (app) =>{
    app.route('/contact')
    .get((req,res)=>res.send('GET resquest successfully !!!'))

    .post((req,res)=>res.send('POST request successfully !!!'));

    app.route('/contact/:contactID')
    .put((req,res)=>res.send('PUT resquest successfully !!!'))

    .delete((req,res)=>res.send('DELETE request successfully !!!'));
}

export default routes;