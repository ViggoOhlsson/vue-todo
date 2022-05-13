<template>
    <span :class="[{struck: task.done}, 'subtask']" @click="task.done = !task.done">{{task.title}}</span>
</template>

<script lang="ts">
import SubTask from '@/models/SubTask'
import { Vue } from 'vue-class-component'
import { Prop } from "vue-property-decorator"

export default class SubTaskItem extends Vue {
    @Prop() task!:SubTask
}
</script>

<style lang="scss">
    @import "../scss/variables";
    .subtask {
        font-size: 0.85em;
        cursor: pointer;
        &:hover {
        color: rgb(151, 151, 151);
        }
    }
    .struck {
        color: rgb(151, 151, 151);
        text-decoration: line-through;
    }
</style>