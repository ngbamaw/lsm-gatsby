type func = (i: number) => any;

export const executeWithResult = (count: number, fun: func) => {
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push(fun(i));
    }
    return result;
}