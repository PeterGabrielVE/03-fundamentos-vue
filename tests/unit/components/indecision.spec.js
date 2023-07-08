import { shallowMount } from '@vue/test-utils';
import Indecision from '@/components/Indecision.vue';

describe('Indecision component', () =>{

    let wrapper;
    let clgSpy;

    beforeEach( () =>{
        wrapper = shallowMount( Indecision )

        clgSpy = jest.spyOn( console, 'log' )
    })

    test('debe de hacer match con el snapshot', () =>{

        expect( wrapper.html() ).toMatchSnapshot()

    })

    test('Escribir en el input no debe de disparar nada console.log', async() =>{

        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )
        const input = wrapper.find('input')
        await input.setValue('Hola Mundo')

         expect( clgSpy ).toHaveBeenCalledTimes(1)
         expect( getAnswerSpy ).not.toHaveBeenCalled()

    })

    test('Escribir el simbolo  de "?" debe de disparar el fetch', () =>{

    })

    test('pruebas en getAnswer', () =>{

    })

    test('pruebas en getAnswer - Fallo en el API', () =>{

    })



})