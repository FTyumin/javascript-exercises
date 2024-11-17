const fibonacci = function(n) {
    if(n<0)
        return "OOPS";
    if(n==0)
        return 0
    else if(n==1 || n==2) {
        return 1;
    }
    else {
        sum=0;
        n1=1;
        n2=1;
        count=2;
        while(count!=n) {
            sum=n1+n2;
            n1=n2;
            n2=sum;
            count++;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = fibonacci;
