const router = require( 'express' ).Router();
const CategoryModel = require( '../models/Category' );
router.get( '/',( req, res ) => {
    CategoryModel.find({})
    .then(categories=>res.send(categories))
    .catch( error => res.status( 500 ).send( error ) )
} )
router.post( '/', ( req, res ) => {
    new CategoryModel( req.body ).save()
        .then( category => res.status( 201 ).send( category ) )
        .catch( error => res.status( 500 ).send( error ) )
} )
module.exports = router;
