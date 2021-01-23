import { Calculator } from "../app/Calculator";


describe("Calculator", () => {
 
    it("should return a number", () => {
      //  console.log("jest is running")
    })

    it("should increment the number", () => {
        const initialValue = 1;
        const resultValue = Calculator.increase(initialValue);
        expect(resultValue).toBe(initialValue + 1);
    })
    it('should return a calculation Object logic', () => {
 
        const actualValue = {
            valueA: 1,
            mathAction: '+' ,
            valueB: 5,
            result: 6
        }
  
        const resultValue = Calculator.generateCalcSetting(1,'+',5);
        expect(actualValue).toEqual(resultValue);
    })

    it('should return a error if is invalid action',() => {
        
        try {
            Calculator.generateCalcSetting(1,'M',5);    
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message','Invalid action')
        }

    })
 })