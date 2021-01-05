# ✏️Hazap とは

Hazap とは旅行や地域のイベント通じて人と人の繋がりや出会いを作るサービスです。
また、友達との旅行の計画も簡単にまとめることもできます。

# 📺 DEMO

<img width="1440" alt="スクリーンショット 2020-11-23 20 28 17" src="https://user-images.githubusercontent.com/66056064/99959122-cd3ffb00-2dcd-11eb-91cf-8ec1f2d377b9.png">

![画面収録-2020-11-23-22 09 43](https://user-images.githubusercontent.com/66056064/99967613-76412280-2ddb-11eb-9e4e-3f801b19a852.gif)

![画面収録-2020-11-23-22 11 27](https://user-images.githubusercontent.com/66056064/99970103-bbb31f00-2dde-11eb-84a6-2d046961c2a4.gif)

# 📕 制作の背景

学生時代にイギリスに１年間、22 か国 81 都市に旅行し、人や異文化につながりを作れるサービスと思いました。また、コロナで軽薄となってしまった **人とのつながり** や **旅行の楽しみ** をアフターコロナで促進し、アプリを通じて感じて頂けたらと思っています。

## ペルソナ

- 世界中の 10 代から 30 代前半の人たち

# 📘 工夫した点

- **「直感的な分かりやすさ・シンプルさ」** を重視して、一つ一つの機能やデザインに細部までこだわりました。
- 赤色や黄緑、黄色など明るい色を基調とし、アイコンや画像を多く取り入れることで　**「新しい人とのつながりや旅行の楽しみ」** を表現してみました。
- スケジュール管理や誰と参加したいなど、色々なアプリやサービスで確認をして、行き来する必要がなく、なるべく　**「ひとつのページで完結するようなユーザビリティ」** を意識して、デザインしました。

# 🖥 機能一覧

## ユーザー機能

- ユーザー登録・編集・削除
- SNS ログイン・ユーザー登録(Facebook)
- ゲストログイン
- プロフィール画像の編集(react-dropzone と react-cropper)
- マイプロフィールにて作成したイベントの一覧を表示
- マイプロフィールにて自分の詳細を記入できる

## 投稿機能

- イベントのタイトル
- イベントのカテゴリー
- イベントの詳細
- イベントの場所(react-places-autocomplete)
- イベントの日時(react-datepicker)

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

## フィルター機能

- すべてのイベント
- 自分が参加するイベント
- 自分がホストするイベント
- イベント日時(react-calendar)

## その他

- レスポンシブ対応
- firestore.rules で Firestore の読み書きを制限

# 📗 使用ライブラリと技術

- node: 14.2.0
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
