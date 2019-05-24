import mergeStyleConfig from '../mergeStyleConfig';

import {expect} from 'chai';

describe('Test merge style config', ()=>{ 
    it('merge with nothing', () => {
        const style = {
            a: 'b'
        };
        mergeStyleConfig(style);
        expect(style).to.deep.equal({a: 'b'});
    });
    it('merge with default', () => {
        const style = {
            a: { a:'b' } 
        };
        const def = {
            a: { c:'d' }
        };
        mergeStyleConfig(style, def);
        expect(style).to.deep.equal({a: {a: 'b' , c: 'd'}});
    });
    it('merge with lazy', () => {
        const style = {
            a: {
                a: 'b'
            }
        };
        const lazy = {
            a: [
                {
                    foo: 'bar'
                },
                '.xxx'
            ]
        };
        mergeStyleConfig(style, null, lazy);
        expect(lazy).to.deep.equal({ a: [ { foo: 'bar', a: 'b' }, '.xxx' ] });
    });
    it('replace with lazy', () => {
        const style = {
            a: {
                foo: 'b'
            }
        };
        const lazy = {
            a: [
                {
                    foo: 'bar'
                },
                '.xxx'
            ]
        };
        mergeStyleConfig(style, null, lazy);
        expect(lazy).to.deep.equal({ a: [ { foo: 'b' }, '.xxx' ] });
    });
});
