<template>
    <div class="chooser-component">
        <ul class="chooser-list">
          <li
              v-for="(item,index) in multiplydata"
              @click="multiplyed(index)"
              :title="item.label"
              :class="{active:selectedArray.indexOf(index) !== -1}"
          >{{ item.label }}</li>
        </ul>
      </div>
    </div>
</template>

<script>

export default {
  data (){
    return{
        selectedArray:[]
    }
  },
  methods:{
    multiplyed(index){
      if(this.selectedArray.indexOf(index) == -1){
        this.selectedArray.push(index)
      }else{
          function removeByValue(arr, val) {
            for(var i=0; i<arr.length; i++) {
              if(arr[i] == val) {
                arr.splice(i, 1);
                break;
              }
            }
          }
          removeByValue(this.selectedArray,index);
      }
      this.$emit('onchange',this.selectedArray)
    },
    checkActive(index){
      if(this.selectedArray.indexOf(index)){

      }else{

      }
    },
  },
  props:{
    multiplydata:{
      type: Array,
      default:{
          label:"",
          value:0
      }
    }
  }
}





</script>

<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
