const productsModel = require('../models/products')

async function get(req, res){

    const { id } = req.params

    const obj = id ? { _id: id } : null

    const products = await productsModel.find(obj)

    res.send(products)
}


async function post(req,res) {
    const {
        name,
        brand,
        price,
    } = req.body

const product = new productsModel({
    name,
    brand,
    price,
})

    product.save()
    res.send({
        message: 'success'
    })
}

async function put(req, res){
    const { id } = req.params


    // RETORNA UM PRODUTO ATUALIZADO 
    const product = await productsModel.findOneAndUpdate({ _id: id}, req.body, { new: true})
     
    res.send({
        message: 'Success',
        product,
    })

    /* METODO QUE EDITA MAS NAO ATUALIZA
    
    const product = await productsModel.findOne({ _id: id})

    await product.updateOne(req.body)

    res.send({
        message: 'success',
        product,
    }) */
}

async function remove(req, res){
    const { id } = req.params

    const remove = await productsModel.deleteOne({ _id: id })

    let message = 'success'

    if(!remove.ok){
        message = 'error'
    }

    res.send({
        message: 'success'
    })
}

module.exports = {
    get,
    post,
    put,
    remove,
}