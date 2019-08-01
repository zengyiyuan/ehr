import Vuex from 'vuex'
import Vue from 'vue'
import approve from './modules/approve/store'
import approveLink from './modules/approveLink/store'
import staffinfo from './modules/staffinfo/store'
import offerdely from './modules/offerdely/store'
import offerinfo from './modules/offerinfo/store'
import salary from './modules/salary/store'
import insurance from './modules/insurance/store'
import grade from './modules/grade/store'
import menu from './modules/menu/store'
import role from './modules/role/store'
import attendance from './modules/attendance/store'
import attendanceMgt from './modules/attendanceMgt/store'
import organization from './modules/organization/store'
import salarygroup from './modules/salarygroup/store'
import insuranceCity from './modules/insuranceCity/store'
import user from './modules/user/store'
import workday from './modules/workday/store'
import company from './modules/company/store'
import division from './modules/division/store'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: false,
    state: {
        userInfo: {},
        showSetHeaderState: false,
        showModPassState: false
    },
    mutations,
    actions,
    modules: {
        approve,
        approveLink,
        staffinfo,
        offerdely,
        offerinfo,
        salary,
        insurance,
        organization,
        grade,
        menu,
        role,
        attendance,
        attendanceMgt,
        salarygroup,
        insuranceCity,
        user,
        workday,
        company,
        division
    }
})
