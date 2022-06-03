import { isValidCheck, Response } from ".";


let sut: Response;

describe('isValidCheck', () => {

   beforeEach(() => {
      sut = {
         result: false,
         error: ['']
      }
   })
   test('Deve retornar false caso a senha seja menor que 16 ou maior que 32', () => {
      sut = isValidCheck('Gau74J^Zf6(>x4w')
      expect(sut.result).toEqual(false)
      expect(sut.error).toEqual(["tamanho invalido"])
   })
   test('Deve retornar false caso a senha não possua caracteres especiais', () => {
      sut = isValidCheck('dX5sWaY6tknDUHtL')
      expect(sut.result).toEqual(false)
      expect(sut.error).toEqual(["Não tem caracteres especiais"])
   })
   test('Deve retornar false caso a senha não possua letra maiscula', () => {
      sut = isValidCheck('1eu2nao1tenholetr@maiscul@')
      expect(sut.result).toEqual(false)
      expect(sut.error).toEqual(["Não tem letra maiuscula"])
   })
   test('Deve retornar false caso a senha não possua letra minuscula', () => {
      sut = isValidCheck('EUNÃOTENH@LETR@MINISCULA')
      expect(sut.result).toEqual(false)
      expect(sut.error).toEqual(["Não tem letra minuscula"])
   })
   test('Deve retornar false caso a senha não possua letra minuscula', () => {
      sut = isValidCheck('EuTenhoSequ123abc@@decaracteres')
      expect(sut.result).toEqual(false)
      expect(sut.error).toEqual(["tem sequencia de caracteres"])
   })


   test('Deve retornar true caso a senha atenda todos os requisitos', () => {
      sut = isValidCheck("rZpy*D95&WBE'Z&B")
      expect(sut.result).toEqual(true)
      expect(sut.error).toEqual([])
   })



})
