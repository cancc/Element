<template>
  <div>
    <el-radio v-model="radio1" label="1">备选项1</el-radio>
    <el-radio v-model="radio1" label="2">备选项2</el-radio>
    <el-radio v-model="radio1" label="100">备选项100</el-radio>

    <el-radio-group v-model="radio2">
      <el-radio :label="3">备选</el-radio>
      <el-radio :label="6">备选</el-radio>
      <el-radio :label="9">备选</el-radio>
    </el-radio-group>

    <el-checkbox-group v-model="checkList">
      <el-checkbox label="A"></el-checkbox>
      <el-checkbox label="B"></el-checkbox>
      <el-checkbox label="C"></el-checkbox>
      <!--label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。-->
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>

    <el-checkbox-group v-model="list">
      <el-checkbox label="hello"></el-checkbox>
      <el-checkbox label="world"></el-checkbox>
    </el-checkbox-group>

    <!--input输入框-->
    <!--正常-->
    <el-input v-model="input" placeholder="请输入"></el-input>
    <!--禁用-->
    <el-input :disabled="true" v-model="input" placeholder="请输入"></el-input>
    <!--后面有小标志可清空-->
    <el-input v-model="input100" clearable placeholder="请输入"></el-input>
    <!--带icon的输入框 prefix-icon和suffix-icon-->
    <div class="demo-input-suffix">
      <el-input suffix-icon="el-icon-date" v-model="input101" placeholder="请选择日期"></el-input>
      <el-input prefix-icon="el-icon-search" v-model="input102" placeholder="请输入内容"></el-input>
    </div>
    <!--文本域，输入多行文本-->
    <el-input type="textarea" :rows="2" v-model="textarea" placeholder="请输入内容"></el-input>
    <!--可自适应文本高度的文本域-->
    <el-input type="textarea" autosize placeholder="输入内容" v-model="textarea1"></el-input>
    <!--复合型输入框-->
    <div>
      <el-input placeholder="输入内容" v-model="input103">
        <template slot="prepend">Http://</template>
        <template slot="append">.com</template>
      </el-input>
    </div>

    <div >
      <el-input placeholder="请输入" v-model="input104">
        <el-select style="width: 100px" v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <!--TimePicker 时间选择器-->
    <!--固定时间点-->
    <el-time-select v-model="value106"
     :picker-options="{start:'08:30',step: '00:15',end:'18:30'}" placeholder="选择时间"></el-time-select>
     <!--任意时间点-->
     <el-time-picker v-model="value107" 
       :picker-options="{
          selectableRange: ' 00:30:00 - 20:30:00 '
       }" placeholder="任意时间">
       </el-time-picker>
       <!--固定时间范围-->
       <el-time-select placeholder="起始时间" v-model="startTime"
        :picker-options="{
          start: '08:30',step:'00:15',end:'18:30'
        }">
        </el-time-select>
        <el-time-select placeholder="结束时间" v-model="endTime" 
          :picker-options="{
            start:'08:30',step:'00:15',end:'18:30',minTime:startTime
          }">
          </el-time-select>
          <!--任意时间范围-->
          <el-time-picker is-range v-model="value109" 
           range-separator="至"
           start-placeholder="开始时间"
           end-placeholder="结束时间"
           placeholder="选择时间范围">
           </el-time-picker>
      <!--DatePicker 日期选择器-->
      <div>
        <el-date-picker v-model="value200" type="date" placeholder="请选择日期">
        </el-date-picker>
      </div>
      <!--周-->
      <div></div>

    <el-input-number v-model="num1" :min="1" :max="10" label="描述文字"></el-input-number>
    <el-input-number v-model="num2" size="medium" :disabled="true" ></el-input-number>
    <el-input-number v-model="num3" size="small" :step="2"></el-input-number>
    <el-input-number v-model="num6" size="mini" :precision="2" :step="0.1" :max="10"></el-input-number>
    <el-input-number v-model="num7" controls-position="right"></el-input-number>
    <!--Cascader级联选择器-->
    <el-cascader :options="options" v-model="selectedOptions" ></el-cascader>
    <!--ColorPicker颜色选择器-->
    <!--有默认-->
    <el-color-picker v-model="color1" size="medium"></el-color-picker>
    <!--没有默认-->
    <el-color-picker v-model="color2" size="small"></el-color-picker>
    <!--透明度-->
    <el-color-picker :disabled="true" v-model="color3" show-alpha size="mini"></el-color-picker>
    
    <div>
      <!--Transfer穿梭框-->
    
    </div>
    <el-transfer filterable v-model="value300" :data="data"></el-transfer>
  </div>


</template>
<script>

  export default {
    data() {
      const generateData=_=> {
        const data = [];
        for(let i=1;i<=6;i++){
          data.push({
            key:i,
            label:`备选项 ${i}`,
            disabled:i%4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value300: [1,2],
        radio1: '100',
        radio2: 3,
        checkList: ['选中且禁用', 'A'],
        input: '',
        input100: '',
        input101:'',
        input102: '',
        input103: '',
        input104:'',
        textarea: '',
        textarea1: '',
        select: '',
        list: ['hello'],
        num1:1,
        num2:1,
        num3:6,
        num6: 1,
        num7: 1,
        value106: '',
        value107: new Date(2018,6,13,18,30),
        startTime:'',
        endTime:'',
        value109:[new Date(2018,6,13,18,30),new Date(2018,6,13,18,30)],
        value200: '',
        selectedOptions:[],
        options:[{
          value:'zhinan',
          label:'指南',
          children:[{
            value:'shejiyuanze',
            label:'设计原则',
            children:[{
              value:'yizhi',
              label:'一致'
            },{
              value:'fankui',
              label:'反馈'
            },{
              value: 'xiaolv',
              label:'效率'
            },{
              value:'kekong',
              label:'可控'
            }]
          },{
            value:'daohang',
            label:'导航',
            children:[{
              value:'cexiangdaohang',
              label:'侧向导航'
            },{
              value:'dingbudaohang',
              label:'顶部导航'
            }]
          }]
        }],
        color1:'#653E3E',
        color2:null,
        color3: 'rgba(255, 0, 0, 0.34)',
        
      }
      
    }
  }

</script>
<style>


</style>
