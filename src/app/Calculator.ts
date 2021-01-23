export class Calculator {
    public static increase(value: number) {
        return value + 1;
    }
    public static generateCalcSetting(valueA: number, action: string, valueB: number) {
        let result : number;
        switch (action) {
            case "+":
                result = valueA + valueB;
                break;
            case "-":
                result = valueA - valueB;
                break;
            case "/":
                result = valueA / valueB;
            default:
                result = 0;
        }
       
  
        return  {
            valueA,
            mathAction: action,
            valueB,
            result
        }
    }
 
 }