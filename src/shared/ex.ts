
// function stringNew (str1:string, str2:string): string {
//     return str1 + str2
// }
// const str1 = stringNew('Hello', 'World');

// console.log(str1)
// //------------------
// interface InterfaceHometask {
//     howIDoIt: string;
//     simeArray: Array<number | string> ;
//     withData: Array<object>;
// }
// const MyHometask: InterfaceHometask = {
//     howIDoIt: "I Do It Wel",
//     simeArray: ["string one", "string two", 42],
//     withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
// }


// //--------------------
// interface MyArray<T> {
//     [N: number]: T;
//     reduce<U>(fn: (el1: T, el2: T) => U, number: T ):T;
// }

// const MyArray: MyArray<number> = [1,2,3]
// let initialValue=0;


// MyArray.reduce((accumulator, value) => accumulator + value,  initialValue);

// [1,2,3].reduce((accumulator, value) => accumulator + value, 0);

// //----------------------

// interface IHomeTask {
//     data: string;
//     numbericData: number;
//     date: Date;
//     externalData: {
//         basis: number;
//         value: string;
//     }
// }

// type MyPartial<T> = {
//   [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
// }

// const homeTask: MyPartial<IHomeTask> = {
//     externalData: {
//         value: 'win'
//     }
// }

