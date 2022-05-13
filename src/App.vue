<template>
    <Header @add="add($event)"/>
    <div class="todo-grid">
        <TodoItem :class="[]" v-for="(t, i) in todoList" :key="i" :item="t" @removeTodo="remove(i)"/>
    </div>
    <div class="logs">
      <div v-for="(l, i) in logs" :key="i">
        <span>{{l}}</span>
      </div>
    </div>
    <div class="finished-tasks">
      <h3>Finished Tasks</h3>
      <p v-for="(f,i) in finished" :key="i">
        {{f.title}}
        <span v-for="(st, i) in f.subtasks" :key="i">{{st.title}}</span>
      </p>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from './components/Header.vue';
import TodoItem from './components/TodoItem.vue';
import Todo from './models/Todo';

@Options({
  components: {
    Header,
    TodoItem
  },
})
export default class App extends Vue {
  todoList:Todo[] = [
    new Todo("Eat Breakfast"),
    new Todo("Brush Teeth"),
    new Todo("Make Bed")
  ]
  finished:Todo[] = []
  logs:string[] = []

  remove(i:number) {
    let todo = this.todoList[i]
    todo.done = true
    this.logs.push("finished task: " + todo.title)
    this.todoList.splice(i, 1)
    
    this.finished.push(todo)
  }
  add(t:string) {
    this.todoList.push(new Todo(t))
    this.logs.push("added task: " + t)
  }
}
</script>

<style lang="scss">
  @import "./scss/variables";
  @import "./scss/mixins";

    body {
        margin: 0;
        font-family: "Quicksand", sans-serif;
        font-size: 14pt;
    }
    #app {
        display: flex;
        flex-direction: column;
    }
    .todo-grid {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      margin: 100px 20px;
      @include desktop {
        margin: 100px 0;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        width: 800px;
        align-self: center;
      }
    }
    .logs {
      padding: 10px 0;
      background: black;
      color: $secondary-color;
      height: 500px;
      font-family: monospace;
      overflow: auto;
        margin: 20px 10px;
      span {
        width: 800px;
      }
      @include desktop {
        margin: 100px 0;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        width: 800px;
        align-self: center;

      }
    }
    .finished-tasks {
      margin: 0 0 40px;
      background: $primary-color;
      color: white;
      margin: 20px;
      h3 {
        margin: 20px;
      }
      p {
        margin: 20px;
        span {
          margin: 0 0 0 10px;
          color: lightgray;
          text-decoration: line-through;
        }
      }
      @include desktop {
        padding: 0;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        width: 800px;
        align-self: center;
      }
    }
</style>
