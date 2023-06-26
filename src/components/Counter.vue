<template>
  <h2>Counter</h2>
  <p>{{ counter }} <sup>2</sup> = {{ counter * counter }} </p>

  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }} </p>
</template>

<script>
export default {
    data(){
        return{
            counter : 5
        }
    },
    methods :{
        getSquareValue(){
            return this.counter * this.counter
        }
    },
    computed:{
        squareCounter(){
           console.log('computed squareConuer') ;
           return this.counter * this.counter;
        }
    }
}
</script>

<style>

</style>