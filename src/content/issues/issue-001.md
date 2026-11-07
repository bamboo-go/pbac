---
id: "ISSUE-001"
title: "かかと接地フルスクワット実行時の重心破綻（後方転倒バグ）"
status: "in-progress"
severity: "high"
systemLayer: "ankle-joint"
dateDetected: 2026-11-01
baselineMetric:
  name: "ニー・トゥ・ウォール測定値 (Knee-to-Wall)"
  currentLeft: "6.0cm"
  currentRight: "4.5cm"
  target: "10.0cm以上"
githubIssueUrl: "https://github.com/xyna-bpinelab/pbac/issues/1"
tags: ["mobility", "squat", "soleus", "deskwork"]
---

## 障害概要
直立状態から踵を床につけたままフルスクワットへ移行した際、膝屈曲約90度付近で重心維持が不能となり、後方へロールバック（転倒）する。

## ボトルネック特定（Root Cause Analysis）
1. **ヒラメ筋の物理的短縮**: 1日10時間以上のデスクワーク着席固定による慢性的硬化。
2. **距骨の前方滑動不全**: 足首を曲げた際のハードウェア的クリアランス不足（関節包の拘縮）。

## 一時パッチ検証（Bypass Verification）
踵の下に厚さ2.0cmのプレートを挟んだところ、骨盤後傾を起こさずにフルボトムまで下降可能であることを確認。股関節ではなく「足首の背屈可動域不足」がクリティカルパスであると特定した。

## 適用パッチ（Hardware Patch）
ヒラメ筋の柔軟性を恒久リファクタリングするため、毎日固定角度で負荷をかけられる物理ストレッチボードを導入。
