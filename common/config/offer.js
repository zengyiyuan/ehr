const DOUBLE_PATTERN = /^\d+(?:\.\d{1,2})?$/

export default {
    staffTypeList: [
        {
            id: 1,
            name: '正式'
        },
        {
            id: 2,
            name: '实习'
        },
        {
            id: 3,
            name: '劳务'
        }
    ],
    staffStatusList: [
        {
            id: 1,
            name: '草稿,Offer审批中'
        },
        {
            id: 2,
            name: '待入职'
        },
        {
            id: 3,
            name: '放弃入职'
        },
        {
            id: 4,
            name: '已入职(缺材料)'
        },
        {
            id: 5,
            name: '已入职'
        },
        {
            id: 6,
            name: '实习'
        },
        {
            id: 7,
            name: '正式员工'
        },
        {
            id: 8,
            name: '离职审批中'
        },
        {
            id: 9,
            name: '已离职'
        },
        {
            id: 10,
            name: '冻结'
        }
    ],
    countryList: [
        {
            id: 1,
            name: '中国大陆'
        },
        {
            id: 2,
            name: '港澳台'
        },
        {
            id: 3,
            name: '其他'
        }
    ],
    salaryGroupList: [
        {
            id: 1,
            name: '技术组'
        },
        {
            id: 2,
            name: '管理组'
        },
        {
            id: 3,
            name: '销售组'
        }
    ],
    highestEducationList: [
        {
            id: 1,
            name: '本科'
        },
        {
            id: 2,
            name: '专科'
        },
        {
            id: 3,
            name: '硕士研究生'
        },
        {
            id: 4,
            name: '博士研究生'
        },
        {
            id: 5,
            name: '其它'
        }
    ],
    highestDegreeList: [
        {
            id: 1,
            name: '学士'
        },
        {
            id: 2,
            name: '硕士'
        },
        {
            id: 3,
            name: '博士'
        },
        {
            id: 4,
            name: '其它'
        }
    ],
    politicalStatusList: [
        {
            id: 1,
            name: '党员'
        },
        {
            id: 2,
            name: '预备党员'
        },
        {
            id: 3,
            name: '群众'
        },
        {
            id: 4,
            name: '其它'
        }
    ],
    marryStatusList: [
        {
            id: 1,
            name: '未婚'
        },
        {
            id: 2,
            name: '已婚'
        },
        {
            id: 3,
            name: '其它'
        }
    ],
    hasChildrenList: [
        {
            id: 1,
            name: '未育'
        },
        {
            id: 2,
            name: '已育'
        }
    ],
    registerTypeList: [
        {
            id: 1,
            name: '本地城镇'
        },
        {
            id: 2,
            name: '本地农村'
        },
        {
            id: 3,
            name: '外埠城镇'
        },
        {
            id: 4,
            name: '外埠农村'
        }
    ],
    idTypeList: [
        {
            id: 1,
            name: '身份证'
        },
        {
            id: 2,
            name: '护照'
        },
        {
            id: 3,
            name: '港澳台通行证'
        },
        {
            id: 4,
            name: '外国人永久居住证'
        }
    ],
    positionTypeList: [
        {
            id: 1,
            name: '员工'
        },
        {
            id: 2,
            name: '老师'
        },
        {
            id: 3,
            name: '财务'
        },
        {
            id: 4,
            name: '审计'
        },
        {
            id: 5,
            name: '校长/副校长'
        }
    ],
    contractTypeList: [
        {
            id: 1,
            name: '劳动合同'
        },
        {
            id: 2,
            name: '实习协议'
        },
        {
            id: 3,
            name: '劳务合同'
        }
    ],
    contractPeriodList: [
        {
            id: 1,
            name: '1年'
        },
        {
            id: 2,
            name: '2年'
        },
        {
            id: 3,
            name: '3年'
        },
        {
            id: 4,
            name: '4年'
        },
        {
            id: 5,
            name: '5年'
        },
        {
            id: 6,
            name: '无固定期限'
        }
    ],
    probationList: [
        {
            id: 0,
            name: '无试用期'
        },
        {
            id: 1,
            name: '1个月'
        },
        {
            id: 2,
            name: '2个月'
        },
        {
            id: 3,
            name: '3个月'
        },
        {
            id: 4,
            name: '4个月'
        },
        {
            id: 6,
            name: '6个月'
        }
    ],
    gradeLevelList: [
        {
            id: 0,
            name: '初一级'
        },
        {
            id: 1,
            name: '初二级'
        },
        {
            id: 2,
            name: '初三级'
        },
        {
            id: 3,
            name: '中一级'
        },
        {
            id: 4,
            name: '中二级'
        },
        {
            id: 5,
            name: '中三级'
        },
        {
            id: 6,
            name: '高一级'
        },
        {
            id: 7,
            name: '高二级'
        },
        {
            id: 8,
            name: '高三级'
        },
        {
            id: 9,
            name: '资深一级'
        },
        {
            id: 10,
            name: '资深二级'
        },
        {
            id: 11,
            name: '资深三级'
        }
    ],
    bankNameList: [
        {
            id: 1,
            name: '中国光大银行'
        },
        {
            id: 2,
            name: '中国工商银行'
        }
    ],
    salaryTypeList: [
        {
            id: 1,
            name: '固定工资'
        },
        {
            id: 2,
            name: '绩效工资'
        }
    ],
    entryFileList: [
        {
            id: 1,
            name: '简历'
        },
        {
            id: 2,
            name: '面试人员评估表'
        },
        {
            id: 3,
            name: '身份证扫描件'
        },
        {
            id: 4,
            name: '身份证扫描件'
        },
        {
            id: 5,
            name: '离职证明'
        },
        {
            id: 6,
            name: '资格扫描件'
        },
        {
            id: 7,
            name: '学位证书扫描件'
        },
        {
            id: 8,
            name: '员工档案表'
        },
        {
            id: 9,
            name: '健康证明/体检表'
        },
        {
            id: 10,
            name: '照片'
        }
    ],
    ethnicList: [
        {
            value: '汉族',
            label: '汉族'
        },
        {
            value: '壮族',
            label: '壮族'
        },
        {
            value: '满族',
            label: '满族'
        },
        {
            value: '回族',
            label: '回族'
        },
        {
            value: '苗族',
            label: '苗族'
        },
        {
            value: '维吾尔族',
            label: '维吾尔族'
        },
        {
            value: '土家族',
            label: '土家族'
        },
        {
            value: '彝族',
            label: '彝族'
        },
        {
            value: '蒙古族',
            label: '蒙古族'
        },
        {
            value: '藏族',
            label: '藏族'
        },
        {
            value: '布依族',
            label: '布依族'
        },
        {
            value: '侗族',
            label: '侗族'
        },
        {
            value: '瑶族',
            label: '瑶族'
        },
        {
            value: '朝鲜族',
            label: '朝鲜族'
        },
        {
            value: '白族',
            label: '白族'
        },
        {
            value: '哈尼族',
            label: '哈尼族'
        },
        {
            value: '哈萨克族',
            label: '哈萨克族'
        },
        {
            value: '黎族',
            label: '黎族'
        },
        {
            value: '傣族',
            label: '傣族'
        },
        {
            value: '畲族',
            label: '畲族'
        },
        {
            value: '傈僳族',
            label: '傈僳族'
        },
        {
            value: '仡佬族',
            label: '仡佬族'
        },
        {
            value: '东乡族',
            label: '东乡族'
        },
        {
            value: '高山族',
            label: '高山族'
        },
        {
            value: '拉祜族',
            label: '拉祜族'
        },
        {
            value: '水族',
            label: '水族'
        },
        {
            value: '佤族',
            label: '佤族'
        },
        {
            value: '纳西族',
            label: '纳西族'
        },
        {
            value: '羌族',
            label: '羌族'
        },
        {
            value: '土族',
            label: '土族'
        },
        {
            value: '仫佬族',
            label: '仫佬族'
        },
        {
            value: '锡伯族',
            label: '锡伯族'
        },
        {
            value: '柯尔克孜族',
            label: '柯尔克孜族'
        },
        {
            value: '达斡尔族',
            label: '达斡尔族'
        },
        {
            value: '景颇族',
            label: '景颇族'
        },
        {
            value: '毛南族',
            label: '毛南族'
        },
        {
            value: '撒拉族',
            label: '撒拉族'
        },
        {
            value: '布朗族',
            label: '布朗族'
        },
        {
            value: '塔吉克族',
            label: '塔吉克族'
        },
        {
            value: '阿昌族',
            label: '阿昌族'
        },
        {
            value: '普米族',
            label: '普米族'
        },
        {
            value: '鄂温克族',
            label: '鄂温克族'
        },
        {
            value: '怒族',
            label: '怒族'
        },
        {
            value: '京族',
            label: '京族'
        },
        {
            value: '基诺族',
            label: '基诺族'
        },
        {
            value: '德昂族',
            label: '德昂族'
        },
        {
            value: '保安族',
            label: '保安族'
        },
        {
            value: '俄罗斯族',
            label: '俄罗斯族'
        },
        {
            value: '裕固族',
            label: '裕固族'
        },
        {
            value: '乌孜别克族',
            label: '乌孜别克族'
        },
        {
            value: '门巴族',
            label: '门巴族'
        },
        {
            value: '鄂伦春族',
            label: '鄂伦春族'
        },
        {
            value: '独龙族',
            label: '独龙族'
        },
        {
            value: '塔塔尔族',
            label: '塔塔尔族'
        },
        {
            value: '赫哲族',
            label: '赫哲族'
        },
        {
            value: '珞巴族',
            label: '珞巴族'
        },
        {
            value: '其他',
            label: '其他'
        }
    ],

    offerRules: {
        chineseName: [
            {
                required: true,
                message: '请填写中文名'

            },
            {
                pattern: /^[\u4E00-\u9FA5]{1,5}$/,
                message: '请输入中文字符'
            }
        ],
        pinyinName: [
            {
                required: true,
                message: '请填写中文拼音名'
            },
            {
                pattern: /^[a-zA-Z0-9\-]+$/,
                message: '请输入英文字母，连字符，或者数字'
            }
        ],
        sex: [
            {
                required: true,
                message: '请选择性别'
            }
        ],
        ethnic: [
            {
                required: true,
                message: '请选择民族'
            }
        ],
        privacyEmail: [
            {
                required: true,
                message: '请填写邮箱地址'
            },
            {
                pattern: /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g,
                message: '请输入正确邮箱地址'
            }
        ],
        country: [
            {
                required: true,
                message: '请选择国家/地区'
            }
        ],
        firstGraduateSchool: [
            {
                required: true,
                message: '请填写第一学历毕业院校'
            }
        ],
        firstMajor: [
            {
                required: true,
                message: '请填写第一学历专业'
            }
        ],
        highestEducation: [
            {
                required: true,
                message: '请选择最高学历'
            }
        ],
        highestDegree: [
            {
                required: true,
                message: '请选择最高学位'
            }
        ],
        highestGraduateSchool: [
            {
                required: true,
                message: '请填写最高学历毕业院校'
            }
        ],
        highestMajor: [
            {
                required: true,
                message: '请填写最高学历专业'
            }
        ],
        mobile: [
            {
                required: true,
                message: '请填写手机号码'
            },
            {
                pattern: /^1[0-9]{10}$/,
                message: '请输入正确手机号码'
            }
        ],
        jobStartTime: [
            {
                required: true,
                message: '请选择职业生涯开始时间'
            }
        ],
        registerType: [
            {
                required: true,
                message: '请选择户口性质'
            }
        ],
        idType: [
            {
                required: true,
                message: '请选择证件类型'
            }
        ],
        idNo: [
            {
                required: true,
                message: '请输入证件号码'
            }
        ],
        nodeIds: [
            {
                required: true,
                message: '请选择组织架构'
            }
        ],
        workPlace: [
            {
                required: true,
                message: '请输入办公地址'
            }
        ],
        positionId: [
            {
                required: true,
                message: '请选择岗位/职位'
            }
        ],
        gradeId: [
            {
                required: true,
                message: '请选择职级'
            }
        ],
        preEntryDate: [
            {
                required: true,
                message: '请选择预入职日期'
            }
        ],
        probation: [
            {
                required: true,
                message: '请选择试用周期'
            }
        ],
        joinDate: [
            {
                required: true,
                message: '请选择转正日期'
            }
        ],
        suggestSalary: [
            {
                required: true,
                message: '请填写试用薪酬'
            }
        ],
        depositBank: [
            {
                required: true,
                message: '请选择开户行'
            }
        ],
        socialSecurityCity: [
            {
                required: true,
                message: '请选择社保缴纳城市'
            }
        ],
        staffType: [
            {
                required: true,
                message: '请选择员工类型'
            }
        ],
        isTeacher: [
            {
                required: true,
                message: '请选择是否是专职老师'
            }
        ],
        positionType: [
            {
                required: true,
                message: '请选择职务类型'
            }
        ],
        contractType: [
            {
                required: true,
                message: '请选择合同类型'
            }
        ],
        contractBeginTime: [
            {
                required: true,
                message: '请选择合同开始时间'
            }
        ],
        contractEndTime: [
            {
                required: true,
                message: '请选择合同结束时间'
            }
        ],
        contractPeriod: [
            {
                required: true,
                message: '请选择合同期限'
            }
        ],
        attendanceGroupId: [
            {
                required: true,
                message: '请选择合考勤组'
            }
        ],
        recruitRemark: [
            {
                required: true,
                message: '请填写招聘评语'
            },
            {
                max: 200,
                message: '招聘评语须在200个字符以内'
            }
        ],
        positionPay: [
            {
                required: true,
                message: '请填写岗位工资'
            },
            {
                pattern: DOUBLE_PATTERN,
                message: '最多输入2位小数'
            }
        ],
        baseSalary: [
            {
                required: true,
                message: '请输入基本工资'
            },
            {
                pattern: DOUBLE_PATTERN,
                message: '最多输入2位小数'
            }
        ],
        meritPay: [
            {
                required: true,
                message: '请输入绩效工资'
            },
            {
                pattern: DOUBLE_PATTERN,
                message: '最多输入2位小数'
            }
        ],
        salaryType: [
            {
                required: true,
                message: '请选择工资类型'
            }
        ],
        salaryGroupId: [
            {
                required: true,
                message: '请选择薪酬组'
            }
        ],
        probationSalary: [
            {
                required: true,
                message: '请填写试用期工资'
            },
            {
                pattern: DOUBLE_PATTERN,
                message: '最多输入2位小数'
            }
        ],
        houseFundBase: [
            {
                required: true,
                message: '请填写公积金基数'
            },
            {
                pattern: DOUBLE_PATTERN,
                message: '最多输入2位小数'
            }
        ],
        socialSecurityBase: [
            {
                required: true,
                message: '请填写社保缴纳基数'
            },
            {
                pattern: DOUBLE_PATTERN,
                message: '最多输入2位小数'
            }
        ],
        mealSubsidy: [
            {
                required: true,
                message: '请填写餐补/天'
            },
            {
                pattern: DOUBLE_PATTERN,
                message: '最多输入2位小数'
            }
        ],
        mobileSubsidy: [
            {
                required: true,
                message: '请填写转正后通讯补贴/月'
            },
            {
                pattern: DOUBLE_PATTERN,
                message: '最多输入2位小数'
            }
        ],
        trafficSubsidy: [
            {
                required: true,
                message: '请填写交通补贴/月'
            }
        ]
    }
}
