const initState = {
    projects: [
        {id: 1, title: 'pasta', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eos iusto minima, nulla placeat quas vel! Alias asperiores cumque dolorem eaque iusto nam nihil possimus! Fuga quisquam repellat suscipit voluptas.'},
        {id: 2, title: 'pizza', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eos iusto minima, nulla placeat quas vel! Alias asperiores cumque dolorem eaque iusto nam nihil possimus! Fuga quisquam repellat suscipit voluptas.'},
        {id: 3, title: 'soup', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eos iusto minima, nulla placeat quas vel! Alias asperiores cumque dolorem eaque iusto nam nihil possimus! Fuga quisquam repellat suscipit voluptas.'}
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('created project error:', action.err);
            return state;
        default: return state;
    }
};

export default projectReducer;