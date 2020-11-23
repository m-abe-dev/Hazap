# ✏️Hazap とは

Hazap とは旅行や地域のイベント通じて人と人の繋がりや出会いを作るサービスです。
また、友達との旅行の計画も簡単にまとめることもできます。

# 📺 DEMO

<img width="1440" alt="スクリーンショット 2020-11-23 20 28 17" src="https://user-images.githubusercontent.com/66056064/99959122-cd3ffb00-2dcd-11eb-91cf-8ec1f2d377b9.png">

![画面収録-2020-11-23-22 09 43](https://user-images.githubusercontent.com/66056064/99967613-76412280-2ddb-11eb-9e4e-3f801b19a852.gif)

![画面収録-2020-11-23-22 11 27](https://user-images.githubusercontent.com/66056064/99970103-bbb31f00-2dde-11eb-84a6-2d046961c2a4.gif)

# 📕 制作の背景

学生時代にイギリスに１年間、22 か国 81 都市に旅行し、人や異文化につながりを作れるサービスと思いました。また、コロナで軽薄となってしまった人とのつながりや旅行の楽しみをアフターコロナで促進したいを思っています。

[ペルソナ]
世界中の 10 代から 30 代前半の人たち

# 📗 使用ライブラリと技術

- google-map-react: 2.1.8
- history: 4.10.1
- react: 16.14.0
- react-calendar: 3.1.0
- react-cropper: 1.3.0
- react-datepicker: 3.3.0
- react-dom: 16.14.0
- react-dropzone: 11.2.2
- react-infinite-scroller: 1.2.4
- react-places-autocomplete: 7.3.0
- react-redux: 7.2.1
- react-router-dom: 5.2.0
- react-scripts: 3.4.3
- react-toastify: 6.0.9
- redux: 4.0.5
- redux-thunk: 2.3.0
- semantic-ui-css: 2.4.1
- semantic-ui-react: 2.0.0
- yup: 0.29.3
- Firebase(Authentication, Cloud Firestore, Realtime Datebase, Storage, Hosting, Cloud Functions)

# Installation

Requirement で列挙したライブラリなどのインストール方法を説明する

```bash
pip install huga_package
```

# 🖥 機能一覧

## ユーザー機能

- ユーザー登録・編集・削除
- ゲストログイン
- プロフィール画像の編集(react-dropzone と react-cropper)
- マイプロフィールにて作成したイベントの一覧を表示
- マイプロフィールにて自分の詳細を記入できる

## 投稿機能

- イベントのタイトル
- イベントのカテゴリー
- イベントの詳細
- イベントの場所(react-places-autocomplete)
- イベントの日時(react-calendar)

## チャット機能

- ユーザー同士のメッセージ送信(Realtime Datebase)
- トーク履歴の表示

## 詳細ページ表示機能

- 地図表示(google-map-react)
- 編集機能
- イベント申し込み・キャンセル
- イベント参加ユーザーの表示
- チャット

## フォロー機能

- ユーザーのフォロー・フォロー解除
- フォロー中のユーザーとフォロワーの一覧表示(マイプロフィールにて)

## 通知機能

- 以下のタイミングでユーザーに通知を送信
  - フォローしたユーザーがログインした時
  - フォローしたユーザーがイベントをキャンセルした時

## イベント一覧機能

- ホストユーザー、場所、参加者、詳細
- 詳細ページ閲覧
- 無限スクロール(react-infinite-scroller)
