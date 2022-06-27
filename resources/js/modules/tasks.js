import axios from 'axios'

const state = {
    tasks: [
        // {
        //     id: 1,
        //     title: 'Task Three',
        //     description: 'Third Task',
        //     date_added: new Date(),
        //     date_completed: '',
        //     deadline: '20-02-2022',
        //     completed: true,
        // }
    ]
}

const getters = {
    allTasks (state) {
        return state.tasks
    }
}

const  actions = {
    async fetchTasks({ commit }) {
        const response = await axios.get('https://tychak.github.io/')

        commit('setTasks', response.data)
    },

    addTask(context, task) {
        // forward payload to 'dispatch' method
        context.commit('addTask', task);
      },
}

const mutations= {
    addTask: (state, task) => state.tasks.push(task),

    setTasks (state, tasks) {
        // mutate state
        state.tasks = tasks
      }
}

export default {
    state,
    getters,
    actions,
    mutations
}