<template>
  <div class="container">
     <el-container>
        <el-header>header</el-header>
        <el-main>main</el-main>  
     </el-container> 
     <br/><br/>
     <el-container>
       <el-header>header</el-header>
       <el-main>main</el-main>
       <el-footer></el-footer>
     </el-container>
     <br/><br/>
     <el-container>
       <el-aside>aside</el-aside>
       <el-main>main</el-main>
     </el-container>
     <br/><br/>
     <el-container>
       <el-header>header</el-header>
       <el-container>
        <el-aside>aside</el-aside>
        <el-main>main</el-main>
       </el-container>
     </el-container>
     <br/><br/>
     <el-container>
       <el-header>header</el-header>
       <el-container>
         <el-aside>aside</el-aside>
         <el-container>
          <el-main>main</el-main>
          <el-footer>footer</el-footer>
         </el-container>
       </el-container>   
     </el-container>
     <br/><br/>
     <el-container>
       <el-aside>aside</el-aside>
       <el-container>
         <el-header>header</el-header>
         <el-main>main</el-main>
       </el-container>
     </el-container>
     <br/><br/>
     <el-container>
       <el-aside>aside</el-aside>
       <el-container>
         <el-header>header</el-header>
         <el-main></el-main>
         <el-footer></el-footer>
       </el-container>
     </el-container>
     <br/><br/>
     <el-container>
       <el-header>header</el-header>
       <el-container>
         <el-aside>aside</el-aside>
         <el-container>
           <el-main>main</el-main>
           <el-footer>footer</el-footer>
         </el-container>
       </el-container>
     </el-container>
  </div>
</template>

<script>
export default {
  name: 'container',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header, .el-footer {
    background-color: #eee;
    height: 60px;
  }
  .el-main {
    background-color: #ccc;
    height: 120px;
  }
  .el-aside {
    background-color: #acecec;
    width: 120px;
    
  }
</style>
