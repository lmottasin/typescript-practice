// generic with class

interface APIresponse<T> {
    status: number;
    type: string;
    data: T
}

const response1 : APIresponse<object> = {
    status: 200,
    type: 'GET',
    data: {
        name: 'sakib',
        age: 35,
        country: 'Bangladesh'
    }
}

console.log(response1.data.name);



