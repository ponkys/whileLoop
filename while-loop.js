let arr = [1,2,3,4,5];

class Test {
    getBigger() {
        arr = this.arr;
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
test.arr = arr;
test.getBigger();
