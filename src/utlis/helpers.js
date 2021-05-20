const helpers = {
    objectToUrl: (obj)=> {
        return Object.keys(obj).map((key) => {
            return key + '=' + obj[key];
        }).join('&');
    }
};
export default helpers;
