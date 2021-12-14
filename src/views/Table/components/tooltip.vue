<template>
  <div class="tooltip">
    <!-- <el-tooltip placement="right" effect="light"> -->
    <!-- <div slot="content" class="tooltip-box">
        <el-row :gutter="10">
          <el-col :span="10">
            <div
              class="doctor-image"
              :style="{
                backgroundImage:
                  message.imageUrl == null
                    ? 'url(http://cdn1.synconize.com/nppic2.png)'
                    : 'url(' + message.imageUrl + ')',
              }"
            ></div>
          </el-col>
          <el-col :span="14">
            <div class="name">{{ message.name }}</div>
            <div class="special">
              <span>专业特长</span>：
              {{ message.professionalExpertise }}
            </div>
          </el-col>
        </el-row>
      </div> -->
    <!-- <router-link :to="'/detail?doctorId=' + message.id + '&menu=introduce'">   -->
    <span>{{ message != undefined ? message.name : ''  }}<span class="pu-txt" v-if="message.outCallType == 1">普</span></span> 
    <span  class="names" v-if="message.remark != null" :class="message.remark.length >6 ? 'leftSpan':''">{{message.remark}}</span>
    
    <!-- <span v-if="remarkShow != null">{{ 0 }} </span> -->
    <!-- </router-link> -->
    <!-- </el-tooltip> -->
    <!-- <div v-else>-</div> -->
  </div>
</template>
<script>

export default {
  props: ['message'],
  created(){
   this.init()
  },
  methods:{
    init(){
      if(this.message ==undefined){
       console.log(this.message);
      }   
       if(this.message.name.length == 2){
        //  this.message.name=this.message.name.substr(0,1)+$ndsp;+this.message.name.substr(1,1) 
        this.message.name=this.message.name.substr(0,1)+'\xa0\xa0\xa0'+this.message.name.substr(1,1) 
        //  console.log();
       }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.tooltip {
  span {
    color: #333;
    &:hover {
      color: #39694a;
    }
  }
  .names{
    display: block;
     font-size: 10px;
  }
  .leftSpan{
    text-align: center;
    //  text-align-last:left;
  }
  .pu-txt {
    background-image: linear-gradient($color-10, $color-9);
    color: #fff;
    padding: 0 3px;
    box-sizing: border-box;
    font-size: 13px;
    border-radius: 3px;
  }
}
</style>
