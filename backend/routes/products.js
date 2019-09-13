const router = require( 'express' ).Router();
const ProductModel = require( '../models/Product.js' );
const upload=require('../config/multer');
/* GET users listing. */
router.get( '/', ( req, res, next ) => {
    ProductModel.find( {} )
        .then( products => res.send( products ) )
        .catch( error => res.status( 500 ).send( error ) )
} );
router.get( '/:id', ( req, res, next ) => {
    ProductModel.find( { _id: req.params.id } )
        .then( product => res.send( product ) )
        .catch( error => res.status( 500 ).send( error ) )
} );
router.post( '/',upload.single('image'), ( req, res ) => {
    new ProductModel( {...req.body,imagePath:req.file.filename} ).save()
        .then( product => res.status( 201 ).send( product ) )
        .catch( error => res.status( 500 ).send( error ) )
} )
router.patch( '/:id', ( req, res ) => {
    ProductModel.findByIdAndUpdate( req.params.id, req.body, { new: true } )
        .then( product => res.send( product ) )
        .catch( error => res.status( 500 ).send( error ) )
} )
router.delete( '/:id', ( req, res ) => {
    ProductModel.findByIdAndDelete(  req.params.id )
        .then( product => res.send( product ) )
        .catch( error => res.status( 500 ).send( error ) )
} )
module.exports = router;
