export const updateObjInArray = (items, itemsId, objPropName, newObjPropName) => {
    return items.map(u => {
        if (u[objPropName] === itemsId)
            return {...u, ...newObjPropName};
        return u
    })
};
