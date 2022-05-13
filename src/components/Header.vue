<template>
  <header>
      <span class="site-title">Todo List</span>
      <button @click="displayDropdown = !displayDropdown"><i class="fa-solid fa-plus"></i></button>
      <div :class="[{visible: displayDropdown }, 'todo-dropdown']">
          <input type="text" @change="addTodo()" v-model="input" placeholder="Add Task" @input="log()"/>
      </div>

  </header>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Header extends Vue {
    displayDropdown = false
    input = ""

    log() {
        console.log(this.input)
    }

    addTodo() {
        this.$emit("add", this.input)
        this.input = ""
    }
}
</script>

<style lang="scss">
    @import "../scss/variables";
    header {
        background: $primary-color;
        height: 75px;
        display: flex;
        justify-content: center;
        gap: 20px;
        position: relative;
        .site-title {
            font-size: 24pt;
            color: $secondary-color;
            display: block;
            align-self: center;
        }
        button {
            background: none;
            border: solid $secondary-color 2px;
            border-radius: 6px;
            height: 30px;
            width: 30px;
            align-self: center;
            color: $secondary-color;
            cursor: pointer;
            &:hover {
                color: greenyellow;
                border-color: greenyellow;
            }
        }
        .todo-dropdown {
            overflow: hidden;
            max-height: 0;
            position: absolute;
            bottom: 0;
            transform: translate(0, 99%);
            background: $primary-color;
            input {
                padding: 5px;
                margin: 10px;
            }
        }
        .visible {
            max-height:fit-content;
        }
    }
</style>