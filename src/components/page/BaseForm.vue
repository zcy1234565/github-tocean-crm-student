<template>

    <el-container>
        <el-container>
            <div class="title">Header</div>
            <div class="title-2">你好</div>
            <div class="title-3">Header</div>
            <el-main>
                <el-table
                    :data="tableData"
                    border
                    style="width: 100%; height:500px">
                    <el-table-column
                        prop="XH"
                        label="序号"
                        width="72"
                        height="500">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="学员名称"
                        width="100"
                        height="10">
                    </el-table-column>
                    <el-table-column
                        prop="ont"
                        label="学号"
                        width="180"
                        height="10">
                    </el-table-column>

                    <el-table-column
                        prop="class1"
                        label="班级"
                        width="180"
                        height="10">
                    </el-table-column>
                    <el-table-column
                        prop="sex"
                        label="性别"
                        width="80"
                        height="10">
                    </el-table-column>
                    <el-table-column
                        prop="XL"
                        label="学历"
                        width="80"
                        height="10">
                    </el-table-column>
                    <el-table-column
                        prop="RXphone"
                        label="入学时联系电话"
                        width="200"
                        height="10">
                    </el-table-column>
                    <el-table-column
                        prop="LXphone"
                        label="离学时联系电话"
                        width="200"
                        height="10">
                    </el-table-column>
                </el-table>

            </el-main>
            <!--
            <el-footer>Footer</el-footer>
            -->
        </el-container>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    XH:'1',
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    XH:'2',
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    XH:'3',
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    XH:'4',
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    XH:'5',
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    XH:'6',
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    XH:'7',
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
            }
        }
    }
</script>

<style scoped>
    .title{
        background-color: #d2ecff;
        margin-bottom: 10px;
        color: #333;
        text-align: left;
        height: 30px;
        width: 100%;
    }
    .title-2{
        background-color: #d2ecff;
        margin-bottom: 10px;
        color: #333;
        text-align: left;
        line-height: 50px;
        width: 100%;
    }
    .title-3{
        background-color: #d2ecff;
        color: #333;
        text-align: left;
       line-height: 30px;
        width: 100%;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color:#d2ecff;
        color: #333;
        text-align: center;
        line-height: 100px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>

