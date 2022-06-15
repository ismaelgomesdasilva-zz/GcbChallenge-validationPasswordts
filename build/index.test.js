"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
let sut;
describe('isValidCheck', () => {
    beforeEach(() => {
        sut = {
            result: false,
            error: ['']
        };
    });
    test('Deve retornar false caso a senha seja menor que 16 ou maior que 32', () => {
        sut = (0, _1.isValidCheck)('Gau74J^Zf6(>x4w');
        expect(sut.result).toEqual(false);
        expect(sut.error).toEqual(["tamanho invalido"]);
    });
    test('Deve retornar false caso a senha não possua caracteres especiais', () => {
        sut = (0, _1.isValidCheck)('dX5sWaY6tknDUHtL');
        expect(sut.result).toEqual(false);
        expect(sut.error).toEqual(["Não tem caracteres especiais"]);
    });
    test('Deve retornar false caso a senha não possua letra maiscula', () => {
        sut = (0, _1.isValidCheck)('1eu2nao1tenholetr@maiscul@');
        expect(sut.result).toEqual(false);
        expect(sut.error).toEqual(["Não tem letra maiuscula"]);
    });
    test('Deve retornar false caso a senha não possua letra minuscula', () => {
        sut = (0, _1.isValidCheck)('EUNÃOTENH@LETR@MINISCULA');
        expect(sut.result).toEqual(false);
        expect(sut.error).toEqual(["Não tem letra minuscula"]);
    });
    test('Deve retornar false caso a senha não possua letra minuscula', () => {
        sut = (0, _1.isValidCheck)('EuTenhoSequ123abc@@decaracteres');
        expect(sut.result).toEqual(false);
        expect(sut.error).toEqual(["tem sequencia de caracteres"]);
    });
    test('Deve retornar true caso a senha atenda todos os requisitos', () => {
        sut = (0, _1.isValidCheck)("rZpy*D95&WBE'Z&B");
        expect(sut.result).toEqual(true);
        expect(sut.error).toEqual([]);
    });
});
