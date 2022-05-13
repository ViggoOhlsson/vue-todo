<template>
    <div class="item">
        <div class="top">
            <span>{{item.title}}</span>
            <button @click="remove"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="subtasks">
            <SubTaskItem v-for="(t, i) in item.subtasks" :key="i" :task="t"/>
            <input type="text" placeholder="Add Subtask" v-model="input" @change="addSubtask()"/>
        </div>
    </div>

</template>

<script lang="ts">
import SubTask from '@/models/SubTask'
import { Options, Vue } from 'vue-class-component'
import { Prop } from "vue-property-decorator"
import Todo from "../models/Todo"
import SubTaskItem from "./SubTaskItem.vue"

@Options({
    components: {
        SubTaskItem
    }
})

export default class Header extends Vue {
    @Prop() item!:Todo
    input = ""

    remove() {
        console.log("removed", this.item.title)
        this.$emit("removeTodo")
    }
    addSubtask() {
        this.item.subtasks.push(new SubTask(this.input))

        this.input = ""
    }
}
</script>

<style lang="scss">
    @import "../scss/variables";
    .item {
        padding: 10px;
        display: flex;
        flex-direction: column;
        background: $primary-color;
        color: $secondary-color;
        gap: 10px;
        .description {
            font-size: 0.85em;
            color: rgb(197, 197, 197);
            margin: 5px 0 0 ;
        }
        .top {
            display: flex;
            justify-content: space-between;
            button {
                background: rgb(141, 31, 31);
                border: none;
                color: $secondary-color;
                height: 25px;
                width: 25px;
                font-size: 1em;
                cursor: pointer;
                &:hover {
                    background: rgb(116, 25, 25);
                }
            }
        }
        .subtasks {
            display: flex;
            flex-direction: column;
            gap: 5px;

        }
    }
</style>