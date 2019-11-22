// fetch.js文件内容，我们采用的是Promise来异步封装数据，这里过滤的比较干净，通过resolve最终返回的数据都是直接可以无需再判断的，因为我们过滤了两次status==‘200’，第一次过滤浏览器请求是否成功，第二次确保后来处理完毕的数据是否准确无误的

import axios from 'axios'; //

export function fetch(options){
    return new Promise((resolve,reject)=>{
        const instance = axios.create({
            headers:{
                //'Content-Type':'application/json', //封装请求的header部分，根据实际情况来定
            },
            timeout:10000
        });
        instance(options)  //设置请求方式:get/put/post等
        .then(response =>{  //请求成功
            if(response.status == '200' ){
                if(response.data.Status == '200'){  //只过滤返回服务器状态200的数据
                    console.log('200');
                    
                    resolve(response.data);
                    
                }else{
                    console.log('201');
                    reject(response.data.Msg)
                }
            }
        })
        .catch(err =>{
            console.log('err');
            reject(err); //请求失败
        })
    });
}