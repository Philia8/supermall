import axios from 'axios'

export function request(config) {
    // 1、创建axios 的实例
    const instance = axios.create({
        baseURL: "http://152.136.185.210:7878/api/m5",
        timeout: 5000
    });

    // 2、axios 的拦截器
    // 2.1 请求拦截
    instance.interceptors.request.use(config => {
        // 拦截器将config 返回后，网络请求才能继续执行
        return config;
    }, err => {
        console.log(err);
    });
    // 2.2 响应拦截
    instance.interceptors.response.use(res => {
        // console.log(res);
        return res.data;
    }, err => {
        console.log(err);
    });
    // 3、发送网络请求
    // 返回promise 实例
    return instance(config);

}