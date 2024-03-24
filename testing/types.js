const PI = 3.14;

const logStuff = (v) => {
    switch(typeof v){
        case "string":
            console.log(`this string is, ${v}`);
        break;

        case "number":
            console.log(`this number is, ${v}`);
        break;

        case "function":
            console.log(`this function is, ${v}`);
        break;

        case "object":
            console.log(`this object is, ${v}`);
        break;

        case "boolean":
            console.log(`this bool is, ${v}`);
        break;
    }
};

const student = {
    name : "syafii",
    umur : 17,
    talent : "coding",
    print(){console.log(`siswa ini adalah ${this.name}, dia ${this.umur} tahun, dan memiliki bakat ${this.talent}`)}
}

module.exports.PI = PI;
module.exports.logStuff = logStuff;
module.exports.student = student;