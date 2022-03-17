# きつねゆっくりリネーマー

## きつねゆっくりリネーマーとは

きつねゆっくりリネーマーは、[きつねゆっくり](http://www.nicotalk.com/charasozai_kt.html)さんの素材を、[ゆっくりムービーメーカー4](https://manjubox.net/ymm4/)で、まばたき/口パクさせるためにファイル名を一括変換するツールになっています。

元ネタは、[瞬殺でYMM4で口パクと瞬きをできるようにする方法[自動変換バッチ配布](https://note.com/maesato_1/n/n51eab09a7234)で、ここのパッチファイルをベースに開発しています。


## インストール

[Release](https://github.com/ArcCosine/KitsuneYukkuriRenamer/releases)ページから、最新版のきつねゆっくりリネーマーをダウンロードし、インストールしてください。
2022/3/18時点では、KitsuneYukkuriRenamer.Setup.0.0.1.zipが最新版になります。


## 使い方

- きつねゆっくりさんの所から、素材をダウンロードします。
- 素材ファイルを展開します。
- きつねゆっくりリネーマーを起動します。
- フォルダーを選ぶから、素材フォルダーを選びます。
- 変換ボタンを押します。
- 以上です。

後は、ゆっくりムービーメーカー4のキャラクター設定から取り込んで、立ち絵と、立ち絵/立ち絵アイテムの設定をするだけです。
詳細は、公式サイトのドキュメントを参考にしてください。
[動く立ち絵の設定方法](https://manjubox.net/ymm4/faq/%E7%AB%8B%E3%81%A1%E7%B5%B5%E6%A9%9F%E8%83%BD/%E5%8B%95%E3%81%8F%E7%AB%8B%E3%81%A1%E7%B5%B5%E3%81%AE%E8%A8%AD%E5%AE%9A%E6%96%B9%E6%B3%95/)

## 開発したい方

package.jsonを参考にしてください。

    npm run start

で開発モードで起動します。
ビルドは、

    npm run build

で実行してください。

## 謝辞

ツールのアイコンは、[Flat Icon](https://www.flaticon.com/free-icons/tools)さんのアイコンを使用しています。
目と口のファイル変換に関しては、[某町の沙路さん](https://note.com/maesato_1)さんのスクリプトをベースに変換コードを組んでいます。


## ライセンス

MIT License

Copyright (c) 2022 Arc Cosine.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## リクエストなど

[Issues](https://github.com/ArcCosine/KitsuneYukkuriRenamer/issues)から、リクエストを送ってください。
気が向いたら、修正するかもしれません。

Pull Requestも受け付けていますので、お気軽にどうぞ。