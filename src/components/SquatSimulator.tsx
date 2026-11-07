import React, { useState } from 'react';

export default function SquatSimulator() {
  const [distance, setDistance] = useState<number>(5.0);
  const normalDistance = 10.0;
  const mobilityDeficit = Math.max(0, normalDistance - distance);
  const additionalLumbarTorque = Math.round(mobilityDeficit * 7.5);

  return (
    <div className="p-6 bg-[#161b22] border border-zinc-800 rounded-xl font-mono text-zinc-200 shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <span className="text-emerald-400 text-xs font-bold">// BIOMECHANICS RUNTIME SIMULATOR</span>
        <span className="text-[10px] text-zinc-500">v1.0.4-stable</span>
      </div>
      <h3 className="text-lg font-bold mb-4 text-zinc-100">足首可動域 ↔ 腰部負荷シミュレーター</h3>
      
      <div className="space-y-5 text-sm">
        <div>
          <div className="flex justify-between text-xs mb-2 text-zinc-400">
            <span>Knee to Wall 測定値:</span>
            <span className="text-emerald-400 font-bold text-sm">{distance.toFixed(1)} cm</span>
          </div>
          <input 
            type="range" min="1" max="15" step="0.5" 
            value={distance} 
            onChange={(e) => setDistance(parseFloat(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer h-2 bg-zinc-800 rounded-lg appearance-none"
          />
          <div className="flex justify-between text-[10px] text-zinc-600 mt-1">
            <span>1.0cm (重度拘縮)</span>
            <span>10.0cm (正常閾値)</span>
            <span>15.0cm (良好)</span>
          </div>
        </div>

        <div className="p-4 bg-[#0d1117] rounded-lg border border-zinc-800/80 space-y-2">
          <div className="text-xs text-zinc-400">しゃがみ込み時の腰椎代償モーメント増分:</div>
          <div className={`text-2xl font-black ${additionalLumbarTorque > 25 ? 'text-rose-500' : 'text-emerald-400'}`}>
            +{additionalLumbarTorque}%
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/60 pt-2">
            {distance < 7.0 
              ? "⚠ ALERT: 足関節の背屈角度不足により骨盤が早期後傾。腰椎部への負荷が跳ね上がり、慢性腰痛バグを誘発します。" 
              : "✓ STABLE: 足首の可動域は正常スペックを満たしています。"}
          </p>
        </div>
      </div>
    </div>
  );
}
