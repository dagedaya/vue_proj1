<template>
<div>
<el-container>
    <el-aside style="width:auto">
    <el-scrollbar style="height:100%">
        <!-- 左侧 -->
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
        router
        >
        <template v-for="(vo,index) in navList">
            <el-submenu :index="index+''" v-if="vo.children&&vo.children.length!=0" :key="index">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{vo.meta.title}}</span>
            </template>
            <el-menu-item
                v-for="item in vo.children"
                :key="item.id"
                :index="item.path"
            >{{item.meta.title}}</el-menu-item>
            </el-submenu>
            <el-menu-item :index="vo.path" v-else :key="index">
            <i class="el-icon-menu"></i>
            <span slot="title">{{vo.meta.title}}</span>
            </el-menu-item>
        </template>
        </el-menu>
    </el-scrollbar>
    </el-aside>
    <el-container>
    <el-header>
        <i class="el-icon-s-fold menu-clock" @click="isCollapse=!isCollapse"></i>
    </el-header>
    <el-main>
        <router-view></router-view>
    </el-main>
    <el-footer>Footer</el-footer>
    </el-container>
</el-container>
</div>
</template>

<script>
export default {
    data(){
        return {
            isCollapse:false,
            navList:[
                {
                    path:'/home',
                    name:'',
                    meta:{
                        title:'首页'
                    }
                },
                {
                    path:'',
                    name:'',
                    meta:{
                        title:'会员管理',
                    },
                    children:[
                        {
                            path:'/members/list',
                            name:'',
                            meta:{
                                title:'会员列表',
                            }
                        },
                        {
                            path:'/members/add',
                            name:'',
                            meta:{
                                title:'会员添加',
                            }
                        }
                    ]
                }
            ]
        }
    },
    computed:{},
    //生命周期钩子函数
    // 加载了属性和方法
    // created(){
        // $route是接收信息   $router调用
        // console.log('当前页面路由信息',this.$route)
    // },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>

<style scoped>
.el-scrollbar__wrap {
    overflow-x: hidden;
}
.el-menu {
    border: none !important;
}
.el-header,
.el-footer {
    line-height: 60px;
}
.menu-clock {
    font-size: 24px;
}

.el-aside {
    background-color: #545c64;
  /* padding-right: 1px; */
    overflow-x: hidden;
}   
/* 官方给出设定目录宽度的类名 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-submenu {
    width: 200px;
}
    

body > .el-container {
    margin-bottom: 40px;
}
.el-container {
    height: 100vh;
}
</style>