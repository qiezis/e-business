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
import _ from 'lodash'
export default {
  props:{
    multiplydata:{
      type: Array,
      default:{
          label:"",
          value:0
      }
    }
  },
  data (){
    return{
        selectedArray:[]
    }
  },
  methods:{
    multiplyed(index){
      if(this.selectedArray.indexOf(index) == -1){    //如果没有再数组内，就push
        this.selectedArray.push(index)
      }else{                                          //如果数组内存在，就从数组中删除
          function removeByValue(arr, val) {
            for(var i=0; i<arr.length; i++) {
              if(arr[i] == val) {
                arr.splice(i, 1);
                break;
              }
            }
          }
          removeByValue(this.selectedArray,index)
      }
      let nowObjectArray=_.map(this.selectedArray,(idx)=>{   //取数组内存在的索引值对应的value值
          return this.multiplydata[idx]
      })
      this.$emit('on-change',nowObjectArray)
    },
  },

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
