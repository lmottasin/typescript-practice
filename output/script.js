"use strict";
// generic with class
var responseType;
(function (responseType) {
    responseType["GET"] = "get";
    responseType["POST"] = "post";
    responseType["PUT"] = "put";
    responseType["PATCH"] = "patch";
    responseType["DELETE"] = "delete";
})(responseType || (responseType = {}));
const response1 = {
    status: 200,
    type: responseType.DELETE,
    data: {
        name: 'sakib',
        age: 35,
        country: 'Bangladesh'
    }
};
console.log(response1);
