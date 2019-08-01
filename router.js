import Vue from 'vue'
import Router from 'vue-router'

// 系统设置
// import User from './modules/user/index'
// import Role from './modules/role/index'
// import Menu from './modules/menu/index'
// import Grade from './modules/grade/index'
// import Workday from './modules/workday/index'
// import Attendance from './modules/attendance/index'
// import Salarygroup from './modules/salarygroup/index'
// import InsuranceCity from './modules/insuranceCity/index'
// import Organization from './modules/organization/index'

const User = () => import('./modules/user/index')
const Role = () => import('./modules/role/index')
const Menu = () => import('./modules/menu/index')
const Grade = () => import('./modules/grade/index')
const Workday = () => import('./modules/workday/index')
const Attendance = () => import('./modules/attendance/index')
const Salarygroup = () => import('./modules/salarygroup/index')
const InsuranceCity = () => import('./modules/insuranceCity/index')
const Organization = () => import('./modules/organization/index')
const Company = () => import('./modules/company/index')
const Division = () => import('./modules/division/index')

// 员工
// import Staffinfo from './modules/staffinfo/index'
// import StaffDetail from './modules/staffinfo/components/staffDetail'

const Staffinfo = () => import('./modules/staffinfo/index')
const StaffDetail = () => import('./modules/staffinfo/components/staffDetail')

// 下属
// import Subordinates from './modules/subordinates/index'
// import SubordinateDetail from './modules/subordinates/components/SubordinatesDetail'

const Subordinates = () => import('./modules/subordinates/index')
const SubordinateContractRenewHistory = () => import('./modules/subordinates/components/SubordinatesContractRenewHistory')
const SubordinateDetail = () => import('./modules/subordinates/components/SubordinatesDetail')
const SubordinateProfile = () => import('./modules/subordinates/components/SubordinatesProfile')
const SubordinatePosition = () => import('./modules/subordinates/components/SubordinatesPosition')
const SubordinatePositionHistory = () => import('./modules/subordinates/components/SubordinatesPositionHistory')
const SubordinateSalary = () => import('./modules/subordinates/components/SubordinatesSalary')
const SubordinateSalaryHistory = () => import('./modules/subordinates/components/SubordinatesSalaryHistory')
const SubordinateProbationTarget = () => import('./modules/subordinates/components/SubordinatesProbationTarget')
const SubordinateJoinApply = () => import('./modules/subordinates/components/SubordinatesJoinApply')
const SubordinatePayroll = () => import('./modules/subordinates/components/SubordinatesPayroll')
const SubordinateAttendance = () => import('./modules/subordinates/components/SubordinatesAttendance')

// 薪酬
// import Salary from './modules/salary'
// import SalaryGroupList from './modules/salary/components/GroupList'
// import SalaryList from './modules/salary/components/List'
// import SalaryArchive from './modules/salary/components/Archive'
// import BatchSalaryChange from './modules/salary/components/BatchSalaryChange'

const Salary = () => import('./modules/salary')
const SalaryGroupList = () => import('./modules/salary/components/GroupList')
const SalaryList = () => import('./modules/salary/components/List')
const SalaryArchive = () => import('./modules/salary/components/Archive')
const BatchSalaryChange = () => import('./modules/salary/components/BatchSalaryChange')
const AnnualBonus = () => import('./modules/salary/components/AnnualBonus')


// 考勤管理
// import AttendanceMgt from './modules/attendanceMgt'
// import AttendanceIndex from './modules/attendanceMgt/components/AttendanceIndex'
// import AttendanceOa from './modules/attendanceMgt/components/AttendanceOa'
// import AttendanceVacation from './modules/attendanceMgt/components/AttendanceVacation'
// import AttendanceStat from './modules/attendanceMgt/components/AttendanceStat'

const AttendanceMgt = () => import('./modules/attendanceMgt')
const AttendanceIndex = () => import('./modules/attendanceMgt/components/AttendanceIndex')
const AttendanceOa = () => import('./modules/attendanceMgt/components/AttendanceOa')
const AttendanceVacation = () => import('./modules/attendanceMgt/components/AttendanceVacation')
const AttendanceStat = () => import('./modules/attendanceMgt/components/AttendanceStat')

// 审批员工信息

const ApproveStaffInfo = () => import('./modules/approveStaffInfo/index.vue')
const ApproveInduction = () => import('./modules/approveStaffInfo/components/Induction')

// 特殊离职登记
const Resignation = ()=> import('./modules/resignation/components/Induction.vue')
const ResignationIndex = ()=> import('./modules/resignation/index.vue')


// 五险一金
// import Insurance from './modules/insurance'
// import InsuranceIndex from './modules/insurance/components/InsuranceIndex'
// import InsuranceList from './modules/insurance/components/InsuranceList'
// import InsuranceUnsubmitList from './modules/insurance/components/InsuranceUnsubmitList'

const Insurance = () => import('./modules/insurance')
const InsuranceIndex = () => import('./modules/insurance/components/InsuranceIndex')
const InsuranceList = () => import('./modules/insurance/components/InsuranceList')
const InsuranceUnsubmitList = () => import('./modules/insurance/components/InsuranceUnsubmitList')

// import Offerdely from './modules/offerdely'
// import Offerinfo from './modules/offerinfo'
// import OfferinfoDetail from './modules/offerinfo/components/OfferDetail'

const Offerdely = () => import('./modules/offerdely')
const Offerinfo = () => import('./modules/offerinfo')
const OfferinfoDetail = () => import('./modules/offerinfo/components/OfferDetail')

//审计查询
const AuditQuery = () => import('./modules/auditQuery/index')

// 审批链 （新）
// import ApproveLink from './modules/approveLink/index'

const ApproveLink = () => import('./modules/approveLink/index')

// 二级以上负责人维护
const Principal = () => import('./modules/principal/index.vue')
const Competition = ()=> import('./modules/competition/index.vue')

// 审批单 （新）
// import Approve from './modules/approve/index'
// import ApprovePending from './modules/approve/components/pending'
// import ApproveCompleted from './modules/approve/components/completed'
// import ApproveOriginated from './modules/approve/components/originated'
// import ApproveDetail from './modules/approve/detail'

const Approve = () => import('./modules/approve/index')
const ApprovePending = () => import('./modules/approve/components/pending')
const ApproveCompleted = () => import('./modules/approve/components/completed')
const ApproveOriginated = () => import('./modules/approve/components/originated')
const ApproveTransmit = () => import('./modules/approve/components/transmit')
const ApproveDetail = () => import('./modules/approve/detail')
 

import NotFound from './modules/authViews/notFound'
import NoAuth from './modules/authViews/noAuth'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/approve'
        },
        {
            path: '/approve',
            name: 'approve',
            redirect: '/approve/pending',
            component: Approve,
            children: [
                {
                    path: 'pending',
                    name: 'ApprovePending',
                    component: ApprovePending
                },
                {
                    path: 'completed',
                    name: 'ApproveCompleted',
                    component: ApproveCompleted
                },
                {
                    path: 'originated',
                    name: 'ApproveOriginated',
                    component: ApproveOriginated
                },
                {
                    path: 'transmit',
                    name: 'ApproveTransmit',
                    component: ApproveTransmit
                },
                {
                    path: 'detail/:id/:approveReqType?',
                    name: 'ApproveDetail',
                    component: ApproveDetail
                }
            ]
        },
        {
            path: '/staffinfo',
            name: 'staffinfo',
            component: Staffinfo,
            children: [
                {
                    path: 'staffDetail/:id',
                    name: 'staffDetail',
                    component: StaffDetail
                }
            ]
        },
        {
            path: '/salary',
            name: 'salary',
            component: Salary,
            redirect: '/salary/grouplist',
            children: [
                {
                    path: 'grouplist',
                    name: 'grouplist',
                    component: SalaryGroupList
                },
                {
                    path: 'list/:salaryGroupId/:payrollStatId/:month',
                    name: 'list',
                    component: SalaryList
                },
                {
                    path: 'archive',
                    name: 'archive',
                    component: SalaryArchive
                },
                {
                    path: 'batchSalaryChange/:salaryGroupId',
                    name: 'BatchSalaryChange',
                    component: BatchSalaryChange
                },
                {
                    path: 'annualBonus/:salaryGroupId/:year',
                    name: 'AnnualBonus',
                    component: AnnualBonus
                }
            ]
        },
        {
            path: '/attendancemgt',
            redirect: '/attendancemgt/index',
            name: 'attendancemgt',
            component: AttendanceMgt,
            children: [
                {
                    path: 'index',
                    name: 'AttendanceIndex',
                    component: AttendanceIndex
                },
                {
                    path: 'oa',
                    name: 'AttendanceOa',
                    component: AttendanceOa
                },
                {
                    path: 'vacation',
                    name: 'AttendanceVacation',
                    component: AttendanceVacation
                },
                {
                    path: 'stat',
                    name: 'AttendanceStat',
                    component: AttendanceStat
                },
            ]
        },
        {
            path: '/insurance',
            redirect: '/insurance/index',
            name: 'insurance',
            component: Insurance,
            children: [
                {
                    path: 'index',
                    name: 'InsuranceIndex',
                    component: InsuranceIndex
                },
                {
                    path: 'list',
                    name: 'InsuranceDetail',
                    component: InsuranceList
                },
                {
                    path: 'unsubmitList/:status/:areaId/:month/:areaName',
                    name: 'InsuranceUnsubmitList',
                    component: InsuranceUnsubmitList
                }
            ]
        },
        {
            path: '/approveStaffInfo',
            name: 'approveStaffInfo',
            redirect:'approveStaffInfo/induction',
            component: ApproveStaffInfo,
            children: [
                {
                    path: 'induction',
                    name: 'approveInduction',
                    component: ApproveInduction
                },
            ]
        },
        {
            path: '/profile',
            name: 'profile',
            component: StaffDetail
        },
        {
            path: '/subordinates',
            name: 'Subordinates',
            component: Subordinates,
            children: [
                {
                    path: 'detail/:id',
                    name: 'SubordinateDetail',
                    component: SubordinateDetail,
                    children: [
                        {
                            path: 'profile',
                            name: 'SubordinateProfile',
                            component: SubordinateProfile
                        },
                        {
                            path: 'contractRenewHistory',
                            name: 'SubordinateContractRenewHistory',
                            component: SubordinateContractRenewHistory
                        },
                        {
                            path: 'position',
                            name: 'SubordinatePosition',
                            component: SubordinatePosition
                        },
                        {
                            path: 'positionHistory',
                            name: 'SubordinatePositionHistory',
                            component: SubordinatePositionHistory
                        },
                        {
                            path: 'salary',
                            name: 'SubordinateSalary',
                            component: SubordinateSalary
                        },
                        {
                            path: 'salaryHistory',
                            name: 'SubordinateSalaryHistory',
                            component: SubordinateSalaryHistory
                        },
                        {
                            path: 'probationTarget',
                            name: 'SubordinateProbationTarget',
                            component: SubordinateProbationTarget
                        },
                        {
                            path: 'joinApply',
                            name: 'SubordinateJoinApply',
                            component: SubordinateJoinApply
                        },
                        {
                            path: 'payroll',
                            name: 'SubordinatePayroll',
                            component: SubordinatePayroll
                        },
                        {
                            path: 'attendance',
                            name: 'SubordinateAttendance',
                            component: SubordinateAttendance
                        }
                    ]
                }
            ]
        },
        {
            path: '/offerdely',
            name: 'offerdely',
            component: Offerdely
        },
        {
            path: '/offerinfo',
            name: 'offerinfo',
            component: Offerinfo,
            children: [
                {
                    path: 'detail/:id',
                    name: 'offerinfoDetail',
                    component: OfferinfoDetail
                }
            ]
        },
        {
            path: '/menu',
            name: 'menu',
            component: Menu
        },
        {
            path: '/role',
            name: 'role',
            component: Role
        },
        {
            path: '/workday',
            name: 'workday',
            component: Workday
        },
        {
            path: '/approveLink',
            name: 'approveLink',
            component: ApproveLink
        },
        {
            path: '/auditQuery',
            name: 'auditQuery',
            component: AuditQuery
        },
        {
            path:'/principal',
            name:'principal',
            component:Principal
        },
        {
            path:'/competition',
            name:'competition',
            component:Competition
        },
        {
            path: '/grade',
            name: 'grade',
            component: Grade
        },
        {
            path: '/organization',
            name: 'organization',
            component: Organization
        },
        {
            path: '/resignation',
            name: 'resignation',
            component: Resignation
        },
        {
            path: '/attendance',
            name: 'attendance',
            component: Attendance
        },
        {
            path: '/salarygroup',
            name: 'salarygroup',
            component: Salarygroup
        },
        {
            path: '/insuranceCity',
            name: 'insuranceCity',
            component: InsuranceCity
        },
        {
            path: '/user',
            name: 'user',
            component: User
        },
        {
            path: '/company',
            name: 'Company',
            component: Company
        },
        {
            path: '/division',
            name: 'Division',
            component: Division
        },
        {
            path: '/noPermisson',
            name: 'NoAuth',
            component: NoAuth
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})
