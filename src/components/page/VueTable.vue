<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 当前功能</el-breadcrumb-item>
                <el-breadcrumb-item class="wd">调查列表管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="forms">
            <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="调查列表 (+ 单击标题栏展开)" name="1">
                    <div>
                        <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                        <el-table-column
                            prop="xuhao"
                            label="序号"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="调查名称"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="neirong"
                            label="调查内容">
                        </el-table-column>
                            <el-table-column
                                prop="duixiang"
                                label="考评对象">
                            </el-table-column>
                            <el-table-column
                                prop="time"
                                label="调查时间">
                            </el-table-column>
                    </el-table>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>
<style>
</style>
