<template>
  <div class="flex flex-row">
    <FormKit type="time" value="startTime" label="Start Time" @change="RoundUpTime"/>
    <FormKit type="time" value="endTime" label="Start Time" @change="EndTime"/>
  </div>
</template>

<script>
// const time = `${new Date().getHours()}:${new Date().getMinutes()}`
export default {
    name:"IntervalTime",
    data(){
        return{
            startTime:" ",
            endTime:" "
        }
    },
    methods:{
        RoundUpTime(e){
            this.startTime=e.target._value
            console.log(e.target._value ,"start");
            const time= this.startTime.split(":")
            const hour=time[0]
            const minutes=time[1]
            console.log(  minutes  ,"check");
            // if(minutes.toString > "5"){
            //     this.startTime=`${}:${}`
            // }
            console.log(`${hour}:${minutes}`,"get time");
            // this.endTime=
        },
        EndTime(e){
            const check =this?.startTime?.split(":")
            console.log(check,"check");
            this.endTime=e.target._value
            console.log(this.endTime,"end");
        }

    }

}
</script>

<style>

</style>