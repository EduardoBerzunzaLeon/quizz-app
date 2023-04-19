import { getColor } from "../../../assets";

describe('Color Test', () => { 

    it('Should return "success"', () => {
        let colorString = getColor(true, 'isTest', 'isTest');
        expect(colorString).toBe('success');
        colorString = getColor(true, 'notIsEqual', 'isTest');
        expect(colorString).toBe('success');
    });

    it('Should return "error"', () => {
        const colorString = getColor(false, 'isTest', 'isTest');
        expect(colorString).toBe('error');
    });

    it('Should return "info"', () => {
        let colorString = getColor(true, '', 'isTest');
        expect(colorString).toBe('info');
        colorString = getColor(false, 'notIsEqual', 'isEqual');
        expect(colorString).toBe('info');
    });

    

 })