const intToRoman = function(num) {
    let res=[];

    let number=num;

    if(number >= 1000) {
        for (i=0; i<Math.floor(number/1000);i++) {
            res.push('M');
        }
        number = number % 1000;
    }


    if(number>=900) {
        res.push('CM');
        number = number % 900;
    }


    if(number >=500) {

            for (i=0; i<Math.floor(number/500);i++) {
                res.push('D');
            }
            number = number % 500;

        }
    

    if(number>=400) {
            res.push('CD');
            number = number % 400;
        }


    if(number >=100) {
     
        for (i=0; i<Math.floor(number/100);i++) {
            res.push('C');
        }
        number = number % 100;
    }
    


    if(number>=90) {
        res.push('XC');
        number = number % 90;
    }

   

    if(number >=50) {
        
        for (i=0; i<Math.floor(number/50);i++) {
            res.push('L');
        }
        number = number % 50;
    }


    if(number>=40) {
        res.push('XL');
        number = number % 40;
    }


    if(number >=10) {
        
        for (i=0; i<Math.floor(number/10);i++) {
            res.push('X');
        }
        number = number % 10;
    }


    if(number===9) {
        res.push('IX');
        number = number % 9;
    }


    if(number >=5) {
        for (i=0; i<Math.floor(number/5);i++) {
            res.push('V');
        }
        number = number % 5;
    }

    if(number>=4) {
        res.push('IV');
        number = number % 4;
    } 

    if(number >=1) {
        for (i=0; i<Math.floor(number/1);i++) {
            res.push('I');
        }
        number = number % 1;
    }

    if(number==0) return res.join('');

    
}