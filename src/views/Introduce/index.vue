<template>
  <div class="introduct">
    <!-- banner -->
    <div class="banner-txt">
      <div class="link-txt">
        <el-link type="info" href="/" :underline="false">首页></el-link>
        <el-link type="info" :underline="false">专家介绍</el-link>
      </div>
      <div>
        <img src="@/assets/images/introduct/bg-banner.png" width="100%" />
      </div>
    </div>
    <!-- 正文 -->
    <!-- search -->
    <div>
      <el-row type="flex" justify="center">
        <el-col :span="18" class="search">
          <el-col :span="10">
            科室选择：
            <input type="text" v-model="officeStr" />
          </el-col>
          <el-col :span="10">
            医生姓名：
            <input type="text" v-model="doctorName" />
          </el-col>
          <el-col :span="3">
            <el-button size="small" @click="searchData">马上查询</el-button>
          </el-col>
        </el-col>
      </el-row>
    </div>

    <!-- 列表 非手术科室 -->
    <el-row type="flex" justify="center" v-show="introduceId == 1 || introduceId == ''">
      <el-col :span="18">
        <div class="class-title">非手术科室</div>
        <el-row :gutter="10">
          <el-col
            :span="8"
            v-for="item in listDataA"
            :key="item.id"
            style="margin-bottom: 10px"
          >
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix">
                <router-link :to="'/doctor?current=1&size=16&officeStr=' + item.name">
                  <span class="box-title">{{ item.name }}</span>
                </router-link>
                <el-button
                  style="float: right; padding: 3px 0; color: #416948"
                  type="text"
                  icon="el-icon-arrow-right"
                ></el-button>
              </div>
              <div style="height: 40px">
                <el-row>
                  <el-col
                    :span="8"
                    v-for="item2 in item.physicians.slice(0, 5)"
                    :key="item2.id"
                  >
                    <el-tooltip placement="right" effect="light">
                      <div slot="content" class="tooltip-box">
                        <el-row :gutter="10">
                          <el-col :span="10">
                            <!-- <img :src="item2.imageUrl" width="100%" v-if="item2.imageUrl == null"> -->
                            <div
                              class="doctor-image"
                              :style="{
                                backgroundImage:
                                  item2.imageUrl == null
                                    ? 'url(http://cdn1.synconize.com/nppic2.png)'
                                    : 'url(' + item2.imageUrl + ')',
                              }"
                            ></div>
                          </el-col>
                          <el-col :span="14">
                            <div class="name">{{ item2.name }}</div>
                            <div class="special">
                              <span>专业特长</span>：
                              {{ item2.professionalExpertise }}
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                      <router-link :to="'/detail?doctorId=' + item2.id">
                        <span style="color: #333">
                          {{ item2.name }}
                        </span>
                      </router-link>
                    </el-tooltip>
                  </el-col>
                </el-row>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <!-- 列表 手术科室 -->
    <el-row type="flex" justify="center" v-show="introduceId == 2 || introduceId == ''">
      <el-col :span="18">
        <div class="class-title">手术科室</div>
        <el-row :gutter="10">
          <el-col
            :span="8"
            v-for="item in listDataB"
            :key="item.id"
            style="margin-bottom: 10px"
          >
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix">
                <router-link :to="'/doctor?current=1&size=16&officeStr=' + item.name">
                  <span class="box-title">{{ item.name }}</span>
                </router-link>
                <el-button
                  style="float: right; padding: 3px 0; color: #416948"
                  type="text"
                  icon="el-icon-arrow-right"
                ></el-button>
              </div>
              <div style="height: 40px">
                <el-row>
                  <el-col
                    :span="8"
                    v-for="item2 in item.physicians.slice(0, 5)"
                    :key="item2.id"
                  >
                    <el-tooltip placement="right" effect="light">
                      <div slot="content" class="tooltip-box">
                        <el-row :gutter="10">
                          <el-col :span="10">
                            <!-- <img :src="item2.imageUrl" width="100%" /> -->
                            <div
                              class="doctor-image"
                              :style="{
                                backgroundImage:
                                  item2.imageUrl == null
                                    ? 'url(http://cdn1.synconize.com/nppic2.png)'
                                    : 'url(' + item2.imageUrl + ')',
                              }"
                            ></div>
                          </el-col>
                          <el-col :span="14">
                            <div class="name">{{ item2.name }}</div>
                            <div class="special">
                              <span>专业特长</span>：
                              {{ item2.professionalExpertise }}
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                      <router-link :to="'/detail?doctorId=' + item2.id">
                        <span style="color: #333">
                          {{ item2.name }}
                        </span>
                      </router-link>
                    </el-tooltip>
                  </el-col>
                </el-row>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <!-- 列表 诊断相关科室 -->
    <el-row type="flex" justify="center" v-show="introduceId == 3 || introduceId == ''">
      <el-col :span="18">
        <div class="class-title">医技、辅助科室</div>
        <el-row :gutter="10">
          <el-col
            :span="8"
            v-for="item in listDataC"
            :key="item.id"
            style="margin-bottom: 10px"
          >
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix">
                <router-link :to="'/doctor?current=1&size=16&officeStr=' + item.name">
                  <span class="box-title">{{ item.name }}</span>
                </router-link>
                <el-button
                  style="float: right; padding: 3px 0; color: #416948"
                  type="text"
                  icon="el-icon-arrow-right"
                ></el-button>
              </div>
              <div style="height: 40px">
                <el-row>
                  <el-col
                    :span="8"
                    v-for="item2 in item.physicians.slice(0, 5)"
                    :key="item2.id"
                  >
                    <el-tooltip placement="right" effect="light">
                      <div slot="content" class="tooltip-box">
                        <el-row :gutter="10">
                          <el-col :span="10">
                            <!-- <img :src="item2.imageUrl" width="100%" /> -->
                            <div
                              class="doctor-image"
                              :style="{
                                backgroundImage:
                                  item2.imageUrl == null
                                    ? 'url(http://cdn1.synconize.com/nppic2.png)'
                                    : 'url(' + item2.imageUrl + ')',
                              }"
                            ></div>
                          </el-col>
                          <el-col :span="14">
                            <div class="name">{{ item2.name }}</div>
                            <div class="special">
                              <span>专业特长</span>：
                              {{ item2.professionalExpertise }}
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                      <router-link :to="'/detail?doctorId=' + item2.id">
                        <span style="color: #333">
                          {{ item2.name }}
                        </span>
                      </router-link>
                    </el-tooltip>
                  </el-col>
                </el-row>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { pageList, searchData, physicianInfo } from "@/api/list.js";
export default {
  name: "Introduce",
  data() {
    return {
      //   搜索
      inputSearch: "",

      // 科室数据
      listDataA: [], // 非手术
      listDataB: [], // 手术
      listDataC: [], // 诊断相关科室
      // 科室选择
      officeStr: this.$route.query.officeStr || "",
      // 医生名称
      doctorName: this.$route.query.doctorName || "",

      // 医生列表
      doctorData: [],
      // 当前id
      introduceId: this.$route.query.id || "",
    };
  },
  mounted() {
    // 获取搜索信息
    this.getSearchData();
    // 通过id获取科室及医生数据
    this.getPhysicianInfo();
  },
  methods: {
    getPhysicianInfo() {
      // 非手术
      physicianInfo(1).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.listDataA = res.data;
        }
      });
      // 手术
      physicianInfo(2).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.listDataB = res.data;
        }
      });
      // 诊断相关科室
      physicianInfo(3).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.listDataC = res.data;
        }
      });
    },
    // 获取搜索信息
    getSearchData() {
      let data = {
        current: 1,
        doctorName: this.$route.query.doctorName,
        officeStr: this.$route.query.officeStr,
        size: "5",
      };
      searchData(data).then((res) => {
        if (res.code == 200) {
          this.doctorData = res.data.records;
          this.total = res.data.total;
          // this.page.current = res.data.current;
        }
      });
    },
    // 搜索
    searchData() {
      this.$router.push(
        "/doctor?current=1&size=16&doctorName=" +
          this.doctorName +
          "&officeStr=" +
          this.officeStr
      );
      this.getSearchData();
    },
    // 科室数据
    getPageList() {
      pageList(1).then((res) => {
        if (res.code == 200) {
          this.listDataA = res.data;
        }
      });
      pageList(2).then((res) => {
        if (res.code == 200) {
          this.listDataB = res.data;
        }
      });
      pageList(3).then((res) => {
        if (res.code == 200) {
          this.listDataC = res.data;
        }
      });
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.introduct {
  @include maxWidth;

  //   banenr
  .banner-txt {
    margin-top: 10px;
    position: relative;
    .link-txt {
      position: absolute;
      left: 15%;
      top: 20px;
      z-index: 1;
      a {
        color: #fff;
      }
    }
  }
  //   search
  .search {
    // @include width800;
    position: relative;
    z-index: 2;
    margin: -30px auto 0;
    background-color: #fff;
    padding: 10px;
    border-bottom: 5px solid #609a70;
    box-shadow: 0px -4px 18px rgba($color: #999, $alpha: 0.7);
    .el-button {
      background-image: url(~@/assets/images/index/icon-search.png);
      background-repeat: no-repeat;
      background-size: 20px;
      background-position: 10px center;
      padding-left: 40px;
      border: 0;
      color: #fff;
      background-color: #62b479;
      box-shadow: 0px 2px 3px 0px #416948, inset 0px -1px 5px 0px rgba(45, 45, 45, 0.45);
      border-radius: 5px;
    }
    input {
      height: 25px;
      border: solid 1px #494949;
    }
  }
  // 列表
  .class-title {
    display: inline-block;
    background-color: #609a70;
    color: #fff;
    margin: 20px 0;
    padding: 8px 15px;
    border-radius: 5px;
  }
  .box-title {
    font-weight: bold;
    font-size: 20px;
    color: #416948;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 90%;
    display: inline-block;
  }
  .el-card {
    padding: 0 15px;
    cursor: pointer;
  }
  .el-card__header,
  .el-card__body {
    padding: 10px 0;
  }
}
.tooltip-box {
  width: 250px;
  .name {
    font-size: 18px;
    font-weight: bold;
    line-height: 50px;
  }
  .special {
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box; //作为弹性伸缩盒子模型显示。
    -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
    -webkit-line-clamp: 4; //显示的行
    span {
      font-weight: bold;
    }
  }
}
.doctor-image {
  padding-bottom: 133%;
  background-color: #eee;
  background-size: cover;
}
</style>
