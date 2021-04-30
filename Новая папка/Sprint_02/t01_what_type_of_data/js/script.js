let typeNumber = 100;
let bigInt = 1230987n;
let string = "just text and nothihg at all";
let boolean = true;
let nothing = null;
let object = {name:"Anatoliy", age:"39"};
let sym = Symbol();
let fanc = function () {};



alert (typeNumber + "_is_data_type_" + typeof(typeNumber) +
"\n" + string + "_is_data_type_" + typeof(string) +
"\n" + bigInt + "_is_data_type_" + typeof(bigInt) +
"\n" + boolean + "_is_data_type_" + typeof(boolean)+
"\n" + nothing + "_is_data_type_is_official_mistake_" + typeof(nothing)+
"\n" + object + "_is_data_type_" + typeof(object) +
"\n" + "Symbol()" + "_is_data_type_" + typeof(sym) +
"\n" + "fanc" + " is_data_type " + typeof(fanc)
)


