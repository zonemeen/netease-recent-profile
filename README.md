<p align="center">
  <h2 align="center">Netease Recent Profile</h2>
  <p align="center">🎧 将你的网易云音乐听歌记录生成一张可配置卡片，由 <a target="_blank" href="https://vercel.com">Vercel</a> 驱动</p>
</p>

## 🖥 前置工作

获取网易云音乐用户 ID (<https://music.163.com>)

- 您的个人主页页面（`https://music.163.com/#/user/home?id=xxx`），`id` 为紧跟的那串数字

![user_id](https://user-images.githubusercontent.com/44596995/200237164-bf3b1c62-b2ee-4569-b5bf-bda06b09db08.png)

> 注意：要在网易云音乐个人设置-隐私设置中将听歌排行设为`所有人可见`

## 🔨 使用

获取账号 id 后，只需在你的 README 中添加以下内容，并将`id`查询参数设置为你的网易云音乐账号 id

由于 `Vercel` 的限制，所有图片汇总返回过大会报错，所以后面的示例图片的 `size` 都为 60，保证可以访问；目前支持两种主题样式，分别是：`list(默认)`、`card`

### 主题为list

```md
[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&size=60)](https://netease-recent-profile.vercel.app/?id=126764012&size=60)
```

[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&size=60)](https://netease-recent-profile.vercel.app/?id=126764012&size=60)

### 主题为card

```md
[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&theme=card)](https://netease-recent-profile.vercel.app/?id=126764012&theme=card)
```

[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&theme=card)](https://netease-recent-profile.vercel.app/?id=126764012&theme=card)

如果你想将卡片嵌在你的网页中，也可以这样使用：

```md
<img src="https://netease-recent-profile.vercel.app/?id=126764012&size=60" alt="Netease recently played" title="Netease recently played">
```

两种主题详细的自定义配置如下。

## ⚙ 主题为list自定义配置

### 听歌排行类型

请传递查询参数`type`，并将其设置为你想要的听歌排行类型

- 近一周的听歌排行：默认 type 为 `1`
- 所有时间的听歌排行：设为 `0`

```md
[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&type=0&size=60)](https://netease-recent-profile.vercel.app/?id=126764012&type=0&size=60)
```

[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&type=0&size=60)](https://netease-recent-profile.vercel.app/?id=126764012&type=0&size=60)

### 是否显示听歌次数对比百分比

请传递查询参数 `show_percent`

- 默认为 `0`：即默认不开启此特性
- 传入 `1`：即表示开启此特性

```md
[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&show_percent=1&size=60)](https://netease-recent-profile.vercel.app/?id=126764012&show_percent=1&size=60)
```

[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&show_percent=1&size=60)](https://netease-recent-profile.vercel.app/?id=126764012&show_percent=1&size=60)

### 背景颜色

请传递查询参数 `bg`

- 默认为 `dark`：即暗色
- 传入 `light`：即浅色

```md
[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&bg=light&size=60)](https://netease-recent-profile.vercel.app/?id=126764012&bg=light&size=60)
```

[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&bg=light&size=60)](https://netease-recent-profile.vercel.app/?id=126764012&bg=light&size=60)

### 歌曲数量

请传递查询参数`number`，并将其设置为你想要的歌曲数量

- 默认为 `5` 条

```md
[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&number=3&size=60)](https://netease-recent-profile.vercel.app/?id=126764012&number=3&size=60)
```

[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&number=3&size=60)](https://netease-recent-profile.vercel.app/?id=126764012&number=3&size=60)

### 标题

请传递查询参数`title`，并将其设置为你想要的标题

- 默认标题为 `Recently Played`

```md
[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&title=最近在听&size=60)](https://netease-recent-profile.vercel.app/?id=126764012&title=最近在听&size=60)
```

[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&title=最近在听&size=60)](https://netease-recent-profile.vercel.app/?id=126764012&title=最近在听&size=60)

### 卡片单列宽度

请传递查询参数`width`，并将其设置为你想要的卡片单列宽度

- 默认宽度为 `280`

```md
[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&width=350&size=60)](https://netease-recent-profile.vercel.app/?id=126764012&width=350&size=60)
```

[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&width=350&size=60)](https://netease-recent-profile.vercel.app/?id=126764012&width=350&size=60)

### 列数

请传递查询参数`column`，并将其设置为你想要的列数

- 默认列数为 `1`

```md
[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&number=8&column=2&size=60)](https://netease-recent-profile.vercel.app/?id=126764012&number=8&column=2&size=60)
```

[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&number=8&column=2&size=60)](https://netease-recent-profile.vercel.app/?id=126764012&number=8&column=2&size=60)

### 歌曲图片大小

请传递查询参数`size`，并将其设置为你想要的图片大小

- 默认图片大小为 `800`，尺寸越小，优点是 svg 尺寸较小、请求返回的时间变短，缺点是图片会失真变模糊

```md
[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&size=60)](https://netease-recent-profile.vercel.app/?id=126764012&size=60)
```

[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&size=60)](https://netease-recent-profile.vercel.app/?id=126764012&size=60)

### 设置缓存时间

请传递查询参数 `cache`

- 默认为 `14400 (即 4 小时)`，单位为秒

> **注意：**
> 这里使用缓存来减少服务器的负载及响应时间，其中缓存的最小值为 4 小时，最大值为 24 小时。

```md
[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&cache=28800&size=60)](https://netease-recent-profile.vercel.app/?id=126764012&cache=28800&size=60)
```

## ⚙ 主题为card自定义配置

### 是否显示跳动Bar

请传递查询参数 `show_bar`

- 默认为 `1`：即默认开启此特性
- 传入 `0`：即表示不开启此特性

```md
[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&theme=card&show_bar=0)](https://netease-recent-profile.vercel.app/?id=126764012&theme=card&show_bar=0)
```

[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&theme=card&show_bar=0)](https://netease-recent-profile.vercel.app/?id=126764012&theme=card&show_bar=0)

### 设置主色调

请传递查询参数 `themeColor`，默认为 `53b14f`

> 注意为十六进制HEX值

```md
[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&theme=card&themeColor=e60026)](https://netease-recent-profile.vercel.app/?id=126764012&theme=card&themeColor=e60026)
```

[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&theme=card&themeColor=e60026)](https://netease-recent-profile.vercel.app/?id=126764012&theme=card&themeColor=e60026)

### 背景颜色

和list主题一样，请传递查询参数 `bg`

- 默认为 `dark`：即暗色
- 传入 `light`：即浅色

```md
[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&theme=card&bg=light)](https://netease-recent-profile.vercel.app/?id=126764012&theme=card&bg=light)
```

[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&theme=card&bg=light)](https://netease-recent-profile.vercel.app/?id=126764012&theme=card&bg=light)

## 🚀 部署

可以通过 Vercel 进行部署，或者部署到自己的服务器。

具体方法如下：

```shell
git clone https://github.com/zonemeen/netease-recent-profile.git
cd netease-recent-profile
npm install
node ./app.js
# or
pm2 start ./app.js --name netease-recent-profile
```

默认端口为 `3000`，可以通过设置 `PORT` 环境变量进行修改。

## 📄 开源协议

本项目使用 [MIT](./LICENSE) 协议
