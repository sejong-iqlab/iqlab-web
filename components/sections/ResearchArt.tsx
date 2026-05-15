import type { FC } from 'react';

// Publication-style figure illustrations for each research chapter.
// Designed in 400×220 viewBox so they scale cleanly inside cards / wide containers.
//
// 매핑 (ART_BY_NO):
//   01 Edge AI / NPU Virtualization & AI Semiconductor      → AIAttentionArt
//   02 SoC-based Sensor Signal Processing & Heterogeneous   → SensorSoCArt
//   03 Neuromorphic Computing & SNN-based Low-Power AI      → NeuromorphicArt
// ----------------------------------------------------------------------------

export function AIAttentionArt() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="220" fill="#020514" />
      <text x="200" y="14" textAnchor="middle" fontSize="9" fill="white" fontFamily="monospace" fontWeight="bold" letterSpacing="0.5">
        TRANSFORMER ATTENTION + SYSTOLIC ARRAY
      </text>

      {/* Embedding */}
      <g transform="translate(15, 30)">
        <rect width="38" height="150" fill="#00D4FF15" stroke="#00D4FF" strokeWidth="0.5" />
        <text x="19" y="80" textAnchor="middle" fontSize="7.5" fill="#00D4FF" fontFamily="monospace" fontWeight="bold" transform="rotate(-90 19 80)">
          EMBEDDING
        </text>
      </g>

      {/* Q, K, V projection */}
      <g transform="translate(64, 30)">
        {(['Q', 'K', 'V'] as const).map((label, i) => (
          <g key={label} transform={`translate(0, ${i * 52})`}>
            <rect width="42" height="46" fill="#00D4FF22" stroke="#00D4FF" strokeWidth="0.6" />
            <text x="21" y="20" textAnchor="middle" fontSize="11" fill="white" fontFamily="monospace" fontWeight="bold">{label}</text>
            <text x="21" y="34" textAnchor="middle" fontSize="6" fill="#00D4FF" fontFamily="monospace">PROJ · INT4</text>
          </g>
        ))}
      </g>

      {/* MatMul QK^T */}
      <g transform="translate(120, 60)">
        <rect width="48" height="40" fill="#00D4FF35" stroke="#00D4FF" strokeWidth="0.7" />
        <text x="24" y="18" textAnchor="middle" fontSize="7" fill="white" fontFamily="monospace" fontWeight="bold">MatMul</text>
        <text x="24" y="29" textAnchor="middle" fontSize="6.5" fill="#00D4FF" fontFamily="monospace">QKᵀ / √d</text>
      </g>

      {/* Softmax */}
      <g transform="translate(180, 60)">
        <rect width="48" height="40" fill="#00D4FF22" stroke="#00D4FF" strokeWidth="0.6" />
        <text x="24" y="18" textAnchor="middle" fontSize="7" fill="white" fontFamily="monospace" fontWeight="bold">Softmax</text>
        <text x="24" y="29" textAnchor="middle" fontSize="6" fill="#00D4FF" fontFamily="monospace">FP8</text>
      </g>

      {/* MatMul · V */}
      <g transform="translate(240, 60)">
        <rect width="48" height="40" fill="#00D4FF35" stroke="#00D4FF" strokeWidth="0.7" />
        <text x="24" y="18" textAnchor="middle" fontSize="7" fill="white" fontFamily="monospace" fontWeight="bold">MatMul</text>
        <text x="24" y="29" textAnchor="middle" fontSize="6.5" fill="#00D4FF" fontFamily="monospace">Score · V</text>
      </g>

      {/* Output proj */}
      <g transform="translate(300, 60)">
        <rect width="40" height="40" fill="#00D4FF22" stroke="#00D4FF" strokeWidth="0.6" />
        <text x="20" y="20" textAnchor="middle" fontSize="6.5" fill="white" fontFamily="monospace" fontWeight="bold">OUTPUT</text>
        <text x="20" y="31" textAnchor="middle" fontSize="6" fill="#00D4FF" fontFamily="monospace">PROJ</text>
      </g>

      {/* PE Array (systolic) */}
      <g transform="translate(348, 30)">
        <text x="22" y="-3" textAnchor="middle" fontSize="6" fill="#00D4FF" fontFamily="monospace" fontWeight="bold">PE ARRAY</text>
        <rect width="46" height="150" fill="none" stroke="#00D4FF" strokeWidth="0.6" />
        {Array.from({ length: 64 }).map((_, i) => (
          <rect
            key={i}
            x={2 + (i % 8) * 5.5}
            y={2 + Math.floor(i / 8) * 18.4}
            width="4.5"
            height="17"
            fill={`rgba(0,212,255,${0.15 + ((i * 13) % 7) * 0.07})`}
          />
        ))}
        <text x="23" y="166" textAnchor="middle" fontSize="5.5" fill="#00D4FF" fontFamily="monospace" opacity="0.85">8×8 · INT4</text>
      </g>

      {/* Connections */}
      <g stroke="rgba(0,212,255,0.55)" strokeWidth="0.6" fill="none">
        <line x1="53" y1="50" x2="64" y2="50" />
        <line x1="53" y1="105" x2="64" y2="105" />
        <line x1="53" y1="158" x2="64" y2="158" />
        <line x1="106" y1="50" x2="120" y2="75" />
        <line x1="106" y1="105" x2="120" y2="80" />
        <line x1="168" y1="80" x2="180" y2="80" />
        <line x1="228" y1="80" x2="240" y2="80" />
        <line x1="106" y1="158" x2="240" y2="92" />
        <line x1="288" y1="80" x2="300" y2="80" />
        <line x1="340" y1="80" x2="348" y2="105" />
      </g>

      {/* Bottom labels */}
      <g transform="translate(15, 188)">
        <rect width="92" height="14" rx="2" fill="#00D4FF40" stroke="#00D4FF" strokeWidth="0.5" />
        <text x="46" y="10" textAnchor="middle" fontSize="6.5" fill="white" fontFamily="monospace" fontWeight="bold">INT4 / FP8 Quant.</text>
      </g>
      <g transform="translate(115, 188)">
        <rect width="86" height="14" rx="2" fill="#00D4FF22" stroke="#00D4FF" strokeWidth="0.5" />
        <text x="43" y="10" textAnchor="middle" fontSize="6.5" fill="#00D4FF" fontFamily="monospace">KV-Cache · Compress</text>
      </g>
      <g transform="translate(209, 188)">
        <rect width="100" height="14" rx="2" fill="#00D4FF22" stroke="#00D4FF" strokeWidth="0.5" />
        <text x="50" y="10" textAnchor="middle" fontSize="6.5" fill="#00D4FF" fontFamily="monospace">Sparse Attention · 90%</text>
      </g>

    </svg>
  );
}

// ----------------------------------------------------------------------------
// 02 — SoC-based Sensor Signal Processing & Heterogeneous System
//   Sensor → AFE → Decimation → (Envelope / ToF detector + 2D Polynomial Cal.) → Out
// ----------------------------------------------------------------------------
export function SensorSoCArt() {
  const ACC = '#FF6B35';
  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="220" fill="#140802" />
      <text x="200" y="14" textAnchor="middle" fontSize="9" fill="white" fontFamily="monospace" fontWeight="bold" letterSpacing="0.5">
        SENSOR SoC · AFE → DECIMATION → ToF / POLY-CAL
      </text>

      {/* Sensor input */}
      <g transform="translate(14, 36)">
        <rect width="48" height="68" fill={`${ACC}1c`} stroke={ACC} strokeWidth="0.6" />
        <text x="24" y="13" textAnchor="middle" fontSize="6.5" fill={ACC} fontFamily="monospace" fontWeight="bold">SENSOR</text>
        <text x="24" y="23" textAnchor="middle" fontSize="5.5" fill="#FFD0BA" fontFamily="monospace">Ultrasonic / Pressure</text>
        {/* sine waveform */}
        <path
          d="M 4 50 Q 10 38, 16 50 T 28 50 T 40 50 T 44 50"
          fill="none"
          stroke={ACC}
          strokeWidth="0.8"
        />
        <circle cx="16" cy="42" r="1.4" fill={ACC} />
        <circle cx="28" cy="42" r="1.4" fill={ACC} />
      </g>

      {/* AFE */}
      <g transform="translate(74, 36)">
        <rect width="64" height="68" fill={`${ACC}22`} stroke={ACC} strokeWidth="0.7" />
        <text x="32" y="13" textAnchor="middle" fontSize="6.5" fill={ACC} fontFamily="monospace" fontWeight="bold">AFE</text>
        <rect x="6" y="20" width="24" height="18" fill={`${ACC}12`} stroke={ACC} strokeWidth="0.4" />
        <text x="18" y="32" textAnchor="middle" fontSize="6" fill="white" fontFamily="monospace" fontWeight="bold">LNA</text>
        <rect x="34" y="20" width="24" height="18" fill={`${ACC}12`} stroke={ACC} strokeWidth="0.4" />
        <text x="46" y="32" textAnchor="middle" fontSize="6" fill="white" fontFamily="monospace" fontWeight="bold">ADC</text>
        <text x="32" y="52" textAnchor="middle" fontSize="5.5" fill="#FFD0BA" fontFamily="monospace">Anti-alias · PGA</text>
        <text x="32" y="62" textAnchor="middle" fontSize="5.5" fill="#FFD0BA" fontFamily="monospace">12-bit · 40 MS/s</text>
      </g>

      {/* Decimation Filter */}
      <g transform="translate(150, 36)">
        <rect width="64" height="68" fill={`${ACC}22`} stroke={ACC} strokeWidth="0.7" />
        <text x="32" y="13" textAnchor="middle" fontSize="6.5" fill={ACC} fontFamily="monospace" fontWeight="bold">DECIMATION</text>
        <rect x="6" y="20" width="24" height="18" fill={`${ACC}12`} stroke={ACC} strokeWidth="0.4" />
        <text x="18" y="29" textAnchor="middle" fontSize="6" fill="white" fontFamily="monospace" fontWeight="bold">CIC</text>
        <text x="18" y="35.5" textAnchor="middle" fontSize="4.5" fill="#FFD0BA" fontFamily="monospace">↓ 64</text>
        <rect x="34" y="20" width="24" height="18" fill={`${ACC}12`} stroke={ACC} strokeWidth="0.4" />
        <text x="46" y="29" textAnchor="middle" fontSize="6" fill="white" fontFamily="monospace" fontWeight="bold">FIR</text>
        <text x="46" y="35.5" textAnchor="middle" fontSize="4.5" fill="#FFD0BA" fontFamily="monospace">↓ 4</text>
        <text x="32" y="52" textAnchor="middle" fontSize="5.5" fill="#FFD0BA" fontFamily="monospace">Half-band · Comp.</text>
        <text x="32" y="62" textAnchor="middle" fontSize="5.5" fill="#FFD0BA" fontFamily="monospace">Multi-stage</text>
      </g>

      {/* Envelope / ToF detector (top branch) */}
      <g transform="translate(226, 30)">
        <rect width="100" height="36" fill={`${ACC}33`} stroke={ACC} strokeWidth="0.8" />
        <text x="50" y="11" textAnchor="middle" fontSize="6.5" fill="white" fontFamily="monospace" fontWeight="bold">ENVELOPE / ToF</text>
        {/* small waveform + envelope curve */}
        <path d="M 6 28 Q 12 18, 18 28 T 30 28 T 42 28 T 54 28" fill="none" stroke="#FFD0BA" strokeWidth="0.6" />
        <path d="M 6 24 Q 18 12, 30 12 T 54 22" fill="none" stroke={ACC} strokeWidth="0.9" strokeDasharray="2 1.2" />
        <circle cx="30" cy="12" r="1.4" fill={ACC} />
        <text x="80" y="22" textAnchor="middle" fontSize="5" fill="#FFD0BA" fontFamily="monospace">Hilbert</text>
        <text x="80" y="30" textAnchor="middle" fontSize="5" fill="#FFD0BA" fontFamily="monospace">Peak detect</text>
      </g>

      {/* 2D segmented polynomial calibration (bottom branch) */}
      <g transform="translate(226, 74)">
        <rect width="100" height="30" fill={`${ACC}33`} stroke={ACC} strokeWidth="0.8" />
        <text x="50" y="11" textAnchor="middle" fontSize="6.5" fill="white" fontFamily="monospace" fontWeight="bold">2D POLY-CAL</text>
        {/* segmented grid 3x2 with little curves */}
        <g transform="translate(6, 14)">
          {Array.from({ length: 6 }).map((_, i) => {
            const c = i % 3;
            const r = Math.floor(i / 3);
            const x = c * 14;
            const y = r * 7.5;
            return (
              <g key={i} transform={`translate(${x}, ${y})`}>
                <rect width="13" height="7" fill={`${ACC}18`} stroke={ACC} strokeWidth="0.3" />
                <path d={`M 1 6 Q 6 ${1.5 + (i % 3)}, 12 ${2 + (i % 2)}`} fill="none" stroke={ACC} strokeWidth="0.5" />
              </g>
            );
          })}
        </g>
        <text x="78" y="20" textAnchor="middle" fontSize="5" fill="#FFD0BA" fontFamily="monospace">Segmented</text>
        <text x="78" y="27" textAnchor="middle" fontSize="5" fill="#FFD0BA" fontFamily="monospace">Progressive</text>
      </g>

      {/* Output */}
      <g transform="translate(340, 36)">
        <rect width="46" height="68" fill={`${ACC}1c`} stroke={ACC} strokeWidth="0.6" />
        <text x="23" y="14" textAnchor="middle" fontSize="6.5" fill={ACC} fontFamily="monospace" fontWeight="bold">OUTPUT</text>
        <text x="23" y="36" textAnchor="middle" fontSize="6" fill="white" fontFamily="monospace">ToF · m</text>
        <text x="23" y="48" textAnchor="middle" fontSize="6" fill="white" fontFamily="monospace">Flow rate</text>
        <text x="23" y="60" textAnchor="middle" fontSize="5.5" fill="#FFD0BA" fontFamily="monospace">Calibrated</text>
      </g>

      {/* Connections */}
      <g stroke={`${ACC}aa`} strokeWidth="0.7" fill="none">
        <line x1="62" y1="70" x2="74" y2="70" />
        <line x1="138" y1="70" x2="150" y2="70" />
        <line x1="214" y1="55" x2="226" y2="48" />
        <line x1="214" y1="85" x2="226" y2="89" />
        <line x1="326" y1="48" x2="340" y2="62" />
        <line x1="326" y1="89" x2="340" y2="78" />
      </g>

      {/* Bottom metric badges */}
      <g transform="translate(14, 130)">
        <rect width="110" height="14" rx="2" fill={`${ACC}40`} stroke={ACC} strokeWidth="0.5" />
        <text x="55" y="10" textAnchor="middle" fontSize="6.5" fill="white" fontFamily="monospace" fontWeight="bold">HW Complexity ↓ 78.9%</text>
      </g>
      <g transform="translate(132, 130)">
        <rect width="124" height="14" rx="2" fill={`${ACC}22`} stroke={ACC} strokeWidth="0.5" />
        <text x="62" y="10" textAnchor="middle" fontSize="6.5" fill={ACC} fontFamily="monospace">ToF Mean Dev. 5.07%</text>
      </g>
      <g transform="translate(264, 130)">
        <rect width="122" height="14" rx="2" fill={`${ACC}22`} stroke={ACC} strokeWidth="0.5" />
        <text x="61" y="10" textAnchor="middle" fontSize="6.5" fill={ACC} fontFamily="monospace">Err 0.082% → 0.000006%</text>
      </g>

      {/* Heterogeneous integration band */}
      <g transform="translate(14, 156)">
        <rect width="372" height="46" fill={`${ACC}10`} stroke={ACC} strokeWidth="0.6" strokeDasharray="3 2" />
        <text x="10" y="14" fontSize="6.5" fill={ACC} fontFamily="monospace" fontWeight="bold">HETEROGENEOUS SoC INTEGRATION</text>
        <g transform="translate(8, 22)">
          {['MCU CORE', 'SRAM 64KB', 'DSP', 'TIMER/PWM', 'SPI/I²C', 'CAL ROM'].map((b, i) => (
            <g key={b} transform={`translate(${i * 60}, 0)`}>
              <rect width="56" height="18" fill={`${ACC}1a`} stroke={ACC} strokeWidth="0.4" />
              <text x="28" y="11" textAnchor="middle" fontSize="5.5" fill="white" fontFamily="monospace" fontWeight="bold">{b}</text>
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
}

// ----------------------------------------------------------------------------
// 03 — Neuromorphic Computing & SNN-based Low-Power AI Processor
//   알고리즘 묘사:
//     좌측  — SNN: pre 뉴런들의 spike train × 시냅스 가중치(w₁,w₂,w₃)
//             → LIF 뉴런의 V(t) 막전위 누적 → V≥Vth 시 fire + reset → OUT spike
//     우측  — STDP: Δw vs Δt 학습 곡선 (Δt>0: LTP / Δt<0: LTD, 양측 지수 감쇠)
// ----------------------------------------------------------------------------
export function NeuromorphicArt() {
  const ACC = '#00FF88';

  // ─ Pre-synaptic spike trains: 각 row 의 spike 발생 시각 (0~80 로컬 x 축)
  const preTrains: { name: string; spikes: number[]; weight: string }[] = [
    { name: 'PRE 1', spikes: [6, 18, 32, 48, 64], weight: 'w₁' },
    { name: 'PRE 2', spikes: [12, 24, 38, 56, 72], weight: 'w₂' },
    { name: 'PRE 3', spikes: [4, 22, 36, 52, 70], weight: 'w₃' },
  ];

  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="220" fill="#02140a" />
      <text x="200" y="14" textAnchor="middle" fontSize="9" fill="white" fontFamily="monospace" fontWeight="bold" letterSpacing="0.5">
        SPIKING NEURAL NETWORK + STDP LEARNING
      </text>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* LEFT PANEL — LIF Neuron Dynamics                                  */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <g transform="translate(10, 24)">
        <rect width="200" height="130" fill={`${ACC}10`} stroke={`${ACC}55`} strokeWidth="0.5" />
        <text x="6" y="11" fontSize="6.5" fill={ACC} fontFamily="monospace" fontWeight="bold">
          SNN · LIF NEURON
        </text>

        {/* Pre-synaptic spike trains */}
        {preTrains.map((tr, idx) => {
          const y = 28 + idx * 24;
          return (
            <g key={tr.name}>
              {/* row label */}
              <text x="4" y={y + 3} fontSize="5.5" fill="white" fontFamily="monospace" fontWeight="bold">
                {tr.name}
              </text>
              {/* timeline baseline */}
              <line x1="30" y1={y} x2="110" y2={y} stroke={`${ACC}40`} strokeWidth="0.3" />
              {/* individual spike pulses (vertical ticks) */}
              {tr.spikes.map((sx, i) => (
                <line
                  key={i}
                  x1={30 + sx}
                  y1={y - 6}
                  x2={30 + sx}
                  y2={y + 4}
                  stroke={ACC}
                  strokeWidth="0.9"
                />
              ))}
              {/* synaptic weight */}
              <text x="116" y={y + 3} fontSize="6" fill={ACC} fontFamily="monospace" fontWeight="bold">
                ×{tr.weight}
              </text>
              {/* arrow into summation */}
              <line x1="128" y1={y} x2="138" y2={64} stroke={`${ACC}88`} strokeWidth="0.5" />
            </g>
          );
        })}

        {/* Σ summation node */}
        <g transform="translate(138, 58)">
          <circle r="6" fill={`${ACC}33`} stroke={ACC} strokeWidth="0.7" />
          <text x="0" y="2" textAnchor="middle" fontSize="7" fill="white" fontFamily="monospace" fontWeight="bold">
            Σ
          </text>
        </g>
        <line x1="144" y1="58" x2="152" y2="58" stroke={`${ACC}aa`} strokeWidth="0.6" />

        {/* LIF V(t) graph */}
        <g transform="translate(152, 24)">
          <rect width="44" height="76" fill={`${ACC}1a`} stroke={ACC} strokeWidth="0.6" />
          <text x="22" y="8" textAnchor="middle" fontSize="5.5" fill="white" fontFamily="monospace" fontWeight="bold">
            V(t)
          </text>
          {/* baseline (V = 0) */}
          <line x1="3" y1="64" x2="41" y2="64" stroke={`${ACC}40`} strokeWidth="0.3" strokeDasharray="1 1" />
          <text x="42" y="66" fontSize="4" fill={`${ACC}aa`} fontFamily="monospace" textAnchor="start">
            0
          </text>
          {/* threshold (V_th) */}
          <line x1="3" y1="20" x2="41" y2="20" stroke={ACC} strokeWidth="0.5" strokeDasharray="2 1.5" />
          <text x="42" y="22" fontSize="4.5" fill={ACC} fontFamily="monospace" textAnchor="start">
            Vth
          </text>
          {/* membrane potential trace: leaky integrate → fire → reset */}
          <path
            d="
              M 3 64
              L 7 64 L 7 56 L 11 58
              L 14 58 L 14 49 L 17 51
              L 20 51 L 20 42 L 23 44
              L 26 44 L 26 33 L 29 35
              L 32 35 L 32 24 L 35 26
              L 37 26 L 37 16
              L 37 64
              L 41 64
            "
            fill="none"
            stroke={ACC}
            strokeWidth="0.9"
          />
          {/* fire marker */}
          <circle cx="37" cy="16" r="1.4" fill="#FFFFFF" />
          <text x="22" y="74" textAnchor="middle" fontSize="4.5" fill={`${ACC}cc`} fontFamily="monospace">
            leak · integrate · fire
          </text>
        </g>

        {/* OUT spike train (after fire) */}
        <g transform="translate(0, 110)">
          <text x="4" y="9" fontSize="5.5" fill="white" fontFamily="monospace" fontWeight="bold">
            OUT
          </text>
          <line x1="30" y1="6" x2="194" y2="6" stroke={`${ACC}40`} strokeWidth="0.3" />
          {[42, 96, 148].map((sx, i) => (
            <line key={i} x1={sx} y1="0" x2={sx} y2="12" stroke={ACC} strokeWidth="1.1" />
          ))}
        </g>
      </g>

      {/* arrow from LIF → OUT */}
      <line x1="195" y1="86" x2="195" y2="130" stroke={`${ACC}aa`} strokeWidth="0.6" />

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* RIGHT PANEL — STDP Learning Curve                                  */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <g transform="translate(218, 24)">
        <rect width="172" height="130" fill={`${ACC}10`} stroke={`${ACC}55`} strokeWidth="0.5" />
        <text x="6" y="11" fontSize="6.5" fill={ACC} fontFamily="monospace" fontWeight="bold">
          STDP · Δw vs Δt
        </text>

        {/* Axes */}
        {/* x-axis (Δt) at y=65, from x=12 to x=160 */}
        <line x1="12" y1="65" x2="160" y2="65" stroke={`${ACC}aa`} strokeWidth="0.6" />
        {/* y-axis (Δw) at x=86 (center), from y=22 to y=108 */}
        <line x1="86" y1="22" x2="86" y2="108" stroke={`${ACC}aa`} strokeWidth="0.6" />
        {/* arrowheads */}
        <polygon points="160,65 156,63 156,67" fill={`${ACC}aa`} />
        <polygon points="86,22 84,26 88,26" fill={`${ACC}aa`} />
        {/* axis labels */}
        <text x="162" y="68" fontSize="5.5" fill={ACC} fontFamily="monospace" fontWeight="bold">
          Δt
        </text>
        <text x="88" y="20" fontSize="5.5" fill={ACC} fontFamily="monospace" fontWeight="bold">
          Δw
        </text>
        {/* origin */}
        <text x="80" y="74" fontSize="4.5" fill={`${ACC}aa`} fontFamily="monospace" textAnchor="end">
          0
        </text>

        {/* LTP curve (Δt > 0, Δw > 0): exponential decay above x-axis */}
        <path
          d="M 87 30 Q 100 36, 116 50 T 156 64"
          fill="none"
          stroke={ACC}
          strokeWidth="1.1"
        />
        <text x="120" y="32" fontSize="6" fill={ACC} fontFamily="monospace" fontWeight="bold">
          LTP
        </text>
        <text x="120" y="40" fontSize="4.5" fill={`${ACC}cc`} fontFamily="monospace">
          Δw = A₊·e^(−Δt/τ₊)
        </text>
        <text x="120" y="48" fontSize="4.5" fill={`${ACC}aa`} fontFamily="monospace">
          pre fires before post
        </text>

        {/* LTD curve (Δt < 0, Δw < 0): mirrored exponential below x-axis */}
        <path
          d="M 85 100 Q 72 94, 56 80 T 16 66"
          fill="none"
          stroke={ACC}
          strokeWidth="1.1"
          opacity="0.85"
        />
        <text x="16" y="102" fontSize="6" fill={ACC} fontFamily="monospace" fontWeight="bold">
          LTD
        </text>
        <text x="16" y="110" fontSize="4.5" fill={`${ACC}cc`} fontFamily="monospace">
          Δw = −A₋·e^(Δt/τ₋)
        </text>
        <text x="16" y="118" fontSize="4.5" fill={`${ACC}aa`} fontFamily="monospace">
          post fires before pre
        </text>

        {/* tick samples */}
        {[
          { x: 100, y: 65 },
          { x: 120, y: 65 },
          { x: 140, y: 65 },
          { x: 72, y: 65 },
          { x: 56, y: 65 },
          { x: 36, y: 65 },
        ].map((t, i) => (
          <line key={i} x1={t.x} y1={t.y - 2} x2={t.x} y2={t.y + 2} stroke={`${ACC}88`} strokeWidth="0.4" />
        ))}
      </g>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* Bottom metric badges                                              */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <g transform="translate(10, 162)">
        <rect width="120" height="16" rx="2" fill={`${ACC}40`} stroke={ACC} strokeWidth="0.5" />
        <text x="60" y="11" textAnchor="middle" fontSize="6.5" fill="white" fontFamily="monospace" fontWeight="bold">
          LIF · V_th · LEAKY
        </text>
      </g>
      <g transform="translate(138, 162)">
        <rect width="140" height="16" rx="2" fill={`${ACC}22`} stroke={ACC} strokeWidth="0.5" />
        <text x="70" y="11" textAnchor="middle" fontSize="6.5" fill={ACC} fontFamily="monospace">
          STDP · Hebbian Δw = f(Δt)
        </text>
      </g>
      <g transform="translate(286, 162)">
        <rect width="104" height="16" rx="2" fill={`${ACC}22`} stroke={ACC} strokeWidth="0.5" />
        <text x="52" y="11" textAnchor="middle" fontSize="6.5" fill={ACC} fontFamily="monospace">
          Samsung 28 nm
        </text>
      </g>
      <g transform="translate(10, 184)">
        <rect width="380" height="22" rx="2" fill={`${ACC}10`} stroke={`${ACC}55`} strokeWidth="0.5" strokeDasharray="3 2" />
        <text x="10" y="14" fontSize="6" fill={ACC} fontFamily="monospace" fontWeight="bold">
          EVENT-DRIVEN · ON-CHIP LEARNING · µW ALWAYS-ON EDGE AI
        </text>
      </g>
    </svg>
  );
}

export const ART_BY_NO: Partial<Record<string, FC>> = {
  '01': AIAttentionArt,
  '02': SensorSoCArt,
  '03': NeuromorphicArt,
};

// ----------------------------------------------------------------------------
// 인용 메타 (caption / source / url) — 현재 화면에는 노출되지 않지만,
// 향후 figure 출처 표기가 다시 필요해질 때 사용할 수 있도록 보존합니다.
// ----------------------------------------------------------------------------

export type ResearchFigure = {
  src?: string;
  caption: string;
  source: string;
  url?: string;
};

export const FIGURE_BY_NO: Partial<Record<string, ResearchFigure>> = {
  '01': {
    caption:
      'Edge AI accelerator block diagram: Variable Systolic Array Transformer engine, hardware-assisted NPU virtualization scheduler, and in-memory matrix multiplication layer.',
    source:
      'Based on the Lab\u2019s work on Variable Systolic Array Transformer (Electronics, MDPI) and Hardware-Assisted NPU Virtualization (Sensors, MDPI).',
  },
  '02': {
    caption:
      'Heterogeneous sensor SoC architecture: AFE \u2192 Decimation Filter \u2192 ToF / envelope detector \u2192 segmented 2D polynomial calibration processor.',
    source:
      'Yu, M.-G. & Kim, D.-S., JSAN 2025; Lee, J.-L. & Kim, D.-S., Sensors 2024; 2D Sensor Calibration Processor, IEEE Access 2025.',
    url: 'https://doi.org/10.3390/jsan14010012',
  },
  '03': {
    caption:
      'Neuromorphic processor with Unified Refractory-control Neuron (UREN) router on a star-topology NoC, supporting nearest-neighbor STDP for on-chip learning. Implemented in Samsung 28 nm full-custom silicon (2025).',
    source:
      'Na, S. & Kim, D.-S., \u201cAn Energy-Efficient Neuromorphic Processor Using Unified Refractory Control-Based NoC for Edge AI,\u201d Electronics, 2025.',
    url: 'https://doi.org/10.3390/electronics14244959',
  },
};
