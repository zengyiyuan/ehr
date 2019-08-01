/**
 * @file 登录接口
 *
 * @author Xiong,Cheng-Qing
 */


import { postWithJson } from '@/common/service'

/**
 * 登录
 *
 * @param {String} params.userName 用户名
 * @param {String} params.password 密码
 * @param {String} params.validateCode 验证码
 *
 * @return {Promise}
 */
export const login = (params) => postWithJson(`/login.json`, params)

/**
 * 获取全局参数配置
 *
 * @return {Promise}
 */
export const getGlobalConfig = (params) => postWithJson(`/login.json`, params)


/**
 * 登出
 *
 * @return {Promise}
 */
export const logout = () => postWithJson(`/logout.json`, {})

/**
 * 切换角色
 *
 * @param {number} roleId 角色id
 *
 * @return {Promise}
 */
export const changeRole = (params) => postWithJson(`/changeRole.json`, params)


/**
 * 获取登录者信息
 *
 * @return {Promise}
 */
export const loginInfo = () => postWithJson(`/login/info.json`, {})


/**
 * 获取地域信息
 *
 * @param {number=} params.areaId 区域id，没有areaId表示取所有省的数据
 *
 * @return {Promise}
 */
export const areaSearch = (params) => postWithJson(`/area/search.json`, params)

/**
 * 验证身份
 *
 * @param {String} params.userName 用户名
 * @param {String} params.mobile 手机号
 * @param {String} params.idNo 证件号
 *
 * @return {Promise}
 */
export const validateIdentity = (params) => postWithJson(`/login/validate.json`, params)

/**
 * 重置密码
 *
 * @param {String} params.emailCode 邮箱验证码
 * @param {String} params.mobileCode 手机验证码
 *
 * @return {Promise}
 */
export const reset = (params) => postWithJson(`/login/reset.json`, params)

/**
 * 修改初始密码
 *
 * @param {String} params.password 初始密码
 * @param {String} params.newPassword 新密码
 *
 * @return {Promise}
 */
export const changePass = (params) => postWithJson(`/login/changePassword.json`, params)


/**
 * 自定义字段详情
 *
 * @param {Number} params.displayType 自定字段类型
 *
 * @return {Promise}
 */
export const getHeaderConfig = (params) => postWithJson(`/display/detail.json`, params)

/**
 * 设置自定义字段
 *
 * @param {Number} params.displayType 自定义字段类型
 * @param {Array} params.fields 自定义字段列表
 *
 * @return {Promise}
 */
export const setHeaderConfig = (params) => postWithJson(`/display/mod.json`, params)

/**
 * 获取职级体系列表
 *
 * @return {Promise}
 */
export const getSequenceList = (params) => postWithJson(`/grade/seqList.json`, params)

/**
 * 获取岗位/职位列表
 *
 * @return {Promise}
 */
export const getPositionList = (params) => postWithJson(`/position/list.json`, params)

/**
 * 获取考勤组列表
 *
 * @return {Promise}
 */
export const getAttendanceList = (params) => postWithJson('/attendanceGroup/list.json', params)

/**
 * 获取薪酬组列表
 *
 * @return {Promise}
 */
export const getSalaryGroupList = (params) => postWithJson(`/salaryGroup/list.json`, params)

export const getSalaryGroupUserList = (params) => postWithJson(`/salaryGroup/userChargeList.json`, params)

/**
 * 获取日历模板列表
 *
 * @return {Promise}
 */
export const getCalendarTempList = (params) => postWithJson(`/calendar/tempList.json`, params)

/**
 * 获取职级体系-序列
 *
 * @return {Promise}
 */
export const sequenceSearch = (params) => postWithJson(`/grade/seqList.json`, params)

/**
 * 获取职级体系-职级
 *
 * @return {Promise}
 */
export const gradeSearch = (params) => postWithJson(`/grade/list.json`, params)

/**
 * 获取角色列表
 *
 * @return {Promise}
 */
export const getRoleList = (params) => postWithJson(`/role/list.json`, params)

/**
 * 获取审批链类型列表
 *
 * @return {Promise}
 */
export const getApproveLinkTypeList = (params) => postWithJson(`/approveType/list.json`, params)


/**
 * 获取所有的组织架构
 *
 * @return {Promise}
 */
export function allNodes (params) {
    return postWithJson('/organization/allNodes.json', params)
}

/**
 * 获取社保城市列表
 *
 * @return {Promise}
 */
export const getInsuranceCityList = (params) => postWithJson(`/socialCityManager/list.json`, params)

/**
 * 获取下属总计
 *
 * @return {Promise}
 */
export const getSunordinatesCount = (params) => postWithJson(`/user/underlingsCount.json`, params)

/**
 * 分公司列表
 *
 * @param {String} params.name 公司名称
 * @param {Object} params.pageDto 分页信息
 *
 * @return {Promise}
 */
export const getCompanyList = (params = { pageDto: { pageSize: 1000 }}) => postWithJson(`/company/list.json`, params)

/**
 * 事业部列表
 *
 * @param {String} params.name 事业部名称
 * @param {Object} params.pageDto 分页信息
 *
 * @return {Promise}
 */
export const getDivisionList = (params = { pageDto: { pageSize: 1000 }}) => postWithJson(`/businessUnit/list.json`, params)

/**
 * 部门级别
 *
 * @return {Promise}
 */
export const getDeptLevelList = (params) => postWithJson(`/dept/levelList.json`, params)

export const getDeptGradeList = (params) => postWithJson(`/dept/gradeList.json`, params)

/**
 * 部门类型
 *
 * @return {Promise}
 */
export const getDeptTypeList = (params) => postWithJson(`/dept/typeList.json`, params)

/**
 * 检查头像是否存在
 *
 * @return {Promise}
 */
export const checkAvatarExist = (params) => postWithJson(`/staffTmp/checkAvatar.json`, params)

/**
 * 事业部列表
 *
 * @return {Promise}
 */
export const getBusinessUnitList = (params) => postWithJson(`/businessUnit/list.json`, params)

