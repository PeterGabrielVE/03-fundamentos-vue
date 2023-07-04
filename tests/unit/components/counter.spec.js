import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter';

describe('Counter Component',() => {

    /*test('debe de hacer match con el snapshot', ()=>{

        const wrapper = shallowMount( Counter );
        
        expect( wrapper.html() ).toMatchSnapshot()

    })*/

    test('h2 debe de tener el valor por defecto "Counter"', () => {
        
        const wrapper = shallowMount( Counter );

        expect( wrapper.find('h2').exists() ).toBeTruthy();

        const h2Value = wrapper.find('h2').text()

        expect( h2Value ).toBe('Counter')

    })

    test('el valor por defecto debe ser 100 en el p', () => {
      
        const wrapper = shallowMount( Counter );
        
        const pTags = wrapper.findAll('p');

        console.log(pTags)
    })
    
    
    
    
})