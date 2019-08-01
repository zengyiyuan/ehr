const FPRCID_PATTERN = /^[a-zA-Z]{3}\d{12}$/
const HKMC_PASSPORT_PATTERN = /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/
const IDENTITY_PATTERN = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
const PASSPORT_PATTERN = /(^[a-zA-Z]{5,17}$)|(^[a-zA-Z0-9]{5,17}$)/

export default {
    loginRules: {
        loginUserName: [
            {
                required: true,
                message: '请输入邮箱前缀',
                trigger: 'blur'
            }
        ],
        password: [
            {
                required: true,
                message: '请输入密码',
                trigger: 'blur'
            }
        ],
        validateCode: [
            {
                required: true,
                message: '请输入验证码',
                trigger: 'blur'
            },
            {
                min: 4,
                message: '请输入4个字符',
                trigger: 'blur',
            }
        ]
    },
    validateRules: {
        validateUserName: [
            {
                required: true,
                message: '请输入邮箱前缀',
                trigger: 'blur'
            }
        ],
        mobile: [
            {
                required: true,
                message: '请输入手机号码',
                trigger: 'blur'
            },
            {
                validator (rule, value, callback) {
                    const emailPrefixRegx = /^1([2-9])\d{9}$/;
                    if (!emailPrefixRegx.test(value)) {
                        callback(new Error('手机号码格式错误'));
                    } else {
                        callback();
                    }
                },
                trigger: 'blur'
            }
        ],
        idNo: [
            {
                required: true,
                message: '请输入证件号（身份证或其他登记证件号）'
            },
            {
                validator (rule, value, callback) {
                    const regexes = {
                        'identity': IDENTITY_PATTERN,
                        'passport': PASSPORT_PATTERN,
                        'HKMCPassport': HKMC_PASSPORT_PATTERN,
                        'FPRCId': FPRCID_PATTERN
                    };
                    const valid = Object.keys(regexes).some((v) => {
                        return regexes[v].test(value);
                    });

                    if (!valid) {
                        callback(new Error('证件号码格式不正确'));
                    } else {
                        callback();
                    }
                },
                trigger: 'blur'
            }
        ]
    },
    validateRules2: {
        mobileCode: [
            {
                required: true,
                message: '请输入手机验证码',
                trigger: 'blur',
            }
        ],
        emailCode: [
            {
                required: true,
                message: '请输入直属领导邮箱验证码',
                trigger: 'blur'
            }
        ]
    }
}
