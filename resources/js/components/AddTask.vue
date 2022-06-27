<template>
  <div>
      <h3>Create New Task</h3>
      <div class="">
        <form>
            <div><input class="rounded-md p-1 my-2" type="text" v-model="task.title" placeholder="Title"></div>      
            <div><input class="rounded-md p-1 my-2" type="text" v-model="task.description" placeholder="Description"></div>      
            <div><input class="rounded-md p-1 my-2" type="date" v-model="task.deadline" placeholder="Deadline"></div>      
            <div><input @click.prevent="createTask" class="font-mono bg-green-500 px-2 cursor-pointer hover:bg-amber-400 hover:text-white my-2 rounded-md" type="submit" value="Add"></div>
        </form>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

let id = 0
export default {
    name: 'AddTask',

    data () {
        return {
        task: {
          id: id++,
          title: '',
          description: '',
          completed: false,
          date_added: new Date().toLocaleDateString(),
          date_completed: ''
      },
        }
    },

    methods: {
        ...mapActions(['addTask']),

        createTask() {
            this.addTask(this.task).then(() => this.task={})
        }
    }


}
</script>

<style>

</style>