<template>
    <div class="ts-container">
        <div class="ts-wrapper">
            <ul id="v-for-ul" class="ts-ul">
                <li class="ts-ul--li" v-for="task in tasks" :key="task.fireId">
                    <h1>{{task.task}}</h1>
                    <input @change="handleCheckBox(task)" class="ts-ul--li--checkbox" type="checkbox" v-model="task.completed">
                </li>
            </ul>
            
        </div>
    </div>
</template>

<script>
    import { db } from '../services/firebase';

    export default {
        name: 'TaskSection',
        props: ['tasks'],
        components: db,
        data() {
            return {
                

            }
        },
        methods: {
            onSubmit: function({task, date}) {
                newTask = {task: task, date: date};
                console.log("Inside task section, new task submitted");
            },
            handleCheckBox: function(task) {
                console.log(task);
                db.ref('tasks/' + task.fireId ).set({
                    completed: true,
                    task: task.task,
                    fireId: task.fireId
                });
                
            }
        }
    }
</script>

<style scoped>
    .ts-container {
        background-color: #0f3460;
        height: 500px;
        width: 500px;
        border-radius: 15px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;

    }
    .ts-wrapper {
        background-color: rgba(0,0,0,0.2);
        border-radius: 15px;
        padding: 10px 10px;
        width: 480px;
        height: 480px;
        overflow: scroll;

    }
    .ts-wrapper::-webkit-scrollbar {
        display: none;
    }

    .ts-ul--li {
        border-bottom-style: solid;
        border-bottom-width: 2px;
        border-bottom-color:rgba(233, 69, 96, 0.25) ;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding: 5px 15px;
        font-size: small;
        color: white;
        height: 100%;
        
        word-break: break-all;

    }
    .ts-ul--li--checkbox {
        width: 30px;
        height: 30px;
        text-decoration: none;
        background-color: blue;
    }
    .ts-ul--li--checkbox:checked:before {
        background-color: red;
    }
    @media screen and (max-width: 1025px) {
        .ts-container {
            border-top-right-radius: 0px;
            border-bottom-left-radius: 15px;
        }
        
    }
    @media screen and (max-width: 600px) {
        .ts-container {
            width: 90vw;
        }
        .ts-wrapper {
            width: 85vw;
        }
    }


</style>
