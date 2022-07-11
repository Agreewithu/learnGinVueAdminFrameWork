<template>
    <div class="agreewithu">
        <h1>
            {{$store.state.myNum}}
        </h1>
        <button @click="del()">-</button>
        <button @click="add()"> +</button>
    </div>
</template>

<script>
    export default{
        name:"Agreewithu",
        data(){
            return{
                hello:"Hello Agreewithu"
            }
        },
        methods:{
            del(){
                this.$store.commit('delNumber')
            },
            add(){
                this.$store.commit('addNumber',{num:5})
            },
        }
    }

</script>

<style>
</style>