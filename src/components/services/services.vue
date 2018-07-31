<template>
<div>
    <el-row>
      <el-button @click="dialogFormVisible = true" style="margin:15px;">添加</el-button>
    </el-row>
  <el-table
    :data="this.tableData4"
    style="width: 100%"
   >
   <el-table-column
     prop="serviceName"
        label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="serviceType"
        label="服务类别"
      width="120">
    </el-table-column>
    <el-table-column
      prop="serviceSchedule"
        label="排期"
      width="120">
    </el-table-column>
    <el-table-column
      prop="serviceDetial"
        label="服务规格"
      width="120">
    </el-table-column>
    <el-table-column
     prop="serviceTime"
        label="耗时"
      width="120">
    </el-table-column>
     <el-table-column
     prop="serviceLevel"
        label="服务等级"
      width="120">
    </el-table-column>
     <el-table-column
    prop="servicePrice"
        label="价格"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="xiugai(scope.row)">修改</el-button>
        <el-button
          @click.native.prevent="deleteRow(scope.$index, scope.row)"
          type="text"
          size="small">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
   <div class="block">
    <!-- <span class="demonstration">完整功能</span> -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="curenPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="count">
    </el-pagination>
  </div>
  <el-button type="text" @click="dialogFormVisible = true"></el-button>
        <el-dialog title="添加信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.serviceName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="服务类别" :label-width="formLabelWidth">
            <el-input v-model="form.serviceType" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="排期" :label-width="formLabelWidth">
            <el-input v-model="form.serviceSchedule" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="服务规格" :label-width="formLabelWidth">
            <el-input v-model="form.serviceDetial" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="耗时" :label-width="formLabelWidth">
            <el-input v-model="form.serviceTime" auto-complete="off"></el-input>
            </el-form-item>
             <el-form-item label="服务等级" :label-width="formLabelWidth">
            <el-input v-model="form.serviceLevel" auto-complete="off"></el-input>
            </el-form-item>
             <el-form-item label="价格" :label-width="formLabelWidth">
            <el-input v-model="form.servicePrice" auto-complete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addRow">确 定</el-button>
        </div>
        </el-dialog>
        <!--  -->
          <el-dialog title="更改服务" :visible.sync="dialogFormVisible1">
            <el-form :model="form1">
              <el-form-item  label="姓名" :label-width="formLabelWidth" >
                <el-input v-model="form1.serviceName" auto-complete="off" style="display:inline;margin:10px;"  ></el-input>
              </el-form-item>
                     <el-form-item  label="服务类别" :label-width="formLabelWidth" >
                <el-input v-model="form1.serviceType" auto-complete="off" style="display:inline;margin:10px;"> </el-input>
              </el-form-item>
                     <el-form-item  label="排期" :label-width="formLabelWidth" >
                <el-input v-model="form1.serviceSchedule" auto-complete="off" style="display:inline;margin:10px;"> </el-input>
              </el-form-item>
                  <el-form-item  label="规格" :label-width="formLabelWidth" >
                <el-input v-model="form1.serviceDetial" auto-complete="off" style="display:inline;margin:10px;"> </el-input>
              </el-form-item>
                  <el-form-item  label="耗时" :label-width="formLabelWidth" >
                <el-input v-model="form1.serviceTime" auto-complete="off" style="display:inline;margin:10px;"> </el-input>
              </el-form-item>
                  <el-form-item  label="服务等级" :label-width="formLabelWidth" >
                <el-input v-model="form1.serviceLevel" auto-complete="off" style="display:inline;margin:10px;"> </el-input>
              </el-form-item>
                  <el-form-item  label="价格" :label-width="formLabelWidth" >
                <el-input v-model="form1.servicePrice" auto-complete="off" style="display:inline;margin:10px;"> </el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="quxiao_F">取 消</el-button>
              <el-button type="primary" @click="xg_sure">确 定</el-button>
            </div>
          </el-dialog>
        </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  methods: {
    deleteRow(index, rows) {
      /* console.log(this.tableData4) */
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.shanchu(rows);
          this.$message({
            type: rows.splice(index, 1),
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //分页
   handleSizeChange(val) {
      console.log(val);
      this.$store.commit("services/eachPage_fu", val);
      console.log(`每页 ${val} 条`);
      this.$store.dispatch("services/getFoods");
    },
    handleCurrentChange(val) {
      console.log(val);
      this.$store.commit("services/curPage_fu", val);
      this.$store.dispatch("services/getFoods");
      console.log(`当前页: ${val}`);
    },
    quxiao_F(){
      this.dialogFormVisible1 =  false
      this.$store.dispatch("services/getFoods");
    },
    xiugai(row){
      this.$store.state.services.form1 = row
      this.dialogFormVisible1 =  true
    },
    xg_sure(){
      this.$store.dispatch("services/xiugai_f");
      this.dialogFormVisible1 =  false
      this.$store.dispatch("services/getFoods");
    },
    shanchu(row) {
      console.log(row);
      this.$store.dispatch("services/delet", row);
      this.$store.dispatch("services/getFoods");
    },
    addRow() {
      this.dialogFormVisible = false;
      const data1 = this.form;
      this.$store.dispatch("services/addEmp", data1);
      console.log("in")
      this.$store.dispatch("services/getFoods");
    },

    chageRow() {
      this.dialogTableVisible = false;
    },
    change_m() {
      let index = this.mendianGliIndex;
      if (this.$store.state.Info.mendianGli.length !== 0) {
        console.log("1");
        const { _id: mendianGliId } = this.$store.state.Info.mendianGli[index];
        localStorage.mendianGliId = mendianGliId;
      }
    }
  },
  watch: {
    mendianGliIndex() {
      this.change_m();
      this.$store.dispatch("services/getFoods");
    },
    form1(){
      console.log("form1变了")
    },
    count(){
      this.$store.dispatch("services/getFoods");
    }

  },
  computed: {
    ...mapState("services", ["tableData4","form1","curenPage","count","eachPage"]),
    ...mapActions("services", ["addEmp"]),
    mendianGliIndex() {
      return this.$store.state.Info.mendianGliIndex;
    }
  },

  created() {
    this.change_m();
    this.$store.dispatch("services/getFoods");
  },

  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogFormVisible1: false,
      form: {
        serviceName: "",
        serviceType: "",
        serviceSchedule: "",
        serviceDetial: "",
        serviceTime: "",
        serviceLevel: "",
        servicePrice: "",
        rows: []
      },
      formLabelWidth: "120px"
    };
  }
};
</script>