export const getLogo = (event) => {
    return event.logo ? event.logo.url : 'http://via.placeholder.com/350x150'
};

export const getDescription = (event) => {
    return event.description.text ? event.description.text : 'No Description'
};

export const getTitle = (event) => {
    return event.name.text ? event.name.text : 'No title';
};

export const getDate = (event) => {
    return event.start.local ? event.start.local : 'No date provided';
};