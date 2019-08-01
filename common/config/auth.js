/**
 * @file 权限配置
 * @author lixiaobin
 */


export default {
    // 菜单管理
    menu: {
        moduleNumber: 2,
        list: 1,
        add: 2,
        mod: 4,
        del: 8
    },
    // 角色菜单
    roleMenu: {
        moduleNumber: 3,
        detail: 1,
        mod: 2,
        del: 4
    },
    // 用户角色管理
    userRole: {
        moduleNumber: 4,
        list: 1,
        detail: 2,
        mod: 4,
        del: 8
    },
    // 权限模块
    permission: {
        moduleNumber: 5,
        list: 1
    },
    // 导入/上传
    upload: {
        moduleNumber: 6,
        excel: 1,
        upload: 2
    },
    // 自定义字段
    display: {
        moduleNumber: 7,
        detail: 1,
        mod: 2
    },
    // 职级
    grade: {
        moduleNumber: 8,
        seqList: 1,
        seqAdd: 2,
        seqMod: 4,
        seqDel: 8,
        list: 16,
        mod: 32,
        del: 64
    },
    // 系统角色
    role: {
        moduleNumber: 9,
        list: 1,
        add: 2,
        mod: 4,
        del: 8
    },
    // 筛选字段模块
    listFilter: {
        moduleNumber: 10,
        detail: 1,
        details: 2,
        mod: 4
    },
    // 工作日配置
    calendar: {
        moduleNumber: 11,
        tempList: 1,
        tempAdd: 2,
        tempMod: 4,
        list: 8,
        mod: 16
    },
    // 薪酬组配置
    salary: {
        moduleNumber: 12,
        list: 1,
        add: 2,
        mod: 4,
        del: 8,
        userChangeList: 16
    },
    // offer
    offer: {
        moduleNumber: 13,
        list: 1,
        detail: 2,
        addDraft: 4,
        modDraft: 8,
        reEntryDetail: 16,
        sendOffer: 32,
        abandon: 64,
        entry: 128,
        entryLack: 256
    },
    // 员工信息
    staff: {
        moduleNumber: 14,
        list: 1,
        simpleInfo: 2,
        basicInfo: 4,
        positionInfo: 8,
        salaryInfo: 16,
        privacyInfo: 32,
        otherInfo: 64,
        addEdu: 128,
        modEdu: 256,
        delEdu: 512,
        addWorkExp: 1024,
        modWorkExp: 2048,
        delWorkExp: 4096,
        addFamily: 8192,
        modFamily: 16384,
        delFamily: 32768,
        modBank: 65536,
        modPositionInfo: 131072,
        modPosition: 536870912,
        modResumeUrl: 262144,
        modAssetAllocation: 524288,
        modAttaches: 1048576,
        entry: 2097152,
        entryLack: 4194304,
        frozen: 8388608,
        modSalaryGroup: 16777216,
        modBasicInfo: 33554432,
        payroll: 67108864,
        simpleInfoList: 134217728,
        tmpMod: 536870912,
        tmpInfo: 1073741824,
       
    },
    approveStaffInfo: {
        moduleNumber: 14,
        list: 1,
        simpleInfo: 2,
        basicInfo: 4,
        positionInfo: 8,
        salaryInfo: 16,
        privacyInfo: 32,
        otherInfo: 64,
        addEdu: 128,
        modEdu: 256,
        delEdu: 512,
        addWorkExp: 1024,
        modWorkExp: 2048,
        delWorkExp: 4096,
        addFamily: 8192,
        modFamily: 16384,
        delFamily: 32768,
        modBank: 65536,
        modPositionInfo: 131072,
        modPosition: 536870912,
        modResumeUrl: 262144,
        modAssetAllocation: 524288,
        modAttaches: 1048576,
        entry: 2097152,
        entryLack: 4194304,
        frozen: 8388608,
        modSalaryGroup: 16777216,
        modBasicInfo: 33554432,
        payroll: 67108864,
        simpleInfoList: 134217728,
        tmpMod: 536870912,
        tmpInfo: 1073741824,
        modLeaderInfo:2147483648,
    },
    // 考勤管理
    attendanceMgt: {
    },

    // 考勤组
    attendance: {
        moduleNumber: 15,
        list: 1,
        add: 2,
        mod: 4,
        del: 8
    },
    // 审批链
    approveLink: {
        moduleNumber: 16,
        list: 1,
        detail: 2,
        add: 4,
        mod: 8,
        del: 16,
        modNode: 32
    },
    // 岗位配置
    position: {
        moduleNumber: 17,
        add: 2,
        mod: 4,
        del: 8
    },
    // 审批单
    apply: {
        moduleNumber: 18,
        list: 1,
        statistic: 2,
        detail: 4,
        approve: 8,
        batchApprove: 16,
        offer: 32,
        salaryGroup: 64,
        payrollList: 128,
        payrollStatistic: 256
    },
    // 薪酬管理
    payroll: {
        moduleNumber: 19,
        statList: 1,
        unappList: 2,
        unappStatDetail: 4,
        appList: 8,
        appStatDetail: 16,
        mod: 32,
        export: 64
    },
    // 用户
    user: {
        moduleNumber: 20,
        simpleInfo: 1,
        basicInfo: 2,
        positionInfo: 4,
        salaryInfo: 8,
        privacyInfo: 16,
        otherInfo: 32,
        addEdu: 64,
        modEdu: 128,
        delEdu: 256,
        addWorkExp: 512,
        modWorkExp: 1024,
        delWorkExp: 2048,
        addFamily: 4096,
        modFamily: 8192,
        delFamily: 16384,
        modResumeUrl: 32768,
        payroll: 65536,
        modMobile: 131072
    },
    // 组织架构
    organization: {
        moduleNumber: 21,
        list: 1,
        mod: 4,
        add: 4,
        del: 8,
        allNodes: 16
    },
    //审计日志查询
    sys:{
        moduleNumber:103,
        auditLogList:1
    },
    // 员工岗位薪酬人事调整
    staffAjust: {
        moduleNumber: 25,
        person: 1,
        positionAndSalary: 2,
        join: 4,
        leave: 8,
        renew: 16,
        salaryHis: 32,
        positionHis: 64,
        renewHis: 128
    },

    // 员工临时编辑
    staffTmp: {
        moduleNumber: 27,
        detail: 1,
        mod: 2,
        exportStaffList: 4,
        modStaffNo: 8,
        modLeaderInfo:16,
    },

    // 社保缴纳城市管理
    socialCityManager: {
        moduleNumber: 30,
        list: 1,
        mod: 2,
        del: 4,
        add: 8
    },

    // 社保缴纳
    socialSecurity: {
        moduleNumber: 31,
        socialCityStatistics: 1,
        list: 2,
        listStat: 4,
        socialCityList: 8,
        post: 16,
        del: 32
    },

    // 批量调薪
    salaryAdjust: {
        moduleNumber: 32,
        list: 1,
        post: 2,
        statistic: 4

    },

    // 日考勤管理
    dailyAttendance: {
        moduleNumber: 33,
        list: 1,
        fixStatus: 2,
        export: 4,
        sync: 8
    },

    // 移动办公
    oa: {
        moduleNumber: 34,
        overtime: 1,
        vacation: 2,
        businessTrip: 4,
        outdoor: 8,
        deferredAttendance: 16,
        overtimeExport: 32,
        vacationExport: 64,
        businessTripExport: 128,
        outdoorExport: 256,
        deferredAttendanceExport: 512,
        vacationUndo: 1024,
        businessTripUndo: 2048,
        outdoorUndo: 4096,
        vacationRedo: 8192,
        businessTripRedo: 16384,
        outdoorRedo: 32768
    },

    // 年假
    annualLeave: {
        moduleNumber: 35,
        list: 1,
        export: 2
    },

    // 调休
    shiftRestLeave: {
        moduleNumber: 36,
        list: 1,
        clean: 2,
        export: 4
    },

    // 月考勤统计
    monthlyAttendance: {
        moduleNumber: 37,
        list: 1,
        export: 2
    },

    // 分公司
    company: {
        moduleNumber: 38,
        add: 1,
        mod: 2,
        del: 4,
        modCompany: 8,
    },
 
    // 事业部
    businessUnit: {
        moduleNumber: 39,
        add: 1,
        mod: 2
    },

    // 合同管理
    contract: {
        moduleNumber: 40,
        modContractAttach: 1
    },

    // 年终奖
    annualBonus: {
        moduleNumber: 41,
        unapprovedList: 1,
        unapprovedStat: 2,
        approvedList: 4,
        approvedStat: 8,
        apply: 16,
        applyList: 32,
        applyStat: 64,
        exportUnapproved: 128,
        exportApproved: 256,
        staff: 512
    },

    // 组织架构管理区域
    orgManageArea: {
        moduleNumber: 42,
        add: 1,
        del: 2,
        clear: 4,
        updateDuplicatable: 8
    },
    // 审批流员工信息查询
    applyDetail : {
        moduleNumber:101,
        list4:1,
        export4:2,
        list5:4,
        export5:8,   
        list6:16,    
        export6:32,
        list7:64,
        export7:128,
        list8:256,
        export8:512,
        list9:1024,
        export9:2048,     
        list10:4096,   
        export10:8192  
        },
    // 特殊离职员工
    specialStaff:{
        moduleNumber: 102,
        list:1,
        add:2,
        mod:4,
        del:8
     },
     secondLevelLeader:{
        moduleNumber: 201,
        list:1,
        mod:2,
        recallMod:4
     }
}
