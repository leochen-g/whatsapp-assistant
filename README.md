[![ 由Wechaty提供 ](https://img.shields.io/badge/Powered%20By-Wechaty-blue.svg)](https://github.com/wechaty/wechaty)
[![node version](https://img.shields.io/badge/node-%3E%3D16-blue.svg)](http://nodejs.cn/download/)
![](https://img.shields.io/badge/Window-green.svg)
![](https://img.shields.io/badge/Mac-yellow.svg)
![](https://img.shields.io/badge/Centos-blue.svg)
[![](https://img.shields.io/badge/Docker-red.svg)]()


## 智能微秘书-WhatsApp版

WhatsApp账号成为你的得力助手

帮你创建私人定时任务，每日提醒，纪念日提醒，当日提醒。

同时自带微信机器人功能，chatGPT对话，群资讯消息定时发送，群定时提醒功能，群机器人聊天，垃圾分类，天气查询，土情话查询，老黄历查询，顺口溜查询，rss订阅推送等众多功能。


## 依赖

node 版本 >18

## 部署运行

### 直接运行

#### Step 1: 安装

克隆本项目，并进入项目根目录执行 `npm install`安装项目依赖

#### Step 2: 配置

`src/index.js`代码中配置`APIKEY`和`APISECRET`

#### Step 3: 运行

执行命令`npm run start`，终端会显示二维码，可以直接扫码，也可以到[智能微秘书](https://wechat.aibotk.com)（小助手配置->登录状态中进行扫码登录）

#### Step 4: 配置相应功能

在[智能微秘书](https://wechat.aibotk.com?r=dBL0Bn)中配置你需要的功能后，给启动的微信发送`更新`关键词即可拉取最新配置（或者你自己设置的更新关键词，初始关键词是`更新`，**
每次修改配置后，请记得一定发送关键词更新配置**


### 直接拉取镜像（推荐）

由于自己构建部分依赖安装比较慢，或者经常会卡住，所以本项目已经提前构建好发布到dockerhub了，直接pull就行了

> 注：使用第三方镜像源加速的。拉取的可能不是最新版本，所以会运行不起来，建议使用官方镜像源，自行切换，不会的可以百度一下

![](https://img.aibotk.com/picgo/202304141139150.png)

#### step1： 拉取镜像

```shell

docker pull aibotk/whatsapp-assistant

```

#### step2： 启动docker

以下两个命令自己选择一个执行就行，执行的时候会下载puppet，可能会比较慢，耐心等待一下即可

1、请在项目根目录执行，这个命令是前台执行可以直接看到log日志的，但是没法关闭，只能销毁终端实例

```shell
docker run -e AIBOTK_KEY="微秘书apikey" -e AIBOTK_SECRET="微秘书apiSecret" --name=whatsappbot aibotk/whatsapp-assistant

```

2、这个命令可以在后台运行，多了一个`-d`

```shell
docker run -d -e AIBOTK_KEY="微秘书apikey" -e AIBOTK_SECRET="微秘书apiSecret" --name=whatsappbot aibotk/whatsapp-assistant

```

## 免责声明

本软件依据github上开源项目 Wechaty

通过简单的设置UI和交互，运行微信机器人。

请遵守国家法律政策，请勿用于非法犯罪行为！

请合理使用，一切不良行为和后果均与作者无关！
