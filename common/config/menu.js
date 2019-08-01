export const links = [
    {
        title: '审批信息',
        icon: 'apply',
        path: '/approve',
        name: 'approve',
        auth: 'list'
    },
    {
        title: '我的信息',
        icon: 'profile',
        path: '/profile',
        name: 'user',
        auth: 'simpleInfo'
    },
    {
        title: '下属信息',
        icon: 'avatar',
        path: '/subordinates',
        name: 'user',
        auth: 'simpleInfo'
    },
    {
        title: 'HR工作台',
        icon: 'workbench',
        path: '/hrdb',
        auth: 2,
        empty: true,
        children: [
            {
                title: '员工信息',
                path: '/staffinfo',
                name: 'staff',
                auth: 'list'
            },
            {
                title: '发送offer',
                path: '/offerdely',
                name: 'offer',
                auth: 'addDraft'
            },
            {
                title: 'offer信息查询',
                path: '/offerinfo',
                name: 'offer',
                auth: 'list'
            },
            {
                title: '薪酬管理',
                path: '/salary',
                name: 'payroll',
                auth: 'statList'
            },
            {
                title: '考勤管理',
                path: '/attendancemgt',
                name: 'dailyAttendance',
                auth: 'list'
            },
            {
                title: '五险一金',
                path: '/insurance',
                name: 'socialSecurity',
                auth: 'socialCityStatistics'
            },
            {
                title: '审批流员工信息查询',
                path: '/approveStaffInfo',
                name: 'applyDetail',
                auth: ['list4','list5','list6','list7','list8','list9','list10']
            }
        ]
    },
    {
        title: '系统信息维护',
        icon: 'setting',
        path: '/setting',
        auth: 3,
        empty: true,
        children: [
            {
                title: '审计日志查询',
                path: '/auditQuery',
                name: 'sys',
                auth: 'auditLogList'
            },
            {
                title: '审批链信息维护',
                path: '/approveLink',
                name: 'approveLink',
                auth: 'list'
            },
            {
                title: '二级负责人以上维护',
                path: '/principal',
                name: 'secondLevelLeader',
                auth: 'list'
            },
            
            {
                title: '竞业协议员工级别维护',
                path: '/competition',
                name: 'secondLevelLeader',
                auth: 'list'
            },
            {
                title: '组织架构维护',
                path: '/organization',
                name: 'organization',
                auth: 'list'
            },
            {
                title: '公司信息维护',
                path: '/company',
                name: 'company',
                auth: 'mod',
                auth: ['add',"mod","modCompany"],
            },
            {
                title: '事业部信息维护',
                path: '/division',
                name: 'businessUnit',
                auth: ['add', 'mod']
            },
            {
                title: '职级体系维护',
                path: '/grade',
                name: 'grade',
                auth: ['seqMod']
            },
            {
                title: '薪酬组管理',
                path: '/salarygroup',
                name: 'salary',
                auth: ['list', 'add']
            },
            {
                title: '社保缴纳城市配置',
                path: '/insuranceCity',
                name: 'socialCityManager',
                auth: ['add']
            },
            {
                title: '工作日配置',
                path: '/workday',
                name: 'calendar',
                auth: ['tempList', 'tempAdd']
            },
            {
                title: '考勤组管理',
                path: '/attendance',
                name: 'attendance',
                auth: ['add']
            },
            {
                title: '特殊离职登记',
                path: '/resignation',
                name: 'specialStaff',
                auth: 'list'
            },
            {
                title: '用户管理',
                path: '/user',
                name: 'userRole',
                auth: ['list']
            },
            {
                title: '角色管理',
                path: '/role',
                name: 'role',
                auth: ['list', 'add']
            },
            {
                title: '菜单管理',
                path: '/menu',
                name: 'menu',
                auth: ['list', 'add']
            }
        ]
    }
]
