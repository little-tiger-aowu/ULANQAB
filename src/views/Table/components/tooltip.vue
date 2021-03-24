<template>
  <div class="tooltip">
    <el-tooltip placement="right" effect="light">
      <div slot="content" class="tooltip-box">
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
      </div>
      <router-link :to="'/detail?doctorId=' + message.id + '&menu=introduce'">  
        <span> {{ message.name }} </span> <span class="pu-txt" v-if="message.outCallType == 1">普</span>
      </router-link>
    </el-tooltip>
    <!-- <div v-else>-</div> -->
  </div>
</template>
<script>
export default {
  props: ["message"],
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
  .pu-txt {
    background-image: linear-gradient($color-10,$color-9);
    color: #fff;
    padding: 0 3px;
    font-size: 13px;
    border-radius: 3px;
  }
}
</style>
