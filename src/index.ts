export class telomer {


    private isOdd(n: number) {
        return (n % 2);
    }

    public addTelomer(data: Array<number>){
        let total = 0;
        data.forEach(n => {
            total += n 
        });
    
        data.unshift(this.isOdd(total));
        return data;
    }

    public checkTelomer(data: Array<number>) : boolean{
        let result : boolean = false;
        if (data[0] == 0 || data[0] == 1){
            let total = 0;
            for (let index = 1; index < data.length; index++) {
                total += data[index];
                
            }
            if (this.isOdd(total) == data[0]) result = true;
        }
        return result;
    }

    constructor() {
    }
}