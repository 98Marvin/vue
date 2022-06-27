<template>
    <div>
        <h3 class="my-3 font-bold uppercase underline">Tasks</h3>
        <div class="grid md:grid-cols-3 lg:grid-cols-3 gap-4">
            <div @click="completeTask(task.id)" v-for="task in allTasks"  :key="task.id" :class="{'bg-green-400': task.completed}" class="font-mono text-xl bg-red-400 hover:bg-amber-400 shadow-lg transition duration-700 px-6 pt-2 pb-10 rounded-lg cursor-pointer relative">
               <div>
                  <span class="font-bold"> Title:</span> {{task.title}}
               </div>
               <div>
                   <span class="font-bold"> Description:</span>  {{task.description}}
               </div>
               <div>
                   <span class="font-bold"> Date Added:</span>{{task.date_added}}
               </div>
               <div>
                   <span class="font-bold text-red-700"> Deadline:</span> {{task.deadline}}
               </div>
               <div v-show="task.completed">
                   <span class="font-bold"> Completion Date:</span> {{task.date_completed}}
               </div>
               
             
               
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "TasksItem",

    computed: mapGetters(['allTasks']),

    methods: {
        ...mapActions(['fetchTasks', 'markComplete'])
    },

    completeTask() {
            // this.markComplete(task.id)
        },

    created() {
        this.fetchTasks(); 
    }
}
</script>

<style>

</style>