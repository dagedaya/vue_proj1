  <template>
  <div>
    <el-button type="success" icon="el-icon-plus" @click="jumpPage">添加会员</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    ></el-pagination>
  </div>
</template>

  <script>
export default {
  data() {
    return {
      currentPage4:1,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      jumpPage(){
        // 跳转页面（第一种方式通过路径跳转）
        this.$router.push({
          path:'add',
          query:{
            id:1
          }
        })
        // 通过name跳转
        // this.$router.push({
        //   name:'members_add',
        //   params:{
                // id:1
        // }
        // })
        // query:拼接在地址栏后面，刷新之后一直存在，可以与path,name一起使用
        // params:隐式的传输，刷新之后不存在了，只能跟name一起使用
      }
    },
};
</script>