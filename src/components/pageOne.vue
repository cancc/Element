<template>
    <div>
  <el-container style="height: 600px">
  <el-header align="left">
    <span>首页</span>&nbsp&nbsp&nbsp
    <span>用户信息</span>
  </el-header>
  <el-container>
    <el-aside width="200px">
      <el-menu style="background-color:#D3DCE6;" :default-openeds="['1','2']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu"></i>导航一</template>
          <el-menu-item-group >
            <template slot="title">分组</template>
            <el-menu-item index="1-1">选项</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>导航二</template>
          <el-menu-item-group>
            <template slot="title">分组</template>
            <el-menu-item index="2-1">选项</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="height: 40px;background-color:#B3C0e1;text-align:right">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 16px">&nbsp设置</i>
          <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="el-icon-view"></i>&nbsp查看</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-edit"></i>&nbsp新增</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-delete"></i>&nbsp删除</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <el-table :data="tableData" >
          <el-table-column prop="date" align='left' label="日期" width="140"></el-table-column>
          <el-table-column prop="name" align='left' label="公司" width="200"></el-table-column>
          <el-table-column prop="address" align='left' label="地址"></el-table-column>
          <el-table-column  align='left' label="操作">
            <template  slot-scope="scope">
              <el-button type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer>砼鑫软件科技有限公司</el-footer>
    </el-container>
  </el-container>
</el-container>
</div>
</template>

<script>
export default {
  name: 'pageOne',
  data () {
    return {
      tableData:[
        {date:'2018-06-12',name:'砼鑫软件科技有限公司',address: '河南省郑州市金水区南阳路'},
        {date:'2018-06-12',name:'砼鑫软件科技有限公司',address: '河南省郑州市金水区南阳路'},
        {date:'2018-06-12',name:'砼鑫软件科技有限公司',address: '河南省郑州市金水区南阳路'},
        {date:'2018-06-12',name:'砼鑫软件科技有限公司',address: '河南省郑州市金水区南阳路'},
        {date:'2018-06-12',name:'砼鑫软件科技有限公司',address: '河南省郑州市金水区南阳路'},
        {date:'2018-06-12',name:'砼鑫软件科技有限公司',address: '河南省郑州市金水区南阳路'},
        {date:'2018-06-12',name:'砼鑫软件科技有限公司',address: '河南省郑州市金水区南阳路'},
        {date:'2018-06-12',name:'砼鑫软件科技有限公司',address: '河南省郑州市金水区南阳路'},
        {date:'2018-06-12',name:'砼鑫软件科技有限公司',address: '河南省郑州市金水区南阳路'},
        {date:'2018-06-12',name:'砼鑫软件科技有限公司',address: '河南省郑州市金水区南阳路'},
        {date:'2018-06-12',name:'砼鑫软件科技有限公司',address: '河南省郑州市金水区南阳路'},
        {date:'2018-06-12',name:'砼鑫软件科技有限公司',address: '河南省郑州市金水区南阳路'},
        {date:'2018-06-12',name:'砼鑫软件科技有限公司',address: '河南省郑州市金水区南阳路'},
        {date:'2018-06-12',name:'砼鑫软件科技有限公司',address: '河南省郑州市金水区南阳路'},
        {date:'2018-06-12',name:'砼鑫软件科技有限公司',address: '河南省郑州市金水区南阳路'},
        {date:'2018-06-12',name:'砼鑫软件科技有限公司',address: '河南省郑州市金水区南阳路'}
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;    
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;  
    line-height: 300px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;  
    /*line-height: 160px;*/
  }
  .el-menu-item-group {
    background-color: #D3DCE6;
  }
</style>
