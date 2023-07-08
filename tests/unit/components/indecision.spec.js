import { shallowMount } from '@vue/test-utils';
import Indecision from '@/components/Indecision.vue';

describe('Indecision component', () =>{

    let wrapper;

    beforeEach( () =>{
        wrapper = shallowMount( Indecision )
    })

    test('debe de hacer match con el snapshot', () =>{

        expect( wrapper.html() ).toMatchSnapshot()

    })

    test('Escribir en el input no debe de disparar nada console.log', () =>{

    })

    test('Escribir el simbolo  de "?" debe de disparar el fetch', () =>{

    })

    test('pruebas en getAnswer', () =>{

    })

    test('pruebas en getAnswer - Fallo en el API', () =>{

    })



})