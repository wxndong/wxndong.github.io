---
layout: project
title: "VPEvolve"
paper_title: "VPEvolve: A Self-Evolving Virtual Process Engineer for Computational Lithography"
venue: "arXiv 2026"
permalink: /vpevolve/
authors_html: >-
  <span class="proj-author"><a class="proj-author-link" href="javascript:void(0)">Tianyi Li</a><sup>1,2*</sup>,</span>
  <span class="proj-author"><a class="proj-author-link" href="javascript:void(0)">Wenxuan Dong</a><sup>1,2*</sup>,</span>
  <span class="proj-author"><a class="proj-author-link" href="javascript:void(0)">Donger Luo</a><sup>1</sup>,</span>
  <span class="proj-author"><a class="proj-author-link" href="javascript:void(0)">Nan Wang</a><sup>1,2</sup>,</span>
  <span class="proj-author"><a class="proj-author-link" href="javascript:void(0)">Yanpeng Chen</a><sup>1</sup>,</span><br>
  <span class="proj-author"><a class="proj-author-link" href="javascript:void(0)">Jiaqi Liu</a><sup>3</sup>,</span>
  <span class="proj-author"><a class="proj-author-link" href="javascript:void(0)">Xinyun Zhang</a><sup>1</sup>,</span>
  <span class="proj-author"><a class="proj-author-link" href="javascript:void(0)">Hao Geng</a><sup>1†</sup></span>
affiliations_html: >-
  <sup>1</sup>ShanghaiTech University,&ensp; <sup>2</sup>ZeroShot Co., Ltd.,<br>
  <sup>3</sup>Shanghai Optoelectronics Science and Technology Innovation Center
author_note: >-
  <sup>*</sup>Equal Contribution &emsp; <sup>†</sup>Corresponding Author
links:
  arXiv: https://arxiv.org/abs/2609.32473
  Code: https://github.com/True-Litianyi/VPEVOLVE_code
bibtex: |
  @misc{li2026vpevolveselfevolvingvirtualprocess,
    title={VPEvolve: A Self-Evolving Virtual Process Engineer for Computational Lithography},
    author={Tianyi Li and Wenxuan Dong and Donger Luo and Nan Wang and Yanpeng Chen and Jiaqi Liu and Xinyun Zhang and Hao Geng},
    year={2026},
    eprint={2609.32473},
    archivePrefix={arXiv},
    primaryClass={cs.AI},
    url={https://arxiv.org/abs/2609.32473},
  }
---

<figure class="proj-figure proj-figure--teaser proj-figure--light">
    <img src="{{ '/assets/images/projects/vpevolve/teaser.png' | relative_url }}" alt="From manual OPC recipe development to VPEvolve">
    <figcaption class="proj-teaser-caption"><strong>Co-evolving industrial OPC recipes and engineering judgments through commercial tool trials.</strong> VPEvolve combines an executable Virtual Process Engineer harness with an evolving Skill Bank. In 10 trials at 100% feasibility, it cuts Max EPE by 70.7% on Poly from 18.294 to 5.361 nm and by 28.8% on Metal1 from 22.052 to 15.692 nm.</figcaption>
</figure>

<section class="proj-overview" markdown="1">

## Abstract

**Motivation and Problem.** Real OPC recipe development breaks both stationary agent memory and optimization over a fixed space. As hotspots emerge, engineers keep adding local rules for specific patterns, expanding the action space itself. Because fixing one hotspot often shifts the worst error elsewhere, scalar feedback and append-only memory misjudge working edits and reuse outdated lessons.

**Key Insight and Contribution.** Reliable test-time self-improvement in a shifting action space requires decoupling which recipes are accepted from how experience evolves. We diagnose each trial locally at fixed spatial gauges, then distill verified trial records into conditional engineering beliefs that can be revised as the recipe changes. A frozen LLM can thus continually improve both the OPC recipe and its own judgments without updating weights.

</section>

## Method

<figure class="proj-figure proj-figure--light">
    <img src="{{ '/assets/images/projects/vpevolve/method.png' | relative_url }}" alt="Recipe and experience evolution in VPEvolve">
</figure>

The Actor, Reflector, and Curator share one frozen LLM. A candidate replaces the retained recipe only when EPE improves with zero MRC or SRAF violations and PVB within +2% of R0, while every trial drives three coupled mechanisms.

**Domain Response Reflection.** Compares predicted and measured EPE at fixed spatial gauges on both the original hotspot and the new worst site. This separates ineffective edits from bottleneck migration so trial outcomes are attributed accurately.

**Scoped Experience Revision.** Grounds conditional judgments in verified trials and counterexamples, adding, splitting, or merging entries as the recipe evolves. Automated checks verify every rule against raw trial logs so outdated claims cannot persist silently.

**Experiment Guidance.** Proposes one or two targeted next edits with explicit predictions for local and global EPE, turning each remaining trial into a focused hypothesis test rather than blind search.

## Results

### Evolution Dynamics

<figure class="proj-figure">
    <img src="{{ '/assets/images/projects/vpevolve/evolution_dynamics.gif' | relative_url }}" alt="10-trial measured evolution on a dense Metal1 layout">
</figure>

Over 10 measured trials on a dense Metal1 window, VPEvolve first tunes global parameters to bring down baseline error, then dynamically synthesizes and refines targeted local rules whenever the limiting hotspot migrates. The trajectory cuts Max EPE by 34.5% from 22.78 to 14.91 nm while maintaining zero violations throughout.

### Main Comparison

Across 20 FreePDK45 windows spanning 10 Poly and 10 Metal1 layouts under a shared budget of 10 trials, VPEvolve outperforms Bayesian optimization and all six agent baselines on both maximum and mean EPE.

<div class="proj-table-wrap">
<table class="proj-table">
    <thead>
        <tr>
            <th>Method</th>
            <th>Poly Max / Mean (nm) ↓</th>
            <th>Metal1 Max / Mean (nm) ↓</th>
            <th>Overall Max (nm) ↓</th>
            <th>SR ↑</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>Initial Recipe (R0)</td><td>18.294 / 0.854</td><td>22.052 / 0.805</td><td>20.173</td><td>—</td></tr>
        <tr><td>Bayesian Optimization</td><td>17.909 / 0.827</td><td>21.773 / 0.778</td><td>19.841</td><td>30%</td></tr>
        <tr><td>ReasoningBank</td><td>17.523 / 0.833</td><td>20.538 / 0.756</td><td>19.031</td><td>75%</td></tr>
        <tr><td>Static Harness</td><td>17.583 / 0.848</td><td>19.875 / 0.780</td><td>18.729</td><td>75%</td></tr>
        <tr><td>Raw Actor</td><td>17.271 / 0.835</td><td>19.609 / 0.758</td><td>18.440</td><td>80%</td></tr>
        <tr><td>ACE</td><td>16.697 / 0.783</td><td>19.920 / 0.758</td><td>18.308</td><td>95%</td></tr>
        <tr><td>Textual Memory</td><td>17.296 / 0.781</td><td>18.966 / 0.742</td><td>18.131</td><td>85%</td></tr>
        <tr><td>ReAct</td><td>16.501 / 0.817</td><td>17.775 / 0.729</td><td>17.138</td><td>100%</td></tr>
        <tr class="is-ours"><td>VPEvolve (Ours)</td><td>5.361 / 0.645</td><td>15.692 / 0.690</td><td>10.527</td><td>100%</td></tr>
    </tbody>
</table>
</div>

### Mechanism Ablation

Freezing online experience degrades Poly Max EPE from 5.361 to 8.082 nm, and removing any single mechanism hurts both layers. In paired continuations from the exact same recipe and raw history at trial 5, VPEvolve's curated bank also outperforms ACE experience by 0.228 nm on Poly and 0.390 nm on Metal1.

<div class="proj-table-wrap">
<table class="proj-table">
    <thead>
        <tr>
            <th>Condition</th>
            <th>Poly Max / Mean (nm) ↓</th>
            <th>Poly SR ↑</th>
            <th>Metal1 Max / Mean (nm) ↓</th>
            <th>Metal1 SR ↑</th>
        </tr>
    </thead>
    <tbody>
        <tr class="is-ours"><td>Full VPEvolve</td><td>5.361 / 0.645</td><td>100%</td><td>15.692 / 0.690</td><td>100%</td></tr>
        <tr><td>Frozen Experience</td><td>8.082 / 0.640</td><td>90%</td><td>16.121 / 0.717</td><td>100%</td></tr>
        <tr><td>w/o Domain Response Reflection</td><td>6.213 / 0.653</td><td>90%</td><td>16.280 / 0.742</td><td>100%</td></tr>
        <tr><td>w/o Scoped Experience Revision</td><td>5.475 / 0.632</td><td>100%</td><td>16.334 / 0.717</td><td>90%</td></tr>
        <tr><td>w/o Experiment Guidance</td><td>5.870 / 0.624</td><td>100%</td><td>16.154 / 0.725</td><td>90%</td></tr>
    </tbody>
</table>
</div>

### Cross-Model Generalization

<figure class="proj-figure proj-figure--light">
    <img src="{{ '/assets/images/projects/vpevolve/cross_model.png' | relative_url }}" alt="VPEvolve generalization across six LLM families">
</figure>

Swapping all three roles across six frontier LLM families consistently improves Max and Mean EPE over R0 on both layers, showing that the gains stem from the evolution framework rather than a single backbone model.

### Long-Horizon Evolution

<figure class="proj-figure proj-figure--light">
    <img src="{{ '/assets/images/projects/vpevolve/long_horizon.png' | relative_url }}" alt="100-trial long-horizon recipe evolution">
</figure>

Over 100 trials, evolving experience keeps driving Max EPE down to 4.477 nm on Poly and 10.912 nm on Metal1 while cutting PVB by 6.01% and 8.13%, whereas Frozen Experience stalls and terminates at trial 57 on Metal1.

## Takeaways

**Memory structure matters.** Even given the exact same recipe and raw trial history, curating experience into conditional, revisable beliefs outperforms append-only playbooks and prevents long-horizon stalling.

**Self-improvement under drift.** When an agent's own edits reshape the problem, test-time self-improvement with fixed weights hinges on deciding what to probe next and which earlier lessons need narrowing or refuting.
