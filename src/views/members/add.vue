<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" size="mini" style="width:500px">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.pass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 伴随着axios 安装  转换数组形式为
import qs from 'qs'

export default {
  data() {
    return {
      form: {
        name: "",
          pass:'',
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!",this.form);
      var data=qs.stringify(this.form)
      this.axios.get('/data.php?'+data).then(res=>{
        console.log(res)
        this.$notify({
          title: '创建成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
        this.form={}
      })
    }
  }
};
</script>

<style>
</style>