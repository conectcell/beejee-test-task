const dictionaries = {
    statuses: {
        '0': "задача не выполнена",
        '1': "задача не выполнена, отредактирована админом",
        '10': "задача выполнена",
        '11': "задача отредактирована админом и выполнена"
    },
    sortTypes: {
        0: {
            name: "Время добавления по возрастанию",
            sort_field: 'id',
            sort_direction: 'asc'
        },
        1: {
            name: "Время добавления по убыванию",
            sort_field: 'id',
            sort_direction: 'desc'
        },
        3: {
            name: "Имя пользователя по возрастанию",
            sort_field: 'username',
            sort_direction: 'asc'
        },
        4: {
            name: "Имя пользователя по убыванию",
            sort_field: 'username',
            sort_direction: 'desc'
        },
        5: {
            name: "Почта пользователя по возрастанию",
            sort_field: 'email',
            sort_direction: 'asc'
        },
        6: {
            name: "Почта пользователя по убыванию",
            sort_field: 'email',
            sort_direction: 'desc'
        },
        7: {
            name: "Статус по возрастанию",
            sort_field: 'status',
            sort_direction: 'asc'
        },
        8: {
            name: "Статус по убыванию",
            sort_field: 'status',
            sort_direction: 'desc'
        }
    }
};
export default dictionaries;
