const Mock = require('mockjs')
// 使用mockjs模拟数据
Mock.mock('http://localhost:8081/#/api/data'),(req,res) =>{
  return {
    data:[
      {
        data:'2016-05-02',
        name:'王小虎',
        address:"是地方就是什邡市了房价",
      },
      {
        data:'2017-05-02',
        name:'王小虎',
        address:"是地方就是了房价",
      },
      {
        data:'2018-05-02',
        name:'王小虎',
        address:"是地方就是了房价",
      },
      {
        data:'2019-05-02',
        name:'王小虎',
        address:"是地方就是了房价",
      },
    ]
  }
}