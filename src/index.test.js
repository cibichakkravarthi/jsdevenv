import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('My first test',() => {
    it('Should pass',() =>  {

        expect(true).to.equal(true);
    });

    describe('JSDOM testing',() => {
        it('hello world testing',(done) => {

            const index = fs.readFileSync('./src/index.html', 'utf-8');

            jsdom.env(index, function(err,window){
                    const h1 = window.document.getElementsByTagName("h1")[0];
                    expect(h1.innerHTML).to.equal("HelloWorld");
                    done();
                    window.close();

            });
        });


    } );


});