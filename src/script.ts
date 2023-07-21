// generic with class

enum responseType{
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    PATCH = 'patch',
    DELETE  = 'delete',
}
interface APIresponse<T> {
    status: number;
    type: responseType;
    data: T
}

const response1 : APIresponse<object> = {
    status: 200,
    type: responseType.DELETE,
    data: {
        name: 'sakib',
        age: 35,
        country: 'Bangladesh'
    }
}

console.log(response1);



