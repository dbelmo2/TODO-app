<template>
  <div class="fs-container">
    <h1 class="fs-header" >To Do</h1>
    <form class="fs-form" id="task-form" @submit.prevent="handleSubmit">
      <label class="fs-input--label">Task:</label>
      <input
        type="text"
        class="fs-input bottom"
        name="task"
        v-model="task"
        placeholder="Enter a new task"
      />

      <button class="fs-button">
        Add task
      </button>
    </form>
    <button @Click="toggleCompleted" class="fs-button clear">
        {{showCompleted ? "Hide Completed" : "Show All"}}
    </button>
  </div>

</template>

<script>

export default {
  name: 'FormSection',
  data() {
    return {
      task: "",
      showCompleted: true
    }
  },
  methods: {
    handleSubmit: function() {
      console.log("in handleSubmit");
      this.$emit('submitted', {task: this.task})
            this.task = ""

    },
    toggleCompleted: function() {
      console.log("clearing the completed tasks");
      this.showCompleted = !this.showCompleted;
      this.$emit('toggleCompleted')
    }
    
  },
  emits: {
    toggleCompleted: null,

    submitted: (task) => {
      if(task && task.task != "") {
        console.log("validated");
        console.log("task: " + task);
        return true;
      }
      else {
        return false;
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fs-container {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #16213e;
    border-radius: 15px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    height: 500px;

  }
  .fs-header {
    font-family: 'Caveat', cursive;
    font-size: 100px;
    color: white;

  }
  .fs-input {
    padding: 10px 10px;
    border-style: none;
    margin-bottom: 5px;
    border-radius: 6px;
  
  }
  .fs-input--label {
    color: white;
  }
  .fs-form {
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
  }
  .fs-button {
    background-color: #e94560;
    border-style: none;
    height: 40px;
    border-radius: 6px;
    color: white;
    font-weight: bold;
    width: 200px;
  }
  .fs-button:hover {
    background-color: #ca1835;
    box-shadow: #000 0px 10px 20px -12px;
    transform: scale(1.035);
    transition: all 0.3s ease-in;
  }
  .bottom {
    margin-bottom: 20px
  }
  
  @media screen and (max-width: 1025px) {
    .fs-container {
      border-top-right-radius: 15px;
      border-bottom-left-radius: 0px;
    }

  }
  @media screen and (max-width: 600px) {
      .fs-container {
          width: 90vw;
      }
  }
  

</style>
