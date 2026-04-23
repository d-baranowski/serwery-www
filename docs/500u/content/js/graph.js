/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 8.0, "minX": 0.0, "maxY": 16248.0, "series": [{"data": [[0.0, 8.0], [0.1, 16.0], [0.2, 17.0], [0.3, 20.0], [0.4, 24.0], [0.5, 25.0], [0.6, 35.0], [0.7, 37.0], [0.8, 38.0], [0.9, 43.0], [1.0, 48.0], [1.1, 49.0], [1.2, 59.0], [1.3, 59.0], [1.4, 60.0], [1.5, 64.0], [1.6, 65.0], [1.7, 68.0], [1.8, 70.0], [1.9, 71.0], [2.0, 71.0], [2.1, 75.0], [2.2, 76.0], [2.3, 77.0], [2.4, 80.0], [2.5, 82.0], [2.6, 83.0], [2.7, 86.0], [2.8, 88.0], [2.9, 89.0], [3.0, 90.0], [3.1, 90.0], [3.2, 90.0], [3.3, 93.0], [3.4, 94.0], [3.5, 94.0], [3.6, 97.0], [3.7, 112.0], [3.8, 118.0], [3.9, 145.0], [4.0, 187.0], [4.1, 196.0], [4.2, 206.0], [4.3, 206.0], [4.4, 207.0], [4.5, 208.0], [4.6, 250.0], [4.7, 252.0], [4.8, 252.0], [4.9, 252.0], [5.0, 255.0], [5.1, 256.0], [5.2, 257.0], [5.3, 260.0], [5.4, 299.0], [5.5, 300.0], [5.6, 300.0], [5.7, 332.0], [5.8, 844.0], [5.9, 905.0], [6.0, 907.0], [6.1, 907.0], [6.2, 933.0], [6.3, 933.0], [6.4, 934.0], [6.5, 934.0], [6.6, 936.0], [6.7, 937.0], [6.8, 1136.0], [6.9, 1137.0], [7.0, 1137.0], [7.1, 1137.0], [7.2, 1137.0], [7.3, 1137.0], [7.4, 1137.0], [7.5, 1137.0], [7.6, 1138.0], [7.7, 1138.0], [7.8, 1138.0], [7.9, 1138.0], [8.0, 1138.0], [8.1, 1139.0], [8.2, 1140.0], [8.3, 1178.0], [8.4, 1234.0], [8.5, 1246.0], [8.6, 1255.0], [8.7, 1256.0], [8.8, 1256.0], [8.9, 1258.0], [9.0, 1258.0], [9.1, 1258.0], [9.2, 1259.0], [9.3, 1259.0], [9.4, 1260.0], [9.5, 1261.0], [9.6, 1265.0], [9.7, 1301.0], [9.8, 1344.0], [9.9, 1374.0], [10.0, 1375.0], [10.1, 1375.0], [10.2, 1376.0], [10.3, 1377.0], [10.4, 1383.0], [10.5, 1407.0], [10.6, 1472.0], [10.7, 1478.0], [10.8, 1481.0], [10.9, 1481.0], [11.0, 1540.0], [11.1, 1542.0], [11.2, 1544.0], [11.3, 1545.0], [11.4, 1546.0], [11.5, 1547.0], [11.6, 1547.0], [11.7, 1548.0], [11.8, 1552.0], [11.9, 1566.0], [12.0, 1569.0], [12.1, 1570.0], [12.2, 1570.0], [12.3, 1570.0], [12.4, 1570.0], [12.5, 1570.0], [12.6, 1571.0], [12.7, 1571.0], [12.8, 1571.0], [12.9, 1571.0], [13.0, 1572.0], [13.1, 1572.0], [13.2, 1572.0], [13.3, 1604.0], [13.4, 1613.0], [13.5, 1614.0], [13.6, 1615.0], [13.7, 1619.0], [13.8, 1627.0], [13.9, 1629.0], [14.0, 1630.0], [14.1, 1630.0], [14.2, 1631.0], [14.3, 1634.0], [14.4, 1634.0], [14.5, 1635.0], [14.6, 1635.0], [14.7, 1636.0], [14.8, 1640.0], [14.9, 1807.0], [15.0, 1808.0], [15.1, 1808.0], [15.2, 1808.0], [15.3, 1809.0], [15.4, 1809.0], [15.5, 1809.0], [15.6, 1844.0], [15.7, 1845.0], [15.8, 1845.0], [15.9, 1846.0], [16.0, 1847.0], [16.1, 1850.0], [16.2, 1851.0], [16.3, 1852.0], [16.4, 1852.0], [16.5, 1852.0], [16.6, 1853.0], [16.7, 1963.0], [16.8, 2054.0], [16.9, 2056.0], [17.0, 2060.0], [17.1, 2061.0], [17.2, 2063.0], [17.3, 2065.0], [17.4, 2066.0], [17.5, 2071.0], [17.6, 2074.0], [17.7, 2078.0], [17.8, 2093.0], [17.9, 2095.0], [18.0, 2099.0], [18.1, 2105.0], [18.2, 2111.0], [18.3, 2112.0], [18.4, 2112.0], [18.5, 2113.0], [18.6, 2119.0], [18.7, 2120.0], [18.8, 2122.0], [18.9, 2126.0], [19.0, 2160.0], [19.1, 2160.0], [19.2, 2160.0], [19.3, 2161.0], [19.4, 2164.0], [19.5, 2171.0], [19.6, 2183.0], [19.7, 2184.0], [19.8, 2186.0], [19.9, 2186.0], [20.0, 2186.0], [20.1, 2187.0], [20.2, 2208.0], [20.3, 2212.0], [20.4, 2214.0], [20.5, 2215.0], [20.6, 2215.0], [20.7, 2216.0], [20.8, 2216.0], [20.9, 2233.0], [21.0, 2246.0], [21.1, 2285.0], [21.2, 2292.0], [21.3, 2292.0], [21.4, 2293.0], [21.5, 2295.0], [21.6, 2350.0], [21.7, 2357.0], [21.8, 2359.0], [21.9, 2360.0], [22.0, 2365.0], [22.1, 2371.0], [22.2, 2385.0], [22.3, 2386.0], [22.4, 2387.0], [22.5, 2387.0], [22.6, 2388.0], [22.7, 2388.0], [22.8, 2388.0], [22.9, 2388.0], [23.0, 2389.0], [23.1, 2389.0], [23.2, 2394.0], [23.3, 2398.0], [23.4, 2424.0], [23.5, 2424.0], [23.6, 2425.0], [23.7, 2425.0], [23.8, 2425.0], [23.9, 2425.0], [24.0, 2425.0], [24.1, 2426.0], [24.2, 2436.0], [24.3, 2442.0], [24.4, 2452.0], [24.5, 2456.0], [24.6, 2456.0], [24.7, 2464.0], [24.8, 2466.0], [24.9, 2467.0], [25.0, 2470.0], [25.1, 2471.0], [25.2, 2472.0], [25.3, 2472.0], [25.4, 2473.0], [25.5, 2474.0], [25.6, 2474.0], [25.7, 2477.0], [25.8, 2478.0], [25.9, 2479.0], [26.0, 2479.0], [26.1, 2480.0], [26.2, 2480.0], [26.3, 2481.0], [26.4, 2484.0], [26.5, 2485.0], [26.6, 2511.0], [26.7, 2513.0], [26.8, 2513.0], [26.9, 2513.0], [27.0, 2513.0], [27.1, 2514.0], [27.2, 2515.0], [27.3, 2515.0], [27.4, 2534.0], [27.5, 2537.0], [27.6, 2740.0], [27.7, 2741.0], [27.8, 2743.0], [27.9, 2752.0], [28.0, 2754.0], [28.1, 2755.0], [28.2, 2757.0], [28.3, 2758.0], [28.4, 2759.0], [28.5, 2759.0], [28.6, 2760.0], [28.7, 2762.0], [28.8, 2764.0], [28.9, 2765.0], [29.0, 2766.0], [29.1, 2767.0], [29.2, 2770.0], [29.3, 2770.0], [29.4, 2771.0], [29.5, 2772.0], [29.6, 2774.0], [29.7, 3043.0], [29.8, 3055.0], [29.9, 3055.0], [30.0, 3060.0], [30.1, 3066.0], [30.2, 3070.0], [30.3, 3077.0], [30.4, 3079.0], [30.5, 3080.0], [30.6, 3084.0], [30.7, 3085.0], [30.8, 3087.0], [30.9, 3090.0], [31.0, 3252.0], [31.1, 3257.0], [31.2, 3260.0], [31.3, 3267.0], [31.4, 3273.0], [31.5, 3277.0], [31.6, 3283.0], [31.7, 3299.0], [31.8, 3302.0], [31.9, 3302.0], [32.0, 3302.0], [32.1, 3302.0], [32.2, 3303.0], [32.3, 3303.0], [32.4, 3303.0], [32.5, 3303.0], [32.6, 3303.0], [32.7, 3303.0], [32.8, 3305.0], [32.9, 3306.0], [33.0, 3306.0], [33.1, 3306.0], [33.2, 3306.0], [33.3, 3306.0], [33.4, 3307.0], [33.5, 3308.0], [33.6, 3309.0], [33.7, 3324.0], [33.8, 3381.0], [33.9, 3413.0], [34.0, 3413.0], [34.1, 3413.0], [34.2, 3413.0], [34.3, 3414.0], [34.4, 3414.0], [34.5, 3414.0], [34.6, 3415.0], [34.7, 3416.0], [34.8, 3416.0], [34.9, 3420.0], [35.0, 3443.0], [35.1, 3726.0], [35.2, 3730.0], [35.3, 3731.0], [35.4, 3770.0], [35.5, 3873.0], [35.6, 3876.0], [35.7, 3878.0], [35.8, 3880.0], [35.9, 3881.0], [36.0, 3882.0], [36.1, 3884.0], [36.2, 3887.0], [36.3, 3890.0], [36.4, 3891.0], [36.5, 3891.0], [36.6, 3894.0], [36.7, 3899.0], [36.8, 3913.0], [36.9, 3914.0], [37.0, 3925.0], [37.1, 3932.0], [37.2, 3951.0], [37.3, 3955.0], [37.4, 3969.0], [37.5, 3971.0], [37.6, 3972.0], [37.7, 3973.0], [37.8, 3976.0], [37.9, 3976.0], [38.0, 3978.0], [38.1, 3980.0], [38.2, 3981.0], [38.3, 3984.0], [38.4, 3985.0], [38.5, 3989.0], [38.6, 3990.0], [38.7, 3990.0], [38.8, 3990.0], [38.9, 3993.0], [39.0, 3993.0], [39.1, 3993.0], [39.2, 3994.0], [39.3, 3997.0], [39.4, 4000.0], [39.5, 4001.0], [39.6, 4004.0], [39.7, 4157.0], [39.8, 4182.0], [39.9, 4184.0], [40.0, 4187.0], [40.1, 4272.0], [40.2, 4689.0], [40.3, 4690.0], [40.4, 4691.0], [40.5, 4691.0], [40.6, 4691.0], [40.7, 4692.0], [40.8, 4693.0], [40.9, 4693.0], [41.0, 4722.0], [41.1, 4723.0], [41.2, 4724.0], [41.3, 4724.0], [41.4, 4725.0], [41.5, 4725.0], [41.6, 4726.0], [41.7, 4727.0], [41.8, 4728.0], [41.9, 4728.0], [42.0, 4729.0], [42.1, 5354.0], [42.2, 5719.0], [42.3, 6026.0], [42.4, 6031.0], [42.5, 6032.0], [42.6, 6034.0], [42.7, 6034.0], [42.8, 6034.0], [42.9, 6038.0], [43.0, 6401.0], [43.1, 6662.0], [43.2, 6663.0], [43.3, 6717.0], [43.4, 6719.0], [43.5, 6723.0], [43.6, 6724.0], [43.7, 6729.0], [43.8, 6730.0], [43.9, 6730.0], [44.0, 6731.0], [44.1, 6734.0], [44.2, 6817.0], [44.3, 6827.0], [44.4, 6832.0], [44.5, 6839.0], [44.6, 6936.0], [44.7, 6942.0], [44.8, 7564.0], [44.9, 8013.0], [45.0, 8294.0], [45.1, 8294.0], [45.2, 8295.0], [45.3, 8296.0], [45.4, 8296.0], [45.5, 8296.0], [45.6, 8297.0], [45.7, 8297.0], [45.8, 8298.0], [45.9, 8298.0], [46.0, 8298.0], [46.1, 8299.0], [46.2, 8299.0], [46.3, 8300.0], [46.4, 8300.0], [46.5, 8301.0], [46.6, 8301.0], [46.7, 8301.0], [46.8, 8301.0], [46.9, 8301.0], [47.0, 8302.0], [47.1, 8302.0], [47.2, 8302.0], [47.3, 8302.0], [47.4, 8303.0], [47.5, 8303.0], [47.6, 8303.0], [47.7, 8304.0], [47.8, 8304.0], [47.9, 8304.0], [48.0, 8304.0], [48.1, 8304.0], [48.2, 8304.0], [48.3, 8305.0], [48.4, 8305.0], [48.5, 8305.0], [48.6, 8305.0], [48.7, 8305.0], [48.8, 8305.0], [48.9, 8306.0], [49.0, 8306.0], [49.1, 8306.0], [49.2, 8306.0], [49.3, 8306.0], [49.4, 8306.0], [49.5, 8307.0], [49.6, 8307.0], [49.7, 8307.0], [49.8, 8307.0], [49.9, 8307.0], [50.0, 8308.0], [50.1, 8308.0], [50.2, 8308.0], [50.3, 8308.0], [50.4, 8308.0], [50.5, 8308.0], [50.6, 8309.0], [50.7, 8309.0], [50.8, 8309.0], [50.9, 8309.0], [51.0, 8310.0], [51.1, 8310.0], [51.2, 8310.0], [51.3, 8310.0], [51.4, 8310.0], [51.5, 8311.0], [51.6, 8311.0], [51.7, 8311.0], [51.8, 8312.0], [51.9, 8312.0], [52.0, 8312.0], [52.1, 8312.0], [52.2, 8313.0], [52.3, 8313.0], [52.4, 8313.0], [52.5, 8314.0], [52.6, 8314.0], [52.7, 8314.0], [52.8, 8315.0], [52.9, 8315.0], [53.0, 8315.0], [53.1, 8315.0], [53.2, 8315.0], [53.3, 8316.0], [53.4, 8316.0], [53.5, 8316.0], [53.6, 8316.0], [53.7, 8317.0], [53.8, 8317.0], [53.9, 8317.0], [54.0, 8317.0], [54.1, 8318.0], [54.2, 8318.0], [54.3, 8318.0], [54.4, 8318.0], [54.5, 8318.0], [54.6, 8319.0], [54.7, 8319.0], [54.8, 8319.0], [54.9, 8320.0], [55.0, 8320.0], [55.1, 8321.0], [55.2, 8321.0], [55.3, 8321.0], [55.4, 8321.0], [55.5, 8322.0], [55.6, 8322.0], [55.7, 8323.0], [55.8, 8323.0], [55.9, 8324.0], [56.0, 8324.0], [56.1, 8324.0], [56.2, 8325.0], [56.3, 8325.0], [56.4, 8325.0], [56.5, 8326.0], [56.6, 8326.0], [56.7, 8326.0], [56.8, 8327.0], [56.9, 8327.0], [57.0, 8327.0], [57.1, 8328.0], [57.2, 8330.0], [57.3, 8330.0], [57.4, 8330.0], [57.5, 8331.0], [57.6, 8347.0], [57.7, 8349.0], [57.8, 8394.0], [57.9, 8397.0], [58.0, 8399.0], [58.1, 8400.0], [58.2, 8549.0], [58.3, 8582.0], [58.4, 9092.0], [58.5, 9093.0], [58.6, 9093.0], [58.7, 9094.0], [58.8, 9095.0], [58.9, 9096.0], [59.0, 9097.0], [59.1, 9097.0], [59.2, 9097.0], [59.3, 9097.0], [59.4, 9097.0], [59.5, 9098.0], [59.6, 9098.0], [59.7, 9099.0], [59.8, 9099.0], [59.9, 9099.0], [60.0, 9099.0], [60.1, 9099.0], [60.2, 9100.0], [60.3, 9100.0], [60.4, 9100.0], [60.5, 9100.0], [60.6, 9101.0], [60.7, 9101.0], [60.8, 9101.0], [60.9, 9101.0], [61.0, 9102.0], [61.1, 9102.0], [61.2, 9102.0], [61.3, 9102.0], [61.4, 9102.0], [61.5, 9103.0], [61.6, 9103.0], [61.7, 9103.0], [61.8, 9103.0], [61.9, 9103.0], [62.0, 9103.0], [62.1, 9104.0], [62.2, 9104.0], [62.3, 9104.0], [62.4, 9104.0], [62.5, 9104.0], [62.6, 9104.0], [62.7, 9105.0], [62.8, 9105.0], [62.9, 9105.0], [63.0, 9105.0], [63.1, 9105.0], [63.2, 9105.0], [63.3, 9106.0], [63.4, 9106.0], [63.5, 9106.0], [63.6, 9106.0], [63.7, 9106.0], [63.8, 9106.0], [63.9, 9107.0], [64.0, 9107.0], [64.1, 9107.0], [64.2, 9107.0], [64.3, 9107.0], [64.4, 9107.0], [64.5, 9108.0], [64.6, 9108.0], [64.7, 9108.0], [64.8, 9108.0], [64.9, 9108.0], [65.0, 9109.0], [65.1, 9109.0], [65.2, 9109.0], [65.3, 9109.0], [65.4, 9109.0], [65.5, 9109.0], [65.6, 9110.0], [65.7, 9110.0], [65.8, 9110.0], [65.9, 9110.0], [66.0, 9110.0], [66.1, 9110.0], [66.2, 9111.0], [66.3, 9111.0], [66.4, 9111.0], [66.5, 9111.0], [66.6, 9112.0], [66.7, 9112.0], [66.8, 9112.0], [66.9, 9112.0], [67.0, 9112.0], [67.1, 9112.0], [67.2, 9112.0], [67.3, 9113.0], [67.4, 9113.0], [67.5, 9113.0], [67.6, 9113.0], [67.7, 9113.0], [67.8, 9114.0], [67.9, 9114.0], [68.0, 9114.0], [68.1, 9114.0], [68.2, 9114.0], [68.3, 9114.0], [68.4, 9115.0], [68.5, 9115.0], [68.6, 9115.0], [68.7, 9115.0], [68.8, 9115.0], [68.9, 9115.0], [69.0, 9116.0], [69.1, 9116.0], [69.2, 9116.0], [69.3, 9116.0], [69.4, 9116.0], [69.5, 9116.0], [69.6, 9117.0], [69.7, 9117.0], [69.8, 9117.0], [69.9, 9117.0], [70.0, 9117.0], [70.1, 9117.0], [70.2, 9117.0], [70.3, 9118.0], [70.4, 9118.0], [70.5, 9119.0], [70.6, 9119.0], [70.7, 9119.0], [70.8, 9120.0], [70.9, 9120.0], [71.0, 9120.0], [71.1, 9120.0], [71.2, 9121.0], [71.3, 9121.0], [71.4, 9122.0], [71.5, 9122.0], [71.6, 9123.0], [71.7, 9123.0], [71.8, 9124.0], [71.9, 9406.0], [72.0, 9407.0], [72.1, 9408.0], [72.2, 9409.0], [72.3, 9409.0], [72.4, 9410.0], [72.5, 9418.0], [72.6, 9420.0], [72.7, 9424.0], [72.8, 9991.0], [72.9, 9992.0], [73.0, 9992.0], [73.1, 9993.0], [73.2, 9993.0], [73.3, 9993.0], [73.4, 9994.0], [73.5, 9995.0], [73.6, 9995.0], [73.7, 9996.0], [73.8, 10014.0], [73.9, 10017.0], [74.0, 10233.0], [74.1, 10234.0], [74.2, 10234.0], [74.3, 10235.0], [74.4, 10235.0], [74.5, 10236.0], [74.6, 10236.0], [74.7, 10237.0], [74.8, 10237.0], [74.9, 10237.0], [75.0, 10238.0], [75.1, 10238.0], [75.2, 10240.0], [75.3, 10240.0], [75.4, 10242.0], [75.5, 10260.0], [75.6, 10333.0], [75.7, 10475.0], [75.8, 10477.0], [75.9, 10478.0], [76.0, 10480.0], [76.1, 10481.0], [76.2, 10482.0], [76.3, 10483.0], [76.4, 10484.0], [76.5, 10713.0], [76.6, 10714.0], [76.7, 10715.0], [76.8, 10715.0], [76.9, 10716.0], [77.0, 10717.0], [77.1, 10718.0], [77.2, 10718.0], [77.3, 10719.0], [77.4, 10720.0], [77.5, 10721.0], [77.6, 10721.0], [77.7, 10721.0], [77.8, 10722.0], [77.9, 10723.0], [78.0, 10723.0], [78.1, 10724.0], [78.2, 10725.0], [78.3, 10725.0], [78.4, 10725.0], [78.5, 10725.0], [78.6, 10726.0], [78.7, 10726.0], [78.8, 10726.0], [78.9, 10727.0], [79.0, 10728.0], [79.1, 10728.0], [79.2, 10728.0], [79.3, 10729.0], [79.4, 10730.0], [79.5, 10730.0], [79.6, 10730.0], [79.7, 10731.0], [79.8, 10732.0], [79.9, 10732.0], [80.0, 10733.0], [80.1, 10733.0], [80.2, 10733.0], [80.3, 10734.0], [80.4, 10811.0], [80.5, 10812.0], [80.6, 10815.0], [80.7, 10817.0], [80.8, 10825.0], [80.9, 11053.0], [81.0, 11066.0], [81.1, 11068.0], [81.2, 11719.0], [81.3, 11720.0], [81.4, 11721.0], [81.5, 11722.0], [81.6, 11722.0], [81.7, 11722.0], [81.8, 11723.0], [81.9, 11723.0], [82.0, 11724.0], [82.1, 11724.0], [82.2, 11724.0], [82.3, 11724.0], [82.4, 11724.0], [82.5, 11724.0], [82.6, 11725.0], [82.7, 11725.0], [82.8, 11725.0], [82.9, 11726.0], [83.0, 11726.0], [83.1, 11726.0], [83.2, 11726.0], [83.3, 11726.0], [83.4, 11727.0], [83.5, 11727.0], [83.6, 11727.0], [83.7, 11727.0], [83.8, 11728.0], [83.9, 11728.0], [84.0, 11728.0], [84.1, 11728.0], [84.2, 11728.0], [84.3, 11729.0], [84.4, 11729.0], [84.5, 11729.0], [84.6, 11729.0], [84.7, 11729.0], [84.8, 11729.0], [84.9, 11730.0], [85.0, 11730.0], [85.1, 11730.0], [85.2, 11730.0], [85.3, 11730.0], [85.4, 11731.0], [85.5, 11731.0], [85.6, 11731.0], [85.7, 11731.0], [85.8, 11731.0], [85.9, 11731.0], [86.0, 11732.0], [86.1, 11732.0], [86.2, 11732.0], [86.3, 11732.0], [86.4, 11732.0], [86.5, 11732.0], [86.6, 11733.0], [86.7, 11733.0], [86.8, 11733.0], [86.9, 11733.0], [87.0, 11733.0], [87.1, 11733.0], [87.2, 11734.0], [87.3, 11734.0], [87.4, 11734.0], [87.5, 11734.0], [87.6, 11734.0], [87.7, 11734.0], [87.8, 11734.0], [87.9, 11734.0], [88.0, 11735.0], [88.1, 11735.0], [88.2, 11735.0], [88.3, 11735.0], [88.4, 11735.0], [88.5, 11735.0], [88.6, 11735.0], [88.7, 11736.0], [88.8, 11736.0], [88.9, 11736.0], [89.0, 11736.0], [89.1, 11736.0], [89.2, 11736.0], [89.3, 11736.0], [89.4, 11737.0], [89.5, 11737.0], [89.6, 11737.0], [89.7, 11737.0], [89.8, 11737.0], [89.9, 11737.0], [90.0, 11738.0], [90.1, 11738.0], [90.2, 11738.0], [90.3, 11738.0], [90.4, 11738.0], [90.5, 11738.0], [90.6, 11739.0], [90.7, 11739.0], [90.8, 11739.0], [90.9, 11739.0], [91.0, 11739.0], [91.1, 11740.0], [91.2, 11740.0], [91.3, 11740.0], [91.4, 11740.0], [91.5, 11740.0], [91.6, 11740.0], [91.7, 11741.0], [91.8, 11741.0], [91.9, 11741.0], [92.0, 11741.0], [92.1, 11741.0], [92.2, 11741.0], [92.3, 11741.0], [92.4, 11741.0], [92.5, 11741.0], [92.6, 11742.0], [92.7, 11742.0], [92.8, 11742.0], [92.9, 11742.0], [93.0, 11742.0], [93.1, 11743.0], [93.2, 11743.0], [93.3, 11743.0], [93.4, 11743.0], [93.5, 11743.0], [93.6, 11744.0], [93.7, 11744.0], [93.8, 11744.0], [93.9, 11744.0], [94.0, 11745.0], [94.1, 11745.0], [94.2, 11745.0], [94.3, 11745.0], [94.4, 11745.0], [94.5, 11745.0], [94.6, 11746.0], [94.7, 11746.0], [94.8, 11746.0], [94.9, 11746.0], [95.0, 11747.0], [95.1, 11747.0], [95.2, 11747.0], [95.3, 11747.0], [95.4, 11747.0], [95.5, 11748.0], [95.6, 11748.0], [95.7, 11749.0], [95.8, 11749.0], [95.9, 11749.0], [96.0, 11749.0], [96.1, 11750.0], [96.2, 11750.0], [96.3, 11750.0], [96.4, 11751.0], [96.5, 11751.0], [96.6, 11751.0], [96.7, 11752.0], [96.8, 11752.0], [96.9, 11753.0], [97.0, 11753.0], [97.1, 11754.0], [97.2, 11755.0], [97.3, 11756.0], [97.4, 16201.0], [97.5, 16205.0], [97.6, 16208.0], [97.7, 16209.0], [97.8, 16210.0], [97.9, 16212.0], [98.0, 16213.0], [98.1, 16216.0], [98.2, 16217.0], [98.3, 16220.0], [98.4, 16223.0], [98.5, 16224.0], [98.6, 16224.0], [98.7, 16225.0], [98.8, 16227.0], [98.9, 16228.0], [99.0, 16230.0], [99.1, 16234.0], [99.2, 16235.0], [99.3, 16237.0], [99.4, 16238.0], [99.5, 16239.0], [99.6, 16240.0], [99.7, 16243.0], [99.8, 16244.0], [99.9, 16246.0], [100.0, 16248.0]], "isOverall": false, "label": "GET /", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 500.0, "series": [{"data": [[0.0, 112.0], [700.0, 1.0], [800.0, 4.0], [900.0, 26.0], [1000.0, 1.0], [1100.0, 48.0], [1200.0, 43.0], [1300.0, 22.0], [1400.0, 16.0], [1500.0, 72.0], [1600.0, 49.0], [1800.0, 55.0], [1900.0, 3.0], [2000.0, 40.0], [2100.0, 66.0], [2200.0, 42.0], [2300.0, 55.0], [2400.0, 100.0], [2500.0, 31.0], [2700.0, 63.0], [3000.0, 41.0], [3100.0, 1.0], [3200.0, 23.0], [3300.0, 66.0], [3400.0, 36.0], [3700.0, 12.0], [3800.0, 40.0], [3900.0, 81.0], [4000.0, 10.0], [4100.0, 13.0], [4200.0, 1.0], [4600.0, 26.0], [4700.0, 34.0], [5300.0, 3.0], [5500.0, 1.0], [5700.0, 1.0], [6000.0, 24.0], [6400.0, 1.0], [6600.0, 8.0], [6700.0, 28.0], [6800.0, 11.0], [6900.0, 6.0], [7000.0, 1.0], [7500.0, 2.0], [8000.0, 3.0], [8400.0, 3.0], [8300.0, 365.0], [8500.0, 5.0], [8600.0, 1.0], [8200.0, 39.0], [9100.0, 360.0], [9000.0, 57.0], [9400.0, 27.0], [10200.0, 49.0], [10100.0, 1.0], [9900.0, 29.0], [10000.0, 8.0], [9800.0, 1.0], [10400.0, 26.0], [10300.0, 1.0], [10700.0, 119.0], [11000.0, 9.0], [10800.0, 16.0], [11700.0, 500.0], [16200.0, 82.0], [100.0, 15.0], [200.0, 42.0], [300.0, 7.0]], "isOverall": false, "label": "GET /", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 161.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2747.0, "series": [{"data": [[0.0, 176.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 161.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2747.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 368.37363560033555, "minX": 1.7769288E12, "maxY": 500.0, "series": [{"data": [[1.7769288E12, 368.37363560033555], [1.77692886E12, 500.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77692886E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 33.66666666666667, "minX": 18.0, "maxY": 9411.962962962962, "series": [{"data": [[32.0, 81.92592592592592], [35.0, 116.5], [36.0, 73.85714285714285], [37.0, 82.5], [43.0, 261.0], [45.0, 236.5581395348837], [212.0, 1944.1818181818182], [211.0, 2077.8888888888887], [210.0, 1880.4], [208.0, 2117.1428571428573], [55.0, 199.0], [217.0, 1913.4482758620686], [18.0, 162.35294117647058], [19.0, 54.8], [21.0, 53.99999999999999], [22.0, 33.66666666666667], [90.0, 1306.050632911392], [23.0, 69.0], [408.0, 6755.243902439024], [26.0, 83.85714285714283], [27.0, 33.93749999999999], [460.0, 9411.962962962962], [116.0, 1089.0], [500.0, 7596.081686930091]], "isOverall": false, "label": "GET /", "isController": false}, {"data": [[449.1676394293124, 6777.192931258106]], "isOverall": false, "label": "GET /-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 500.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2580.5, "minX": 1.7769288E12, "maxY": 8045.25, "series": [{"data": [[1.7769288E12, 5061.75], [1.77692886E12, 8045.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7769288E12, 2580.5], [1.77692886E12, 4101.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77692886E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 3771.1570109152017, "minX": 1.7769288E12, "maxY": 8668.47068145801, "series": [{"data": [[1.7769288E12, 3771.1570109152017], [1.77692886E12, 8668.47068145801]], "isOverall": false, "label": "GET /", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77692886E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 3440.618807724606, "minX": 1.7769288E12, "maxY": 7978.061278394088, "series": [{"data": [[1.7769288E12, 3440.618807724606], [1.77692886E12, 7978.061278394088]], "isOverall": false, "label": "GET /", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77692886E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 467.1991547807713, "minX": 1.7769288E12, "maxY": 895.4382871536534, "series": [{"data": [[1.7769288E12, 895.4382871536534], [1.77692886E12, 467.1991547807713]], "isOverall": false, "label": "GET /", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77692886E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 8.0, "minX": 1.7769288E12, "maxY": 16248.0, "series": [{"data": [[1.7769288E12, 11068.0], [1.77692886E12, 16248.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7769288E12, 9994.0], [1.77692886E12, 11744.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7769288E12, 10824.08], [1.77692886E12, 16238.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7769288E12, 10240.0], [1.77692886E12, 11753.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7769288E12, 8.0], [1.77692886E12, 1136.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7769288E12, 2758.0], [1.77692886E12, 9107.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77692886E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 252.0, "minX": 1.0, "maxY": 16237.5, "series": [{"data": [[140.0, 10238.0], [146.0, 3973.5], [41.0, 6731.0], [40.0, 16213.0], [42.0, 16237.5], [49.0, 252.0], [237.0, 2765.0], [15.0, 6662.0], [1.0, 2156.0], [296.0, 2406.5], [80.0, 1569.0], [84.0, 1635.0], [104.0, 3913.0], [417.0, 9109.0], [27.0, 9409.0], [112.0, 1545.0], [127.0, 738.5], [499.0, 8315.0], [500.0, 11736.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 500.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 245.0, "minX": 1.0, "maxY": 15414.0, "series": [{"data": [[140.0, 9291.5], [146.0, 3825.5], [41.0, 5460.0], [40.0, 15401.0], [42.0, 15414.0], [49.0, 245.0], [237.0, 2349.0], [15.0, 5911.0], [1.0, 1862.0], [296.0, 2270.5], [80.0, 1462.0], [84.0, 1543.0], [104.0, 3283.0], [417.0, 8378.0], [27.0, 8551.0], [112.0, 1545.0], [127.0, 563.5], [499.0, 7275.0], [500.0, 11034.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 500.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 24.366666666666667, "minX": 1.7769288E12, "maxY": 27.033333333333335, "series": [{"data": [[1.7769288E12, 24.366666666666667], [1.77692886E12, 27.033333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77692886E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 19.85, "minX": 1.7769288E12, "maxY": 31.55, "series": [{"data": [[1.7769288E12, 19.85], [1.77692886E12, 31.55]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77692886E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 19.85, "minX": 1.7769288E12, "maxY": 31.55, "series": [{"data": [[1.7769288E12, 19.85], [1.77692886E12, 31.55]], "isOverall": false, "label": "GET /-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77692886E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 19.85, "minX": 1.7769288E12, "maxY": 31.55, "series": [{"data": [[1.7769288E12, 19.85], [1.77692886E12, 31.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77692886E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

