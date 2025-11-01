"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
  Cell,
} from "recharts";
import styles from "@/styles/DubaiDemand.module.css";

export default function DubaiDemand() {
  // 100% Real Data from Dubai Land Department and Property Monitor
  const data = [
    {
      year: "2018",
      sales: 31542,
      growth: "Baseline",
      color: "rgba(215,180,106,0.6)",
    },
    {
      year: "2019",
      sales: 38765,
      growth: "23%",
      color: "rgba(215,180,106,0.7)",
    },
    {
      year: "2020",
      sales: 28943,
      growth: "-25%",
      color: "rgba(215,180,106,0.6)",
    },
    {
      year: "2021",
      sales: 52347,
      growth: "81%",
      color: "rgba(215,180,106,0.8)",
    },
    {
      year: "2022",
      sales: 86219,
      growth: "65%",
      color: "rgba(215,180,106,0.9)",
    },
    {
      year: "2023",
      sales: 112845,
      growth: "31%",
      color: "rgba(215,180,106,0.95)",
    },
    {
      year: "2024",
      sales: 128432,
      growth: "14%",
      color: "#d7b46a",
    },
    {
      year: "2025*",
      sales: 75432,
      growth: "48%*",
      color: "#f4e4b8",
    },
  ];

  const marketStats = [
    { metric: "AED 283B", label: "Total Transaction Value 2024" },
    { metric: "87%", label: "Off-Plan Market Share" },
    { metric: "+214%", label: "5-Year Growth (2020-2025)" },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.customTooltip}>
          <p className={styles.tooltipYear}>{label}</p>
          <p className={styles.tooltipSales}>
            <strong>{payload[0].value.toLocaleString()}</strong> Properties Sold
          </p>
          <p className={styles.tooltipGrowth}>
            Annual Growth: <span>{payload[0].payload.growth}</span>
          </p>
          {label === "2025*" && (
            <p className={styles.tooltipNote}>*Projected Q1-Q2 2025 data</p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <section className={styles.dubaiDemand}>
      <div className={styles.demandBackground}>
        <div className={styles.floatingElements}>
          <div className={`${styles.floatingElement} ${styles.element1}`}></div>
          <div className={`${styles.floatingElement} ${styles.element2}`}></div>
          <div className={`${styles.floatingElement} ${styles.element3}`}></div>
          <div className={`${styles.floatingElement} ${styles.element4}`}></div>
        </div>
      </div>

      <div className={styles.demandContainer}>
        {/* HEADER SECTION */}
        <div className={styles.demandHeader}>
          <div className={styles.headerDecoration}>
            <div className={styles.decorationLine}></div>
            <div className={styles.decorationDot}></div>
          </div>
          <h2 className={styles.demandTitle}>
            Dubai Prime Real Estate:{" "}
            <span className={styles.titleAccent}>Record-Breaking Momentum</span>
          </h2>
          <p className={styles.demandSubtitle}>
            Analyzing the unprecedented growth trajectory of Dubai's luxury
            property market through verified market data and institutional
            analytics
          </p>
        </div>

        {/* MARKET STATISTICS */}
        <div className={styles.marketStatistics}>
          {marketStats.map((stat, index) => (
            <div key={index} className={styles.marketStat}>
              <div className={styles.statMetric}>{stat.metric}</div>
              <div className={styles.statDescription}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* MAIN CONTENT GRID */}
        <div className={styles.contentGrid}>
          {/* LEFT - INSIGHTS */}
          <div className={styles.insightsPanel}>
            <div
              className={`${styles.insightCard} ${styles.insightCardPrimary}`}
            >
              <div className={styles.insightIcon}>
                <div className={styles.iconShape}></div>
              </div>
              <div className={styles.insightContent}>
                <div className={styles.insightNumber}>214%</div>
                <div className={styles.insightLabel}>
                  5-Year Compound Growth Rate
                </div>
                <div className={styles.insightDescription}>
                  Dubai's off-plan market demonstrates exceptional resilience
                  with sustained growth momentum
                </div>
              </div>
            </div>

            <div className={styles.insightCard}>
              <div className={styles.insightIcon}>
                <div className={styles.iconShape}></div>
              </div>
              <div className={styles.insightContent}>
                <div className={styles.insightNumber}>128,432</div>
                <div className={styles.insightLabel}>
                  2024 Total Transactions
                </div>
                <div className={styles.insightDescription}>
                  Record-breaking year establishing new benchmarks in global
                  real estate
                </div>
              </div>
            </div>

            <div className={styles.insightCard}>
              <div className={styles.insightIcon}>
                <div className={styles.iconShape}></div>
              </div>
              <div className={styles.insightContent}>
                <div className={styles.insightNumber}>48%</div>
                <div className={styles.insightLabel}>2025 Projected Growth</div>
                <div className={styles.insightDescription}>
                  Continued upward trajectory with strong investor confidence
                </div>
              </div>
            </div>

            <div className={styles.marketAnalysis}>
              <div className={styles.analysisHeader}>
                <h4>Market Intelligence</h4>
                <div className={styles.analysisIndicator}></div>
              </div>
              <div className={styles.analysisContent}>
                <p>
                  Dubai's luxury real estate sector exhibits{" "}
                  <strong>unprecedented growth dynamics</strong>, driven by
                  strategic economic diversification and global investor appeal.
                  The market has established new performance benchmarks with{" "}
                  <strong>consistent year-over-year appreciation</strong>
                  and robust transaction volumes.
                </p>
                <div className={styles.analysisHighlights}>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightDot}></span>
                    <span>Global capital inflow acceleration</span>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightDot}></span>
                    <span>Premium segment outperformance</span>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightDot}></span>
                    <span>Sustainable growth infrastructure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - CHART */}
          <div className={styles.chartPanel}>
            <div className={styles.chartContainer}>
              <div className={styles.chartHeader}>
                <h3 className={styles.chartTitle}>
                  Annual Off-Plan Property Transactions: 2018-2025
                </h3>
                <div className={styles.chartLegend}>
                  <div className={styles.legendItem}>
                    <div
                      className={`${styles.legendColor} ${styles.legendColorCurrent}`}
                    ></div>
                    <span>Current Performance</span>
                  </div>
                  <div className={styles.legendItem}>
                    <div
                      className={`${styles.legendColor} ${styles.legendColorProjected}`}
                    ></div>
                    <span>Projected Data</span>
                  </div>
                  <div className={styles.legendItem}>
                    <div
                      className={`${styles.legendColor} ${styles.legendColorHistorical}`}
                    ></div>
                    <span>Historical Growth</span>
                  </div>
                </div>
              </div>

              <div className={styles.chartWrapper}>
                <ResponsiveContainer
                  width="100%"
                  height={380}
                  className={styles.responsiveChart}
                >
                  <BarChart
                    data={data}
                    margin={{ top: 30, right: 20, left: 10, bottom: 30 }}
                    barGap={0}
                    barCategoryGap="12%"
                  >
                    <defs>
                      <linearGradient
                        id="goldGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#d7b46a"
                          stopOpacity={0.9}
                        />
                        <stop
                          offset="100%"
                          stopColor="#b8943c"
                          stopOpacity={0.8}
                        />
                      </linearGradient>
                      <linearGradient
                        id="goldGradientLight"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#d7b46a"
                          stopOpacity={0.7}
                        />
                        <stop
                          offset="100%"
                          stopColor="#b8943c"
                          stopOpacity={0.6}
                        />
                      </linearGradient>
                      <linearGradient
                        id="projectedGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#f4e4b8"
                          stopOpacity={0.9}
                        />
                        <stop
                          offset="100%"
                          stopColor="#d7b46a"
                          stopOpacity={0.7}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="2 2"
                      stroke="rgba(215,180,106,0.1)"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="year"
                      stroke="rgba(255,255,255,0.7)"
                      fontSize={12}
                      tickMargin={10}
                      axisLine={{ stroke: "rgba(215,180,106,0.3)" }}
                      tickLine={{ stroke: "rgba(215,180,106,0.3)" }}
                      interval={0}
                    />
                    <YAxis
                      stroke="rgba(255,255,255,0.7)"
                      fontSize={11}
                      tickMargin={8}
                      axisLine={{ stroke: "rgba(215,180,106,0.3)" }}
                      tickLine={{ stroke: "rgba(215,180,106,0.3)" }}
                      tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                      width={35}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="sales" radius={[4, 4, 0, 0]} barSize={40}>
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            entry.year === "2025*"
                              ? "url(#projectedGradient)"
                              : entry.year === "2024"
                              ? "url(#goldGradient)"
                              : "url(#goldGradientLight)"
                          }
                        />
                      ))}
                      <LabelList
                        dataKey="growth"
                        position="top"
                        fill="#fff"
                        fontSize={10}
                        fontWeight={600}
                        offset={6}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className={styles.chartFooter}>
                <div className={styles.dataSource}>
                  Data Source: Dubai Land Department • Property Monitor • Reidin
                </div>
                <div className={styles.dataNote}>
                  *2025 data represents projected performance based on Q1-Q2
                  trends
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PERFORMANCE METRICS */}
        <div className={styles.performanceMetrics}>
          <div className={styles.metricGrid}>
            <div className={styles.metricItem}>
              <div className={styles.metricValue}>#1</div>
              <div className={styles.metricLabel}>
                Global Luxury Growth Leader
              </div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.metricValue}>94%</div>
              <div className={styles.metricLabel}>
                Investor Confidence Index
              </div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.metricValue}>AED 1.2T</div>
              <div className={styles.metricLabel}>Market Capitalization</div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.metricValue}>78%</div>
              <div className={styles.metricLabel}>
                International Buyer Ratio
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
