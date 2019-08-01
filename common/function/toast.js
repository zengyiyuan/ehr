/**
 * @file 扩展Element的错误提示message组件(多行内容)
 */



import { Message } from 'element-ui';

export default function toast (msg, option = {}) {
    let time = 3000;
    if (!isNaN(option.duration)) {
        time = option.duration;
    }

    let type = typeof option === 'string' ? option : (option.type || 'warning');

    Message({
        message: msg,
        type: type,
        duration: time
    });
}