


/**
 * Get values
 * @param {*} data 
 */
export const getValues = (data) => {
    return{
        type:"GET_VALUE",
        data
    };
};


/**
 * Temporary logout for now
 */
export const logout = () => {
    return {
        type:"LOGOUT",
        
    }
};