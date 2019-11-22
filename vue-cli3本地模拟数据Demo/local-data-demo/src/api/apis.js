// apis.js这个文件就是统一管理所有接口请求方法的，非常简单，此处只创建了一个，后边所有的接口请求都可以放在apis.js中

import {fetch} from './fetch'

export function getTestData() {  //将接口封装成方法，后边调用xxx/test接口直接调用该方法即可
    return fetch ({
        url:'/test',
        method:'get'
    })
}