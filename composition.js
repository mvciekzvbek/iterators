const compose = (...fns) => 
    (arg) =>
        fns.reduce(
            (composed, f) => f(composed),
            arg
        )

// var compose = function (...fns) {
//     return function (arg) {
//         return fns.reduce(
//             function (composed, f) {
//                 return f(composed)        
//             },
//             arg
//         )
//     }
// }

const firstFunction = (date) => {
    console.log(`First: ${date}`);
    return `First: ${date}`
}

const secondFunction = (date) => console.log("Second: " + date)

const both = compose(
    firstFunction,
    secondFunction
);

both(new Date());