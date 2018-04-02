

module.exports = {

    filter_num: (events, num) => {
        const filter_events = events.slice(0, num);
        const result = filter_events.sort((a, b) => {
            return b.capacity - a.capacity;
        });

        return result;
    },
};