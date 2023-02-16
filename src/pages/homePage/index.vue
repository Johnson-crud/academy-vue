<script>
const date=new Date()
const currentMonth=date.getMonth()
const currentYear=date.getFullYear().toString().slice(2,4)
const currentDate=currentMonth<10?`${"0"+currentMonth}/${currentYear}`:`${currentMonth}/${currentYear}`
console.log("currentDate",currentDate);
export default {
  name: "HomePage",
  data() {
    return{
    currentvalue:"01/02/23",
    current:new Date().toISOString().slice(0,10)
    }
  },
  mounted() {
    const current = new Date();
    console.log(current, "current");
  },
  // methods:{
  // day(node) {
  // const date=new Date()
  // const currentMonth=date.getMonth() + 1
  // const currentYear=date.getFullYear().toString().slice(2,4)
  // const value = node.value.split("/")
  // if(value.includes("00")) return (false)
  // return (value[1] > currentYear ? true : value[1] === currentYear ? value[0] >= currentMonth ? true : false : false)
  // }
  // }
};
</script>
 <template>
  Home   
    <!-- <FormKit
    type="text"
    label="Kitchen renovation budget"
    help="Enter the most you'd like to spend on your kitchen renovation."
    validation="dateCustomRule"
    validation-visibility="live"
    :validation-messages="{
      'min': 'Sorry —we only build high end kitchens. Try Budget Builders.'
    }"
  />-->
  <FormKit
  type="text"
  label="Birthday"
  help="Enter your birthday (must be born after 1999)"
  validation="required|date_formate:MM/YY|dateCustomRule"
  validation-visibility="live"
  :validation-messages="{
    dateCustomRule:'Not in expected formate',
    date_after: 'Sorry — no olds allowed.',
  }"
  />
  <!-- <input type="date" :min="current"/>
  <input type="text" :min="current"/> -->
  {{current}}::{{currentvalue}}
</template>

 <style>
</style>