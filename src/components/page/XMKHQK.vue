
<template>
    <div>
        <div>
            <el-breadcrumb class="crumbs-vue">
                <el-breadcrumb-item><i class="el-icon-menu"></i>当前功能</el-breadcrumb-item>
                <el-breadcrumb-item>项目考核信息查询</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="crumbs">
            <el-breadcrumb class="crumbs-vuess">
                <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
                    <el-form-item label="班级：" size="mini" style="margin-left:500px">
                        <el-select v-model="formInline.region" placeholder="" size="mini" style="width: 150px">
                            <el-option label="ASD08061" value="class1"></el-option>
                            <el-option label="ASD08062" value="class2"></el-option>
                            <el-option label="ASD08063" value="class3"></el-option>
                            <el-option label="ASD0807" value="class4"></el-option>
                            <el-option label="ASD0808" value="class5"></el-option>
                            <el-option label="ASD0809" value="class6"></el-option>
                            <el-option label="ASD08010(1)" value="class7"></el-option>
                            <el-option label="ASD08010(2)" value="class8"></el-option>
                            <el-option label="0803" value="class9"></el-option>
                            <el-option label="0804" value="class10"></el-option>
                            <el-option label="SD0806" value="class11"></el-option>
                            <el-option label="SD0808" value="class12"></el-option>
                            <el-option label="SD0807" value="class13"></el-option>
                            <el-option label="SD0809" value="class14"></el-option>
                            <el-option label="SD08010" value="class15"></el-option>
                            <el-option label="SD08011" value="class16"></el-option>
                            <el-option label="SD0802" value="class17"></el-option>
                            <el-option label="SD0805" value="class18"></el-option>
                            <el-option label="WSD0804" value="class19"></el-option>
                            <el-option label="SD0901" value="class20"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="考评类型：" size="mini">
                        <el-select v-model="formInline.res" placeholder="初次考核" size="mini" style="width: 100px">
                            <el-option label="初次考核" value="kaohe1"></el-option>
                            <el-option label="再次考核" value="kaohe2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="项目：" size="mini">
                        <el-select v-model="formInline.xm" placeholder="DMS" size="mini" style="width: 90px">
                            <el-option label="DMS" value="dms"></el-option>
                            <el-option label="微信小程序" value="wxxcx"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <div class="block1">
                            <span class="demonstration" style="margin-left: 220px">时间：</span>
                            <el-date-picker
                                v-model="value3" size="mini" style="width: 300px"
                                type="datetimerange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                            </el-date-picker>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-time-select
                            placeholder="起始时间"
                            v-model="startTime" size="mini"
                            :picker-options="{
                              start: '08:30',
                              step: '00:15',
                              end: '18:30'
    }">
                        </el-time-select>
                        <el-time-select
                            placeholder="结束时间"
                            v-model="endTime" size="mini"
                            :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30',
                        minTime: startTime
    }">
                        </el-time-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit" size="small">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-breadcrumb></div>
        <div class="plugins-3">
            <div class="informationss"><el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="项目考核信息列表(+单击标题栏展开）" name="1">
                    <template>
                        <el-table :data="tableData" border  style="width: 82%; margin-left: 90px;margin-top: 20px">
                            <el-table-column
                                prop="number"
                                label="序号"
                                width="70">
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="学员"
                                width="120">
                            </el-table-column>
                            <el-table-column
                                prop="class"
                                label="班级"
                                width="120">
                            </el-table-column>
                            <el-table-column
                                prop="xiangmu"
                                label="项目"
                                width="140">
                            </el-table-column>
                            <el-table-column
                                prop="khdate"
                                label="考核日期"
                                width="160">
                            </el-table-column>
                            <el-table-column
                                prop="khlx"
                                label="考核类型"
                                width="160">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="分数"
                                width="100">
                            </el-table-column>
                        </el-table>
                    </template>
                </el-collapse-item>
            </el-collapse>

                <div class="crumbs2">
                    <div class="block">
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage3"
                            :page-size="100"
                            layout="prev, pager, next, jumper"
                            :total="1000">
                        </el-pagination>
                    </div><div class="div"><el-button  size="mini">提交</el-button></div>
                    </div>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                formInline: {
                    user: '',
                    region: '',
                    res:'',
                    xm:'',
                    startTime: '',
                    endTime: ''
                },
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value3: [new Date(2017, 10, 10, 10, 10), new Date(2017, 11, 11, 17, 10)],
                tableData: [{
                    number:'1',
                    name: '詹欣宇',
                    class:'SD0806',
                    xiangmu: 'DMS',
                    khdate: '2017-6-05',
                    khlx:'初次考核',
                    address:'0'
                },
                    {
                        number:'2',
                        name: '詹欣宇',
                        class:'SD0806',
                        xiangmu: 'DMS',
                        khdate: '2017-6-05',
                        khlx:'初次考核',
                        address:'0'
                    }],
                methods: {
                    onSubmit() {
                        console.log('submit!');
                    },
                    handleSizeChange(val) {
                        console.log(`每页 ${val} 条`);
                    },
                    handleCurrentChange(val) {
                        console.log(`当前页: ${val}`);
                    }
                },
                data() {
                    return {
                        currentPage1: 5,
                        currentPage2: 5,
                        currentPage3: 5,
                        currentPage4: 4
                    };

                }
            }
        }
    }
</script>

<style >

    .crumbs{
        background-color:#EEF7FD;
        border: 1px solid  #B3CDE8;
    }
    .crumbs-vue{
        width: 100%;
        height: 40px;
        line-height: 40px;
    }
    .crumbs-vuess{
        width: 100%;
        height: 90px;
    }
    .plugins-3{
        background-color:#ffffff;
        border: 1px solid  #B3CDE8;
        height: 450px;

    }

    .informationss{
        color: #1A438E;
        background-color: #CFE0F1;
        height: 30px;
        width: 100%;
    }
    .crumbs2{
        display: flex;
        flex-direction: row;
        background-color:#EEF7FD;
        border-top: 1px solid  #B3CDE8;
        height: 60px;
        line-height: 60px;
        text-align: center;
        margin-top: 165px;
    }
  .block{
      flex-grow: 1;
      margin-top: 10px;
  }
    .div{
        margin-right: 80px;
    }
</style>
