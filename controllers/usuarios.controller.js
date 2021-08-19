const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {

    //const query = req.query;
    const {q, nombre='no name', page = 1,limit} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        page,
        limit
    });
}

const usuariosPut = (req = request, res) => {

    const {id} = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
}


const usuariosPost = (req, res) => {

    //const body = req.body;
    const {nombre,edad} = req.body;
    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
}


const usuariosDelete = (req, res) => {

    
    res.json({
        msg: 'delete API - controlador'
    });
}


const usuariosPatch = (req, res) => {

    
    res.json({
        msg: 'patch API - controlador'
    });
}


module.exports = {
    usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch
}