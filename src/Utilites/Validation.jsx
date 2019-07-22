export const required = value => {
    if (value) return undefined;


    return "it is required field"
};



export const maxLengthCreator = (maxlength) => (value) => {
    if  (value && value.length > maxlength)  return `Max length ${maxlength} symbols `;
    return undefined
};


export const minLengthCreator = (minLength) => (value) => {
    if (value && value.length < minLength) return `Min length ${minLength} symbols`;
    return undefined;
};





