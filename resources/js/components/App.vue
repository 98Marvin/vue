<template>
    <div class="container mx-auto py-0 px-8">
      <AddTask />
      <TasksItem />
    </div>
</template>

<script>
import TasksItem from './TasksItem.vue'
import AddTask from './AddTask.vue'

export default {
  methods: {
  },
  data () {
    return {
      name: 'Marvin'
    }
  },
  name: 'App',
  components: {
    TasksItem,
    AddTask
  }
}
</script>

<style>
</style>
