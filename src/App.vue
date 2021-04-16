<template>
  <div class="container">
    <div class="wrapper">
      <FormSection @toggleCompleted="onToggle" @submitted="onSubmit"> </FormSection>
      <TaskSection :tasks="tasks"> </TaskSection>
    </div>
  </div>
</template>

<script>
  import FormSection from './components/FormSection.vue'
  import TaskSection from './components/TaskSection.vue';
  import { db } from './services/firebase';

  export default {
    name: 'App',
    data() {
      return {
        tasks: [],
        allTasks: [],
        showCompleted: true
      }
    },
    components: {
      FormSection,
      TaskSection,
      db
    },
    methods: {
      // Pushes task object to firebase 
      onSubmit: async function({task}) {

          if(task === "") return;

          try {
            await db.ref("tasks").push({
              task: task,
              completed: false
            });
          } catch (error) {
            console.error(error);
          }
      },
      // Toggles logic for displaying completed tasks
      onToggle: function() {
        if(this.showCompleted === false) {

          this.tasks = this.allTasks;
          this.showCompleted = true;
          console.log("in onToggle, showCompleted=false: tasks: " + this.tasks);
        }
        else {

          this.tasks = this.allTasks.filter(item => item.completed === false
      );
          console.log("in onToggle, else: tasks: " + this.tasks);
          this.showCompleted = false;
        }
      }
    },
    // Reads tasks from firebsae
    created: function() {
          db.ref("tasks").on("child_added", snapshot => {
                let newTask = snapshot.val();
                newTask.fireId = snapshot.key
                this.allTasks.push(newTask);
              
                this.tasks = this.showCompleted ? this.allTasks : this.allTasks.filter(item => item.completed === false);

            
          });
    }
  }
  </script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #1a1a2e;
  height: 100vh;
  width: 100vw;

}
.wrapper {
  display: flex;
  flex-direction: row;
  box-shadow: #000 0px 20px 30px -12px;
  border-radius: 15px;
  align-self: center;

}
@media screen and (max-width: 1025px) {
  .wrapper {
    flex-direction: column;
  }
  .container { 
    height: 100%;
    padding: 30px 0px;
    width: 100%;
  }
}


</style>
