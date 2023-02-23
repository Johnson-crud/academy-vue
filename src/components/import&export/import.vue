<template>
  <div>
    <FormKit type="form" :action="false" @submit="ConvertToJson">
      <FormKit
        type="file"
        label="Documents"
        accept=".csv"
        help="Select CSV file."
        @change="onFileChange"
      />
    </FormKit>
    <FormKit type="form" :action="false" @submit="changeJson">
      <FormKit type="text" label="changeName" @change="getText" />
    </FormKit>
  </div>
</template>

<script>
// import Papa from "papaparse";

export default {
  name: "ImportFile",
  // data() {
  //   return {
  //     fileinput: "",
  //   };
  // },
  mounted() {
    console.log(this.$store.state.fileinput, "check");
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files;
      if (!files.length) return;
      this.createInput(files[0]);
    },
    createInput(file) {
      var reader = new FileReader();
      var vm = this.$store.state;
      reader.onload = () => {
        vm.fileinput = reader.result;
      };
      reader.readAsText(file);

      console.log(this.$store.state.fileinput);
    },
    ConvertToJson() {
      const input = this.$store.state.fileinput;
      console.log(input, "input");
      const lines = input.split("\n");
      const header = lines[0].split(",");
      const recivedData = lines.slice(1).map((line) => {
        const fields = line.split(",");
        return Object.fromEntries(header.map((h, i) => [h, fields[i]]));
      });
      this.$store.state.output = Object.keys(recivedData).map((key) => {
        return [recivedData[key]];
      });
      console.log(this.$store.state.output.length, "output");
      console.log(typeof this.$store.state.output, "testoutput");
      // console.log(this.$store.state.output.Name, "testoutput1");
    },
    getText(e) {
      console.log(e.target.value, "enterText");
      this.$store.state.inputValue = e.target.value;
    },
    changeJson() {
      console.log(this.$store.state.inputValue, "called");
      if (this.$store.state.inputValue) {
        for (let i = 0; i < this.$store.state.output.length; i++) {
          Object.entries(this.$store.state.output).forEach(([key]) => {
            if (key === `${i}`) {
              this.$store.state.output[key].Name = `NewValue${i}`;
              console.log(this.$store.state.output[key].Name,"update date ");
            }
          });
          // if(){

          // }
        }
      }
      console.log(this.$store.state.output,"change data");
    },
  },
};
</script>

<style>
</style>