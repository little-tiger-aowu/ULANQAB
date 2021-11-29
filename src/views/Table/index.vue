<template>
  <div class="table">
    <el-row type="flex" justify="center" :gutter="20">
      <el-col :span="18" class="content">
        <!-- 线 -->
        <div class="line"></div>
        <!-- 大标题 -->
        <div class="max-title">{{ title }}一览表</div>
        <!-- 标题搜索Í -->
        <div class="box-1">
          <div class="min-title">
            <span class="pu-txt">普</span>
            普 通 门 诊
            <button @click="cut">
              {{ hospital == 1 ? "分院出诊表" : "总院出诊表" }}
            </button>
          </div>
          <div class="search-box" v-show="searchShow">
            <input type="text" v-model="keyVal" />
            <button @click="searchData">搜索</button>
          </div>
        </div>
        <!-- 出诊表 -->
        <div>
          <table width="100%" cellpadding="0" cellspacing="0" class="table-box">
            <tr class="title">
              <th width="12.5%" rowspan="2" class="table-th">
                <!-- <img src=""> -->
                <!-- <div class="bottom"></div>
                <div class="top"></div>
                <div class="division"> 科别</div>
                <div class="name">姓名</div>
                <div class="week">星期</div>           -->
              </th>
              <th colspan="8">
                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  class="table-box-1"
                >
                  <th width="12.5%">星期一</th>
                  <th width="12.5%">星期二</th>
                  <th width="12.5%">星期三</th>
                  <th width="12.5%">星期四</th>
                  <th width="12.5%">星期五</th>
                  <th width="12.5%">星期六</th>
                  <th width="12.5%">星期日</th>
                </table>
              </th>
            </tr>
            <tr>
              <th>
                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  class="table-box-1"
                >
                  <th width="6.25%">上午</th>
                  <th width="6.25%">下午</th>
                  <th width="6.25%">上午</th>
                  <th width="6.25%">下午</th>
                  <th width="6.25%">上午</th>
                  <th width="6.25%">下午</th>
                  <th width="6.25%">上午</th>
                  <th width="6.25%">下午</th>
                  <th width="6.25%">上午</th>
                  <th width="6.25%">下午</th>
                  <th width="6.25%">上午</th>
                  <th width="6.25%">下午</th>
                  <th width="6.25%">上午</th>
                  <th width="6.25%">下午</th>
                </table>
              </th>
            </tr>
          </table>
          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            class="table-box"
            v-for="(item, index) in searchOutCallData"
            :key="index"
          >
            <tr>
              <td width="12.5%" class="blod">{{ item.officeName }}</td>
              <td width="6.25%" class="text">
                <div v-for="(item2, index) in item.timeOutCallVos" :key="index">
                  <div v-if="item2.time == '周一上午'">
                    <div
                      v-for="(item3, index) in item2.physicianBriefVoList"
                      :key="index"
                    >
                      <tooltip :message="item3"></tooltip>
                    </div>
                  </div>
                </div>
              </td>
              <td width="6.25%" class="text">
                <div v-for="item2 in item.timeOutCallVos" :key="item2.timeSort">
                  <div v-if="item2.time == '周一下午'">
                    <div
                      v-for="item3 in item2.physicianBriefVoList"
                      :key="item3.id"
                    >
                      <tooltip :message="item3"></tooltip>
                    </div>
                  </div>
                </div>
              </td>
              <td width="6.25%" class="text">
                <div v-for="(item2, index) in item.timeOutCallVos" :key="index">
                  <div v-if="item2.time == '周二上午'">
                    <div
                      v-for="(item3, index) in item2.physicianBriefVoList"
                      :key="index"
                    >
                      <tooltip :message="item3" ></tooltip>
                    </div>
                  </div>
                </div>
              </td>
              <td width="6.2%" class="text">
                <div v-for="item2 in item.timeOutCallVos" :key="item2.timeSort">
                  <div v-if="item2.time == '周二下午'">
                    <div
                      v-for="item3 in item2.physicianBriefVoList"
                      :key="item3.id"
                    >
                      <tooltip :message="item3"></tooltip>
                    </div>
                  </div>
                </div>
              </td>
              <td width="6.25%" class="text">
                <div v-for="(item2, index) in item.timeOutCallVos" :key="index">
                  <div v-if="item2.time == '周三上午'">
                    <div
                      v-for="(item3, index) in item2.physicianBriefVoList"
                      :key="index"
                    >
                      <tooltip :message="item3"></tooltip>
                    </div>
                  </div>
                </div>
              </td>
              <td width="6.25%" class="text">
                <div v-for="item2 in item.timeOutCallVos" :key="item2.timeSort">
                  <div v-if="item2.time == '周三下午'">
                    <div
                      v-for="item3 in item2.physicianBriefVoList"
                      :key="item3.id"
                    >
                      <tooltip :message="item3"></tooltip>
                    </div>
                  </div>
                </div>
              </td>
              <td width="6.25%" class="text">
                <div v-for="(item2, index) in item.timeOutCallVos" :key="index">
                  <div v-if="item2.time == '周四上午'">
                    <div
                      v-for="(item3, index) in item2.physicianBriefVoList"
                      :key="index"
                    >
                      <tooltip :message="item3"></tooltip>
                    </div>
                  </div>
                </div>
              </td>
              <td width="6.25%" class="text">
                <div v-for="item2 in item.timeOutCallVos" :key="item2.timeSort">
                  <div v-if="item2.time == '周四下午'">
                    <div
                      v-for="item3 in item2.physicianBriefVoList"
                      :key="item3.id"
                    >
                      <tooltip :message="item3"></tooltip>
                    </div>
                  </div>
                </div>
              </td>
              <td width="6.2%" class="text">
                <div v-for="(item2, index) in item.timeOutCallVos" :key="index">
                  <div v-if="item2.time == '周五上午'">
                    <div
                      v-for="(item3, index) in item2.physicianBriefVoList"
                      :key="index"
                    >
                      <tooltip :message="item3"></tooltip>
                    </div>
                  </div>
                </div>
              </td>
              <td width="6.25%" class="text">
                <div v-for="item2 in item.timeOutCallVos" :key="item2.timeSort">
                  <div v-if="item2.time == '周五下午'">
                    <div
                      v-for="item3 in item2.physicianBriefVoList"
                      :key="item3.id"
                    >
                      <tooltip :message="item3"></tooltip>
                    </div>
                  </div>
                </div>
              </td>
              <td width="6.25%" class="text">
                <div v-for="(item2, index) in item.timeOutCallVos" :key="index">
                  <div v-if="item2.time == '周六上午'">
                    <div
                      v-for="(item3, index) in item2.physicianBriefVoList"
                      :key="index"
                    >
                      <tooltip :message="item3"></tooltip>
                    </div>
                  </div>
                </div>
              </td>
              <td width="6.25%" class="text">
                <div v-for="item2 in item.timeOutCallVos" :key="item2.timeSort">
                  <div v-if="item2.time == '周六下午'">
                    <div
                      v-for="item3 in item2.physicianBriefVoList"
                      :key="item3.id"
                    >
                      <tooltip :message="item3"></tooltip>
                    </div>
                  </div>
                </div>
              </td>
              <td width="6.25%" class="text">
                <div v-for="(item2, index) in item.timeOutCallVos" :key="index">
                  <div v-if="item2.time == '周日上午'">
                    <div
                      v-for="(item3, index) in item2.physicianBriefVoList"
                      :key="index"
                    >
                      <tooltip :message="item3"></tooltip>
                    </div>
                  </div>
                </div>
              </td>
              <td width="6.25%" class="text">
                <div v-for="item2 in item.timeOutCallVos" :key="item2.timeSort">
                  <div v-if="item2.time == '周日下午'">
                    <div
                      v-for="item3 in item2.physicianBriefVoList"
                      :key="item3.id"
                    >
                      <tooltip :message="item3" ></tooltip>
                      <tooltip></tooltip>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { searchOutCall } from "@/api/list.js";
import tooltip from "@/views/Table/components/tooltip";
export default {
  data() {
    return {
      title: "专业门诊",
      keyWord: this.$route.query.keyWord || "",
      keyVal: "",
      searchOutCallData: [],
      searchShow: true,
      hospital: 1,
      //nunber:this.$route.query.name
    };
  },
  components: {
    tooltip,
  },
  mounted() {
    this.getSearchOutCall();
    if (this.keyWord != "") {
      this.searchShow = false;
      this.getSearchOutCall();
    }
  },
  watch: {
    $route: "searchData",
  },
  methods: {
    getSearchOutCall() {
      let data = {
        hospital: this.hospital,
        keyWord: this.keyWord,
      };
      searchOutCall(data).then((res) => {
        //console.log(res);
        if (res.code == 200) {
          console.log(res);
          this.searchOutCallData = res.data;
        }
      });
    },
    searchData() {
      this.$router.push({ query: { keyWord: this.keyVal } });
      (this.keyWord = this.$route.query.keyWord || ""), this.getSearchOutCall();
    },
    cut() {
      if (this.hospital == 1) {
        this.hospital = 2;
        this.getSearchOutCall();
      } else {
        this.hospital = 1;
        this.getSearchOutCall();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/base.scss";
@import "@/assets/css/mixin.scss";
.table {
  .line {
    height: 3px;
    background-color: $color-9;
  }
  .max-title {
    background-color: $color-9;
    line-height: 45px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    margin: 10px 0;
    letter-spacing: 5px;
    font-weight: bold;
  }
  .box-1 {
    background-color: #f0f1f2;
    line-height: 50px;
    padding: 0 20px;
    margin-bottom: 10px;
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .min-title {
      button {
        margin-left: 10px;
      }
    }
    .pu-txt {
      background-image: linear-gradient($color-10, $color-9);
      color: #fff;
      padding: 0 3px;
      font-size: 16px;
      border-radius: 3px;
    }
    button {
      cursor: pointer;
      height: 25px;
      border: 0;
      background-image: linear-gradient(to left, $color-10, $color-9);
      color: #fff;
      width: 90px;
      &:focus {
        outline: none;
      }
    }
    .search-box {
      input {
        height: 25px;
        border: 1px solid #d0d1d2;
        margin-right: 10px;
        padding: 0 2px;
        border-radius: 2px;
        &:focus {
          outline: none;
        }
      }
      button {
        width: 60px;
      }
    }
  }
  .table-box {
    text-align: center;
    tr {
      td {
        margin: 0 !important;
        // padding: 0 !important;
        padding: 10px 5px;
        box-sizing: border-box;
        div {
          margin: 0 !important;
          padding: 0 !important;
        }
      }
    }
    .title {
      border-top: 4px solid $color-9;
    }
    .table-th{
      background-image: url(../../assets/images/tableTh.png);
      background-size: 100% 100%;
    }
    th {
      background-color: #f0f1f2;
      color: $color-9;
      // border: 1px solid #d0d1d2;
      border-bottom-width: 2px;
      // padding: 10px 0;
      padding: 0;
      position: relative;
      img{
        width: 100%;
        height: 100%;
      }
      .bottom {
        position: absolute;
        bottom: 33px;
        left: -6px;
        width: 186px;
        height: 1px;
        background-color: #333;
        transform: rotate(20deg);
      }
      .top {
       position: absolute;
        top: 39px;
        right: -13px;
        width: 119px;
        height: 1px;
        background-color: #333;
        transform: rotate(41deg);
      }
      .division{
        position: absolute;
        left: 51px;
        bottom: 10px;
      }
      .name{
        position: absolute;
        top: 24px;
        left: 82px;
      }
      .week{
        position: absolute;
        top: 11px;
        right: 16px;
      }
    }

    span {
      color: #333;
      &:hover {
        color: #39694a;
      }
    }
  }
  .table-box-1 {
    border-right: 0 !important;
    border-left: 0 !important;
    border-bottom: 0 !important;
    td,
    th {
      border-left: 0 !important;
      border-bottom: 0 !important;
      padding: 10px 0;
      line-height: 20px;
      vertical-align: middle;
    }
    td:last-child,
    th:last-child {
      border-right: 0 !important;
    }
  }

  table,
  table tr th,
  table tr td {
    border: 1px solid #d0d1d2;

    border-top: 0;
    border-collapse: collapse;
  }
  .el-row {
    margin: 0 !important;
  }
  .text{
    text-align-last:justify;
    text-align: justify;
    text-justify:distribute-all-lines; // 这行必加，兼容ie浏览器
  }
  .blod{
    font-weight: 700;
  }
}
</style>
