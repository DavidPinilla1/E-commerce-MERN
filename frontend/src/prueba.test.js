import { suma, resta } from './prueba';
describe( 'It tests the aritmetic functions', () => {
    it( 'should sum the two arguments and return the result', () => {
        expect( suma( 2, 3 ) ).toBe( 5 )
    } )
    it( 'should substract the two arguments and return the result', () => {
        expect( resta( 2, 3 ) ).toBe( -1 )
    } )
} )
