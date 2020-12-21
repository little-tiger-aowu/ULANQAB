<template>
  <div class="introduct">
    <!-- banner -->
    <div class="banner-txt">
      <div class="link-txt">
        <el-link type="info" href="/" :underline="false">首页></el-link>
        <el-link type="info" :underline="false">护理园地</el-link>
      </div>
      <div>
        <img src="@/assets/images/introduct/bg-banner.png" width="100%" />
      </div>
    </div>
    <!-- 正文 -->
    <!-- swiper -->
    <!-- <div class="item-1">
      <div class="title">各科室专家</div>
      <el-row class="item-1-swiper" type="flex" justify="center">
        <el-col :span="16">
          <div class="swiper-content">
            <img src="@/assets/images/nopic/img2.jpg" width="200" />
          </div>
        </el-col>
      </el-row>
    </div> -->
    <!-- search -->
    <div>
      <el-row type="flex" justify="center">
        <el-col :span="16" class="search">
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
      <el-row type="flex" justify="center">
        <el-col :span="16" class="search-choose">
          <el-row :gutter="10">
            <el-col :span="4" class="tab-choose">
              <div
                v-for="item in typeData"
                :key="item.code"
                @click="chooseType(item.code)"
                :class="typeId == item.code ? 'active' : ''"
              >
                {{ item.desc }}
              </div>
            </el-col>
            <el-col :span="20" class="choose-list">
              <el-col v-for="item in listData" :key="item.id" :span="4">
                <el-tooltip
                  class="item"
                  effect="dark"
                  :content="item.name"
                  placement="bottom"
                >
                  <div @click="getPhysician(item.name)">{{ item.name }}</div>
                </el-tooltip>
              </el-col>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <!-- 医疗资源 -->
    <!-- <div class="box-1">
      <el-row type="flex" justify="center">
        <el-col :span="16" class="item-2">
          <div class="title">医疗资源</div>
          <div class="txt">
            两院院士X人 <br />
            973首席科学家X人 <br />
            国家杰出青年科学基金获得者XX人<br />
            高端引进人才XXX人<br />
          </div> -->
    <!-- <div class="more">
            <div>查看更多</div>
          </div> -->
    <!-- </el-col>
      </el-row>
      <el-row type="flex" justify="end">
        <el-col :span="4">
          <img src="@/assets/images/introduct/kuai.png" width="100%" />
        </el-col>
      </el-row>
    </div> -->

    <!-- 专家信息 -->
    <el-row type="flex" justify="center">
      <el-col :span="18">
        <div class="about-box-3">
          <div class="title-2">专家信息</div>
          <el-row :gutter="8">
            <el-col
              :span="3"
              v-for="(item, index) in doctorData"
              :key="index"
              class="content"
            >
              <router-link :to="'/detail?doctorId=' + item.id">
                <!-- <img
                  :src="
                    item.imageUrl == null
                      ? 'http://cdn1.synconize.com/nppic2.png'
                      : item.imageUrl
                  "
                  width="100%"
                /> -->
                <el-tooltip effect="light" placement="right">
                  <div slot="content" class="toolip-box">
                    <el-row :gutter="15">
                      <el-col :span="12">
                        <div
                          class="doctor-image"
                          :style="{
                            backgroundImage:
                              item.imageUrl == null
                                ? 'url(http://cdn1.synconize.com/nppic2.png)'
                                : 'url(' + item.imageUrl + ')',
                          }"
                        ></div>
                      </el-col>
                      <el-col :span="12">
                        <div class="name"> {{ item.name }}</div>
                      </el-col>
                    </el-row>
                  </div>
                  <div
                    class="doctor-image"
                    :style="{
                      backgroundImage:
                        item.imageUrl == null
                          ? 'url(http://cdn1.synconize.com/nppic2.png)'
                          : 'url(' + item.imageUrl + ')',
                    }"
                  ></div>
                </el-tooltip>
                <!-- <img src="@/assets/images/about/img3.jpg" width="100%" /> -->
                <div class="name">
                  {{ item.name }}
                </div>
              </router-link>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div style="text-align: center">
      <el-pagination
        :hide-on-single-page="true"
        background
        @current-change="handleCurrentChange"
        :current-page.sync="page.current"
        :page-size="page.size"
        layout="prev, pager, next"
        :total="total"
        :pager-count="5"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import merge from "webpack-merge";
import { typeList, pageList, searchData } from "@/api/list.js";
export default {
  name: "Introduce",
  data() {
    return {
      //   搜索
      inputSearch: "",
      // 科室类型
      typeData: [],
      // 科室id
      typeId: 1,
      // 科室数据
      listData: [],
      // 科室选择
      officeStr: this.$route.query.officeStr || "",
      // 医生名称
      doctorName: this.$route.query.doctorName || "",
      //   翻页
      page: {
        current: 1,
        size: 16,
      },
      total: 1,

      // 医生列表
      doctorData: [],
    };
  },
  mounted() {
    // 科室类型
    this.getTypeList();
    // 选择科室类型
    this.getPageList();

    // 获取搜索信息
    this.getSearchData();
  },
  methods: {
    // 获取搜索信息
    getSearchData() {
      console.log(this.$route.query);
      let data = {
        current: this.$route.query.current || 1,
        doctorName: this.$route.query.doctorName,
        officeStr: this.$route.query.officeStr,
        size: "16",
      };
      searchData(data).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.doctorData = res.data.records;
          this.total = res.data.total;
          this.page.current = res.data.current;
        }
      });
    },
    // 点击获取科室名称
    getPhysician(name) {
      this.officeStr = name;
      this.$router.push(
        "/introduce?current=1&size=16&doctorName=" +
          this.doctorName +
          "&officeStr=" +
          this.officeStr
      );
      this.getSearchData();
    },
    // 搜索
    searchData() {
      this.$router.push(
        "/introduce?current=1&size=16&doctorName=" +
          this.doctorName +
          "&officeStr=" +
          this.officeStr
      );
      this.getSearchData();
    },
    // 科室类型
    getTypeList() {
      typeList().then((res) => {
        if (res.code == 200) {
          this.typeData = res.data;
        }
      });
    },
    // 选择科室类型
    chooseType(id) {
      this.typeId = id;
      this.getPageList();
    },
    // 科室数据
    getPageList() {
      pageList(this.typeId).then((res) => {
        if (res.code == 200) {
          this.listData = res.data;
        }
      });
    },
    // 当前页
    handleCurrentChange(val) {
      this.page.current = val;
      this.$router.push({
        query: merge(this.$route.query, { current: val }),
      });
      this.getSearchData();
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
  // 正文
  //   siwper
  .item-1 {
    margin-top: 50px;
    text-align: center;
    .title {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .item-1-swiper {
      background-image: url(~@/assets/images/introduct/img1.png);
      background-size: cover;
      background-position: bottom left;
      background-repeat: no-repeat;
      padding: 20px 0;
      .swiper-content {
        background-color: rgba($color: #b2b3b2, $alpha: 0.2);
      }
    }
  }
  //   search
  .search {
    // @include width800;
    position: relative;
    z-index: 2;
    margin: 30px auto 0;
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
  .search-choose {
    background-color: #f4f4f4;
    padding: 20px;
    .choose-list {
      background-color: rgba($color: #fff, $alpha: 0.5);
      height: 175px;
      padding: 20px 0;

      .el-col {
        div {
          background-color: #fff;
          font-size: 12px;
          text-align: center;
          margin-bottom: 10px;
          line-height: 24px;
          overflow: hidden; //超出的文本隐藏
          text-overflow: ellipsis; //溢出用省略号显示
          white-space: nowrap; //溢出不换行
          cursor: pointer;
        }
      }
    }
    .tab-choose {
      div {
        color: #fff;
        text-align: center;
        margin-bottom: 5px;
        line-height: 40px;
        background-color: #416948;
        cursor: pointer;
        &.active {
          background-color: #768d55;
        }
      }
    }
  }
  .box-1 {
    .item-2 {
      margin-top: 100px;
      background-image: url(~@/assets/images/introduct/bg1.png);
      padding: 20px;
      background-size: cover;
      height: 240px;
      background-repeat: no-repeat;
      position: relative;
      .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .txt {
        line-height: 30px;
      }
      .more {
        position: absolute;
        bottom: -13px;
        left: 40%;
        width: 75px;
        line-height: 25px;
        background-color: #416948;
        text-align: center;
        color: #fff;
        font-size: 12px;
      }
    }
  }
}

.doctor-image {
  padding-bottom: 133%;
  background-color: #eee;
  background-size: cover;
}

.about-box-3 {
  .title-2 {
    background-color: #416948;
    color: #fff;
    display: inline-block;
    font-size: 22px;
    padding: 10px;
    margin-top: 100px;
    margin-bottom: 50px;
  }
  .name {
    font-size: 12px;
    text-align: center;
    line-height: 24px;
    color: #333;
  }
  .content {
    margin-bottom: 20px;
  }
}
.search-choose {
  background-color: #f4f4f4;
  padding: 20px;
  .choose-list {
    background-color: rgba($color: #fff, $alpha: 0.5);
    height: 175px;
    padding: 20px 0;

    .el-col {
      div {
        background-color: #fff;
        font-size: 12px;
        text-align: center;
        margin-bottom: 10px;
        line-height: 24px;
        overflow: hidden; //超出的文本隐藏
        text-overflow: ellipsis; //溢出用省略号显示
        white-space: nowrap; //溢出不换行
        cursor: pointer;
      }
    }
  }
  .tab-choose {
    div {
      color: #fff;
      text-align: center;
      margin-bottom: 5px;
      line-height: 40px;
      background-color: #416948;
      cursor: pointer;
      &.active {
        background-color: #768d55;
      }
    }
  }
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #416948 !important;
  color: #fff !important;
}
.toolip-box {
  width: 200px;
  font-size: 15px;
  .name {
    font-weight: bold;
  }
}
</style>
