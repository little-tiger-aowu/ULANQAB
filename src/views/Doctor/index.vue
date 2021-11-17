<template>
  <div class="doctor">
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

    <!-- 专家信息 -->
    <el-row type="flex" justify="center">
      <el-col :span="18">
        <div class="about-box-3">
          <!-- <div class="title-2">专家信息</div> -->
          <el-row :gutter="8">
            <el-col
              :span="3"
              v-for="(item, index) in doctorData"
              :key="index"
              class="content"
            >
              <router-link :to="'/detail?doctorId=' + item.id+ '&menu=introduce'">
               <!-- <router-link to="/research"> -->
                <!-- <img
                  :src="
                    item.imageUrl == null
                      ? 'http://cdn1.synconize.com/nppic2.png'
                      : item.imageUrl
                  "
                  width="100%"
                /> -->
                <div
                  class="doctor-image"
                  :style="{
                    backgroundImage:
                      item.imageUrl == null
                        ? 'url(http://cdn1.synconize.com/nppic2.png)'
                        : 'url(' + item.imageUrl + ')',
                  }"
                ></div>
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
      // 医生列表
      doctorData: [],
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
      searchData(this.$route.query).then((res) => {
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
<style lang="scss" scoped>
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.doctor-image {
  padding-bottom: 133%;
  background-color: #eee;
  background-size: cover;
}
.doctor {
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
}
.about-box-3 {
  margin-top: 60px;
  .title-2 {
    background-color: #5a81b9;
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

</style>
<style lang="scss">
.el-pagination.is-background .el-pager li:not(.disabled).active{
  color: #fff !important;
}
</style>
