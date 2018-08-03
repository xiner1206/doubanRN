import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,//用于获取设备屏幕的宽高
    ActivityIndicator
} from 'react-native';

var Util={
    //屏幕尺寸
    windowSize:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height,
    },
    //基于fetch的get方法  只负责下载数据，下载后的处理操作在回调方法中实现
    getRequest:function(url,successCallback,failCallback){
        fetch(url)
            .then(respose =>{
                return respose.json()
            })
            .then(responseData =>{
                successCallback(responseData)
            })
            .catch(error =>{
                failCallback(error)
            })
    },
    loading:<ActivityIndicator style={{marginTop:200}}/>
}
module.exports=Util;
