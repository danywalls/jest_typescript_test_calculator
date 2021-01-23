export class Calculator {
    static validActions: Array<string> = ['+',"-","/"];
    public static increase(value: number) {
        return value + 1;
    }
    public static generateCalcSetting(valueA: number, action: string, valueB: number) {

        if(!this.validActions.includes(action)){
            throw new Error("Invalid action");
        }
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