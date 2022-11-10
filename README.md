<p align="center">
  <h2 align="center">Netease Recent Profile</h2>
  <p align="center">🎧 将你的网易云音乐的听歌记录生成svg，由 <a target="_blank" href="https://vercel.com">Vercel</a> 驱动</p>
</p>

## 🖥 前置工作

获取网易云音乐用户 ID (<https://music.163.com>)

- 您的个人主页页面（`https://music.163.com/#/user/home?id=xxx`），`id` 为紧跟的那串数字

![user_id](https://user-images.githubusercontent.com/44596995/200237164-bf3b1c62-b2ee-4569-b5bf-bda06b09db08.png)

## 🔨 使用

获取账号 id 后，只需在你的 README 中添加以下内容，并将`id`查询参数设置为你的网易云音乐账号 id

```md
[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012)](https://netease-recent-profile.vercel.app/?id=126764012)
```

[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012)](https://netease-recent-profile.vercel.app/?id=126764012)

## ⚙ 自定义配置

### 听歌排行类型

请传递查询参数`type`，并将其设置为你想要的听歌排行类型

- 近一周的听歌排行：默认 type 为 `1`
- 所有时间的听歌排行：设为 `0`

```md
[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&type=0)](https://netease-recent-profile.vercel.app/?id=126764012&type=0)
```

[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&type=0)](https://netease-recent-profile.vercel.app/?id=126764012&type=0)

### 歌曲数量

请传递查询参数`number`，并将其设置为你想要的歌曲数量

- 默认为 `5` 条

```md
[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&number=3)](https://netease-recent-profile.vercel.app/?id=126764012&number=3)
```

[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&number=3)](https://netease-recent-profile.vercel.app/?id=126764012&number=3)

### 标题

请传递查询参数`title`，并将其设置为你想要的标题

- 默认标题为 `Recently Played`

```md
[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&title=最近在听)](https://netease-recent-profile.vercel.app/?id=126764012&title=最近在听)
```

[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&title=最近在听)](https://netease-recent-profile.vercel.app/?id=126764012&title=最近在听)

### 卡片宽度

请传递查询参数`width`，并将其设置为你想要的卡片宽度

- 默认宽度为 `280`

```md
[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&width=350)](https://netease-recent-profile.vercel.app/?id=126764012&width=350)
```

[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&width=350)](https://netease-recent-profile.vercel.app/?id=126764012&width=350)

### 歌曲图片尺寸

请传递查询参数`size`，并将其设置为你想要的图片大小

- 默认图片大小为 `800`，尺寸越小，优点是 svg 尺寸较小、请求返回的时间变短，缺点是图片会失真变模糊

```md
[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&size=60)](https://netease-recent-profile.vercel.app/?id=126764012&size=60)
```

[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&size=60)](https://netease-recent-profile.vercel.app/?id=126764012&size=60)

### 是否显示听歌次数对比百分比

请传递查询参数 `show_percent`

- 默认为 `0`：即表示不打开此特性
- 传入 `1`：即表示为打开此特性

```md
[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&show_percent=1)](https://netease-recent-profile.vercel.app/?id=126764012&show_percent=1)
```

[![Netease recently played](https://netease-recent-profile.vercel.app/?id=126764012&show_percent=1)](https://netease-recent-profile.vercel.app/?id=126764012&show_percent=1)

### 设置缓存时间

请传递查询参数 `cache`

- 默认为 `14400 (即 4 小时)`，单位为秒

> **注意：**
> 这里使用缓存来减少服务器的负载及响应时间，其中缓存的最小值为 4 小时，最大值为 24 小时。

## 📄 开源协议

本项目使用 [MIT](./LICENSE) 协议
