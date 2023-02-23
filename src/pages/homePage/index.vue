 <template>
  <div>
    <HeaderTab />
    <!-- <IntervalTime /> -->
    <ImportFile />
  </div>
</template>
<script>
import HeaderTab from "./header/header.vue";
// import IntervalTime from "../../components/time/timeData.vue"
import ImportFile from "../../components/import&export/import.vue"
export default {
  name: "HomePage",
  components: {
    HeaderTab,
    // IntervalTime
    ImportFile
  },
};
</script>

 <style>
</style>