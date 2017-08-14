let arr123 = [1,2,3,4,5];

class Test {
    getBigger() {
        let arr = this.arr;
        let elem;
        while (elem !== 5) {
            arr.forEach((element) => {
                elem = element;
            })
        }
        console.log(elem)
    }
}

test = new Test;
test.arr = arr123;
test.getBigger();
