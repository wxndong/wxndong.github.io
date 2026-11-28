---
layout: project
title: "UniMRC"
paper_title: "UniMRC: A Differentiable Multimodal Framework for Unified Curvilinear-Manhattan Mask Rule Checking"
venue: "ICCAD 2026"
venue_badge: "ICCAD 2026"
permalink: /unimrc/
authors_html: >-
  <span class="proj-author"><a class="proj-author-link" href="javascript:void(0)">Wenxuan Dong</a><sup>1,2*</sup>,</span>
  <span class="proj-author"><a class="proj-author-link" href="javascript:void(0)">Tianyi Li</a><sup>1,2*</sup>,</span>
  <span class="proj-author"><a class="proj-author-link" href="javascript:void(0)">Kai Ma</a><sup>1,2*</sup>,</span>
  <span class="proj-author"><a class="proj-author-link" href="javascript:void(0)">Zhen Wang</a><sup>1,2*</sup>,</span>
  <span class="proj-author"><a class="proj-author-link" href="javascript:void(0)">Hanbin Dong</a><sup>1</sup>,</span>
  <span class="proj-author"><a class="proj-author-link" href="javascript:void(0)">Nan Wang</a><sup>1,2</sup>,</span><br>
  <span class="proj-author"><a class="proj-author-link" href="javascript:void(0)">Su Zheng</a><sup>3</sup>,</span>
  <span class="proj-author"><a class="proj-author-link" href="javascript:void(0)">Xinyun Zhang</a><sup>1†</sup>,</span>
  <span class="proj-author"><a class="proj-author-link" href="javascript:void(0)">Jingyi Yu</a><sup>1</sup>,</span>
  <span class="proj-author"><a class="proj-author-link" href="javascript:void(0)">Hao Geng</a><sup>1†</sup></span>
affiliations_html: >-
  <sup>1</sup>ShanghaiTech University,&ensp; <sup>2</sup>ZeroShot Co., Ltd.,<br>
  <sup>3</sup>The Chinese University of Hong Kong
author_note: >-
  <sup>*</sup>Equal Contribution &emsp; <sup>†</sup>Corresponding Authors
links:
  Paper: https://doi.org/10.1145/3831252.3834195
bibtex: |
  @inproceedings{dong2026unimrc,
    title={UniMRC: A Differentiable Multimodal Framework for Unified Curvilinear-Manhattan Mask Rule Checking},
    author={Wenxuan Dong and Tianyi Li and Kai Ma and Zhen Wang and Hanbin Dong and Nan Wang and Su Zheng and Xinyun Zhang and Jingyi Yu and Hao Geng},
    booktitle={IEEE/ACM International Conference on Computer-Aided Design (ICCAD '26)},
    year={2026},
    publisher={ACM},
    address={New York, NY, USA},
    doi={10.1145/3831252.3834195},
    url={https://doi.org/10.1145/3831252.3834195},
  }
---

<figure class="proj-figure proj-figure--teaser proj-figure--light">
    <video autoplay loop muted playsinline preload="auto" poster="{{ '/assets/images/projects/unimrc/teaser_poster.png' | relative_url }}">
        <source src="{{ '/assets/images/projects/unimrc/teaser.mp4' | relative_url }}" type="video/mp4">
    </video>
    <figcaption class="proj-teaser-caption"><strong>One differentiable score field unifies verification and mask optimization.</strong> By representing curvilinear and Manhattan contours as point clouds, fusing them with continuous rule queries, and enforcing monotonic violation scores, UniMRC turns discrete rule checking into smooth gradients for inverse lithography.</figcaption>
</figure>

<section class="proj-overview" markdown="1">

## Abstract

**Motivation and Problem.** Analytical MRC engines slow down sharply on curvilinear masks and provide no gradients, forcing inverse lithography into destructive post-hoc repair. Adapting 3D point cloud backbones to check multiple rules fails across rule queries, with Space F1 collapsing to 6–55%, while direct binary heads cause 19× higher false alarms on continuous thresholds.

**Key Insight and Contribution.** We represent curvilinear and Manhattan masks as unified contour point clouds and fuse them with continuous rule queries through cross-attention. Instead of binary classification, we train a continuous violation field under threshold monotonicity, unifying all checks in one differentiable model and feeding smooth gradients directly into mask optimization.

</section>

## Method

<figure class="proj-figure proj-figure--light">
    <img src="{{ '/assets/images/projects/unimrc/method.png' | relative_url }}" alt="Overview of the UniMRC multimodal architecture">
</figure>

**Contour Support.** Unifies curvilinear and Manhattan masks into dense boundary point clouds, preserving both fine curvature and sharp corner geometry without rasterization blur.

**Cross-Attention.** Encodes each rule type and numeric threshold into tokens that interact with contour features. One shared pointwise MLP then decodes all rules without separate heads, preventing collapse across rule queries.

**Monotonicity.** Pairs pointwise supervision with interval margin and adjacent threshold consistency losses so violation scores rise monotonically as thresholds tighten. This replaces brittle binary heads and yields smooth gradients for ILT.

## Results

### Benchmark Performance

On the 17,800 Curvilinear Large test layouts, UniMRC outperforms every adapted point cloud backbone across all five rule families while surpassing analytical engines on Width, Area, and curvature coverage. It also transfers directly to Manhattan Large with 99.51% Width, 98.97% Space, and 97.65% Area F1.

<div class="proj-table-wrap">
<table class="proj-table">
    <thead>
        <tr>
            <th>Method (Curvilinear Large, F1 % ↑)</th>
            <th>Width</th>
            <th>Space</th>
            <th>Area</th>
            <th>Convex</th>
            <th>Concave</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>EasyMRC</td><td>32.56</td><td>77.61</td><td>—</td><td>—</td><td>—</td></tr>
        <tr><td>KLayout</td><td>79.24</td><td>87.45</td><td>96.15</td><td>—</td><td>—</td></tr>
        <tr><td>PTv3</td><td>75.74</td><td>55.44</td><td>92.36</td><td>94.63</td><td>85.20</td></tr>
        <tr><td>Uni3D</td><td>67.79</td><td>5.97</td><td>87.73</td><td>89.13</td><td>69.76</td></tr>
        <tr><td>Mamba3D</td><td>73.42</td><td>41.25</td><td>87.70</td><td>92.33</td><td>80.79</td></tr>
        <tr class="is-ours"><td>UniMRC (Ours)</td><td>96.29</td><td>87.13</td><td>97.59</td><td>98.43</td><td>96.32</td></tr>
    </tbody>
</table>
</div>

<figure class="proj-figure proj-figure--light proj-figure--md">
    <img src="{{ '/assets/images/projects/unimrc/qualitative.png' | relative_url }}" alt="Qualitative violation predictions on curvilinear and Manhattan layouts">
</figure>

On rounded line ends, dense curvilinear shapes, and Manhattan corners, UniMRC localizes boundary violations precisely against ground truth with virtually no stray boundary alarms.

<figure class="proj-figure proj-figure--light proj-figure--md">
    <img src="{{ '/assets/images/projects/unimrc/runtime.png' | relative_url }}" alt="Runtime comparison across four benchmark settings">
</figure>

Across all four benchmark settings, UniMRC runs over 10× faster than commercial Calibre, taking 2.41 s per rule category on Curvilinear Medium and 120.2 s on Curvilinear Large compared with 1,440 s for Calibre.

### Mechanism Ablation

Without rule conditioning, Macro F1 drops to 20.85%; a direct binary head raises false alarms from 0.68% to 12.84%.

<div class="proj-table-wrap">
<table class="proj-table">
    <thead>
        <tr>
            <th>Variant (Curvilinear Medium, 5 rules)</th>
            <th>Macro F1 (%) ↑</th>
            <th>Recall (%) ↑</th>
            <th>FAR (%) ↓</th>
            <th>Total TAT (s) ↓</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>w/o Rule Conditioning</td><td>20.85</td><td>24.17</td><td>7.74</td><td>9.32</td></tr>
        <tr><td>Direct Binary Head</td><td>85.67</td><td>99.11</td><td>12.84</td><td>11.22</td></tr>
        <tr><td>w/o Interval Loss</td><td>96.54</td><td>95.10</td><td>0.47</td><td>11.51</td></tr>
        <tr><td>w/o Consistency Loss</td><td>96.94</td><td>97.67</td><td>0.94</td><td>11.84</td></tr>
        <tr class="is-ours"><td>UniMRC (Full)</td><td>97.64</td><td>97.83</td><td>0.68</td><td>12.07</td></tr>
    </tbody>
</table>
</div>

### Case Study: Differentiable ILT

Whereas non-differentiable checks force destructive post-hoc repair, UniMRC plugs directly into CurvyILT to guide mask optimization with smooth gradients. On every tested case, it cuts MRC violations by 24.45% under independent Calibre verification while also lowering L2 image fidelity error by 9.95%.

<div class="proj-table-wrap">
<table class="proj-table">
    <thead>
        <tr>
            <th>ILT Case</th>
            <th>CurvyILT L2 ↓</th>
            <th>+ UniMRC L2 ↓</th>
            <th>Δ L2</th>
            <th>CurvyILT Viols ↓</th>
            <th>+ UniMRC Viols ↓</th>
            <th>Δ Viols</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>Case 1</td><td>212,853</td><td>180,206</td><td>−15.34%</td><td>36</td><td>31</td><td>−13.89%</td></tr>
        <tr><td>Case 2</td><td>151,831</td><td>146,631</td><td>−3.42%</td><td>16</td><td>12</td><td>−25.00%</td></tr>
        <tr><td>Case 3</td><td>192,382</td><td>188,087</td><td>−2.23%</td><td>17</td><td>12</td><td>−29.41%</td></tr>
        <tr><td>Case 4</td><td>10,171</td><td>7,375</td><td>−27.49%</td><td>7</td><td>4</td><td>−42.86%</td></tr>
        <tr><td>Case 5</td><td>155,895</td><td>153,913</td><td>−1.27%</td><td>18</td><td>16</td><td>−11.11%</td></tr>
        <tr class="is-ours"><td>Average</td><td>144,626</td><td>135,242</td><td>−9.95%</td><td>18.8</td><td>15.0</td><td>−24.45%</td></tr>
    </tbody>
</table>
</div>

## Takeaways

**Problem simplification.** UniMRC collapses fragmented geometric rules into one simple mapping from a mask and a rule query to violation scores, replacing handcrafted heuristics and separate rule heads with a single model.

**Pareto gains.** Placing a monotonic neural verifier inside ILT improves manufacturability and imaging fidelity together, showing that post-hoc checks leave better masks along the Pareto frontier out of reach.

**Toward multi-layer production MRC.** Learning directly from layout data fits mature production lines without handcrafted rules, and the 3D contour representation extends naturally to future multi-layer MRC.
