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
        data: {"result": {"minY": 3370.0, "minX": 0.0, "maxY": 26920.0, "series": [{"data": [[0.0, 3370.0], [0.1, 3371.0], [0.2, 3372.0], [0.3, 3372.0], [0.4, 3372.0], [0.5, 3372.0], [0.6, 3372.0], [0.7, 3372.0], [0.8, 3372.0], [0.9, 3373.0], [1.0, 3373.0], [1.1, 3373.0], [1.2, 3373.0], [1.3, 3373.0], [1.4, 3373.0], [1.5, 3373.0], [1.6, 3373.0], [1.7, 3373.0], [1.8, 3374.0], [1.9, 3374.0], [2.0, 3374.0], [2.1, 3374.0], [2.2, 3374.0], [2.3, 3375.0], [2.4, 3375.0], [2.5, 3375.0], [2.6, 3375.0], [2.7, 3375.0], [2.8, 3375.0], [2.9, 3375.0], [3.0, 3376.0], [3.1, 3376.0], [3.2, 3376.0], [3.3, 3376.0], [3.4, 3376.0], [3.5, 3377.0], [3.6, 3377.0], [3.7, 3377.0], [3.8, 3377.0], [3.9, 3378.0], [4.0, 3381.0], [4.1, 3383.0], [4.2, 3683.0], [4.3, 4482.0], [4.4, 4483.0], [4.5, 4484.0], [4.6, 4485.0], [4.7, 4486.0], [4.8, 4486.0], [4.9, 4486.0], [5.0, 4487.0], [5.1, 4488.0], [5.2, 4490.0], [5.3, 4491.0], [5.4, 4492.0], [5.5, 4494.0], [5.6, 4495.0], [5.7, 4496.0], [5.8, 4497.0], [5.9, 4498.0], [6.0, 4502.0], [6.1, 7554.0], [6.2, 7609.0], [6.3, 7611.0], [6.4, 7612.0], [6.5, 7613.0], [6.6, 7616.0], [6.7, 7758.0], [6.8, 7763.0], [6.9, 7765.0], [7.0, 7766.0], [7.1, 7771.0], [7.2, 8217.0], [7.3, 8219.0], [7.4, 8219.0], [7.5, 8219.0], [7.6, 8222.0], [7.7, 8232.0], [7.8, 8238.0], [7.9, 8238.0], [8.0, 8239.0], [8.1, 8239.0], [8.2, 8240.0], [8.3, 8241.0], [8.4, 8244.0], [8.5, 8245.0], [8.6, 8995.0], [8.7, 9104.0], [8.8, 9108.0], [8.9, 9108.0], [9.0, 9108.0], [9.1, 9109.0], [9.2, 9109.0], [9.3, 9110.0], [9.4, 9111.0], [9.5, 9111.0], [9.6, 9112.0], [9.7, 9112.0], [9.8, 9113.0], [9.9, 9113.0], [10.0, 9114.0], [10.1, 9114.0], [10.2, 9115.0], [10.3, 9116.0], [10.4, 9116.0], [10.5, 9117.0], [10.6, 9117.0], [10.7, 9118.0], [10.8, 9151.0], [10.9, 9153.0], [11.0, 9153.0], [11.1, 9154.0], [11.2, 9155.0], [11.3, 9162.0], [11.4, 9165.0], [11.5, 9196.0], [11.6, 9331.0], [11.7, 9336.0], [11.8, 9337.0], [11.9, 9339.0], [12.0, 9339.0], [12.1, 9340.0], [12.2, 9342.0], [12.3, 9342.0], [12.4, 9343.0], [12.5, 9344.0], [12.6, 9345.0], [12.7, 9345.0], [12.8, 9346.0], [12.9, 9347.0], [13.0, 9348.0], [13.1, 9349.0], [13.2, 9350.0], [13.3, 9351.0], [13.4, 9353.0], [13.5, 9365.0], [13.6, 9774.0], [13.7, 9774.0], [13.8, 9778.0], [13.9, 9782.0], [14.0, 9785.0], [14.1, 9786.0], [14.2, 9786.0], [14.3, 9786.0], [14.4, 9786.0], [14.5, 9787.0], [14.6, 9787.0], [14.7, 9787.0], [14.8, 9787.0], [14.9, 9787.0], [15.0, 9787.0], [15.1, 9788.0], [15.2, 9789.0], [15.3, 9789.0], [15.4, 9790.0], [15.5, 9790.0], [15.6, 9792.0], [15.7, 10609.0], [15.8, 10681.0], [15.9, 10904.0], [16.0, 10907.0], [16.1, 10910.0], [16.2, 10911.0], [16.3, 10911.0], [16.4, 10911.0], [16.5, 10914.0], [16.6, 11254.0], [16.7, 11932.0], [16.8, 11934.0], [16.9, 11934.0], [17.0, 11936.0], [17.1, 11937.0], [17.2, 11938.0], [17.3, 11939.0], [17.4, 11941.0], [17.5, 12036.0], [17.6, 12045.0], [17.7, 12047.0], [17.8, 12048.0], [17.9, 12324.0], [18.0, 13979.0], [18.1, 14128.0], [18.2, 14132.0], [18.3, 14134.0], [18.4, 14135.0], [18.5, 14140.0], [18.6, 14152.0], [18.7, 14207.0], [18.8, 14207.0], [18.9, 14209.0], [19.0, 14237.0], [19.1, 14262.0], [19.2, 14264.0], [19.3, 14266.0], [19.4, 14267.0], [19.5, 14269.0], [19.6, 14362.0], [19.7, 14364.0], [19.8, 14365.0], [19.9, 14366.0], [20.0, 14367.0], [20.1, 14368.0], [20.2, 14368.0], [20.3, 14369.0], [20.4, 14369.0], [20.5, 14370.0], [20.6, 14370.0], [20.7, 14371.0], [20.8, 14372.0], [20.9, 14372.0], [21.0, 14373.0], [21.1, 14373.0], [21.2, 14374.0], [21.3, 14374.0], [21.4, 14374.0], [21.5, 14375.0], [21.6, 14376.0], [21.7, 14376.0], [21.8, 14377.0], [21.9, 14378.0], [22.0, 14378.0], [22.1, 14380.0], [22.2, 14380.0], [22.3, 14381.0], [22.4, 14382.0], [22.5, 14383.0], [22.6, 14384.0], [22.7, 14387.0], [22.8, 14388.0], [22.9, 14390.0], [23.0, 14391.0], [23.1, 14392.0], [23.2, 14393.0], [23.3, 14394.0], [23.4, 14395.0], [23.5, 14396.0], [23.6, 14456.0], [23.7, 14459.0], [23.8, 14464.0], [23.9, 14465.0], [24.0, 14465.0], [24.1, 14467.0], [24.2, 14469.0], [24.3, 14477.0], [24.4, 14641.0], [24.5, 14643.0], [24.6, 14655.0], [24.7, 14669.0], [24.8, 14670.0], [24.9, 14673.0], [25.0, 14674.0], [25.1, 14677.0], [25.2, 14694.0], [25.3, 14695.0], [25.4, 14719.0], [25.5, 14725.0], [25.6, 14726.0], [25.7, 14727.0], [25.8, 14727.0], [25.9, 14728.0], [26.0, 14729.0], [26.1, 14729.0], [26.2, 14730.0], [26.3, 14730.0], [26.4, 14730.0], [26.5, 14730.0], [26.6, 14731.0], [26.7, 14731.0], [26.8, 14731.0], [26.9, 14732.0], [27.0, 14732.0], [27.1, 14732.0], [27.2, 14732.0], [27.3, 14732.0], [27.4, 14733.0], [27.5, 14733.0], [27.6, 14733.0], [27.7, 14733.0], [27.8, 14734.0], [27.9, 14734.0], [28.0, 14734.0], [28.1, 14736.0], [28.2, 14737.0], [28.3, 14740.0], [28.4, 14741.0], [28.5, 14742.0], [28.6, 14743.0], [28.7, 14744.0], [28.8, 14747.0], [28.9, 14752.0], [29.0, 14754.0], [29.1, 14758.0], [29.2, 14759.0], [29.3, 14762.0], [29.4, 14764.0], [29.5, 14765.0], [29.6, 14766.0], [29.7, 14768.0], [29.8, 14769.0], [29.9, 14771.0], [30.0, 14772.0], [30.1, 14774.0], [30.2, 14775.0], [30.3, 14776.0], [30.4, 14777.0], [30.5, 14777.0], [30.6, 14779.0], [30.7, 14779.0], [30.8, 14780.0], [30.9, 14781.0], [31.0, 14782.0], [31.1, 14783.0], [31.2, 14783.0], [31.3, 14783.0], [31.4, 14784.0], [31.5, 14784.0], [31.6, 14785.0], [31.7, 14786.0], [31.8, 14786.0], [31.9, 14787.0], [32.0, 14788.0], [32.1, 14789.0], [32.2, 14789.0], [32.3, 14789.0], [32.4, 14794.0], [32.5, 14797.0], [32.6, 14798.0], [32.7, 14799.0], [32.8, 14800.0], [32.9, 14803.0], [33.0, 14803.0], [33.1, 14804.0], [33.2, 14804.0], [33.3, 14804.0], [33.4, 14807.0], [33.5, 14808.0], [33.6, 14813.0], [33.7, 14826.0], [33.8, 14827.0], [33.9, 14835.0], [34.0, 14845.0], [34.1, 14854.0], [34.2, 14856.0], [34.3, 14858.0], [34.4, 14859.0], [34.5, 14859.0], [34.6, 14860.0], [34.7, 14861.0], [34.8, 14862.0], [34.9, 14863.0], [35.0, 14865.0], [35.1, 14865.0], [35.2, 14866.0], [35.3, 14867.0], [35.4, 14867.0], [35.5, 14868.0], [35.6, 14868.0], [35.7, 14870.0], [35.8, 14871.0], [35.9, 14871.0], [36.0, 14872.0], [36.1, 14873.0], [36.2, 14874.0], [36.3, 14876.0], [36.4, 14877.0], [36.5, 14883.0], [36.6, 14893.0], [36.7, 14895.0], [36.8, 14898.0], [36.9, 14900.0], [37.0, 14901.0], [37.1, 14903.0], [37.2, 14904.0], [37.3, 14905.0], [37.4, 14906.0], [37.5, 14908.0], [37.6, 14909.0], [37.7, 14909.0], [37.8, 14910.0], [37.9, 14911.0], [38.0, 14912.0], [38.1, 14913.0], [38.2, 14914.0], [38.3, 14915.0], [38.4, 14915.0], [38.5, 14916.0], [38.6, 14917.0], [38.7, 14918.0], [38.8, 14918.0], [38.9, 14918.0], [39.0, 14919.0], [39.1, 14919.0], [39.2, 14920.0], [39.3, 14920.0], [39.4, 14921.0], [39.5, 14921.0], [39.6, 14921.0], [39.7, 14922.0], [39.8, 14924.0], [39.9, 15028.0], [40.0, 15039.0], [40.1, 15055.0], [40.2, 15066.0], [40.3, 15078.0], [40.4, 15086.0], [40.5, 15090.0], [40.6, 15093.0], [40.7, 15096.0], [40.8, 15100.0], [40.9, 15116.0], [41.0, 15136.0], [41.1, 15269.0], [41.2, 15293.0], [41.3, 15295.0], [41.4, 15432.0], [41.5, 15448.0], [41.6, 15451.0], [41.7, 15456.0], [41.8, 15458.0], [41.9, 15467.0], [42.0, 15471.0], [42.1, 15486.0], [42.2, 15490.0], [42.3, 15499.0], [42.4, 15507.0], [42.5, 15509.0], [42.6, 15512.0], [42.7, 15515.0], [42.8, 15515.0], [42.9, 15516.0], [43.0, 15521.0], [43.1, 16875.0], [43.2, 16897.0], [43.3, 16898.0], [43.4, 16901.0], [43.5, 16902.0], [43.6, 16902.0], [43.7, 16903.0], [43.8, 16903.0], [43.9, 16904.0], [44.0, 16905.0], [44.1, 17315.0], [44.2, 17326.0], [44.3, 17332.0], [44.4, 17335.0], [44.5, 17340.0], [44.6, 17343.0], [44.7, 17351.0], [44.8, 17352.0], [44.9, 17354.0], [45.0, 17357.0], [45.1, 17361.0], [45.2, 17362.0], [45.3, 17364.0], [45.4, 17366.0], [45.5, 17367.0], [45.6, 17369.0], [45.7, 17371.0], [45.8, 17373.0], [45.9, 17375.0], [46.0, 17378.0], [46.1, 17379.0], [46.2, 17380.0], [46.3, 17381.0], [46.4, 17383.0], [46.5, 17385.0], [46.6, 17385.0], [46.7, 17388.0], [46.8, 17390.0], [46.9, 17391.0], [47.0, 17392.0], [47.1, 17393.0], [47.2, 17396.0], [47.3, 17397.0], [47.4, 17399.0], [47.5, 17402.0], [47.6, 17404.0], [47.7, 17408.0], [47.8, 17418.0], [47.9, 17424.0], [48.0, 17438.0], [48.1, 17444.0], [48.2, 17447.0], [48.3, 17451.0], [48.4, 17453.0], [48.5, 17459.0], [48.6, 17464.0], [48.7, 17469.0], [48.8, 17472.0], [48.9, 17474.0], [49.0, 17481.0], [49.1, 17483.0], [49.2, 17484.0], [49.3, 17487.0], [49.4, 17489.0], [49.5, 17497.0], [49.6, 17501.0], [49.7, 17503.0], [49.8, 17509.0], [49.9, 17526.0], [50.0, 17866.0], [50.1, 17870.0], [50.2, 17871.0], [50.3, 17875.0], [50.4, 17877.0], [50.5, 17879.0], [50.6, 17883.0], [50.7, 17885.0], [50.8, 17888.0], [50.9, 17889.0], [51.0, 17891.0], [51.1, 17892.0], [51.2, 17892.0], [51.3, 17894.0], [51.4, 17895.0], [51.5, 17898.0], [51.6, 17898.0], [51.7, 17900.0], [51.8, 17902.0], [51.9, 17902.0], [52.0, 17905.0], [52.1, 17906.0], [52.2, 17908.0], [52.3, 17910.0], [52.4, 17912.0], [52.5, 17916.0], [52.6, 17920.0], [52.7, 17927.0], [52.8, 17932.0], [52.9, 17938.0], [53.0, 18081.0], [53.1, 18083.0], [53.2, 18086.0], [53.3, 18089.0], [53.4, 18095.0], [53.5, 18097.0], [53.6, 18103.0], [53.7, 18109.0], [53.8, 18111.0], [53.9, 18470.0], [54.0, 19328.0], [54.1, 19332.0], [54.2, 19333.0], [54.3, 19334.0], [54.4, 19335.0], [54.5, 19335.0], [54.6, 19336.0], [54.7, 19337.0], [54.8, 19338.0], [54.9, 19338.0], [55.0, 19338.0], [55.1, 19339.0], [55.2, 19339.0], [55.3, 19339.0], [55.4, 19340.0], [55.5, 19340.0], [55.6, 19340.0], [55.7, 19341.0], [55.8, 19341.0], [55.9, 19341.0], [56.0, 19341.0], [56.1, 19341.0], [56.2, 19342.0], [56.3, 19342.0], [56.4, 19342.0], [56.5, 19343.0], [56.6, 19343.0], [56.7, 19343.0], [56.8, 19344.0], [56.9, 19344.0], [57.0, 19344.0], [57.1, 19345.0], [57.2, 19345.0], [57.3, 19345.0], [57.4, 19346.0], [57.5, 19346.0], [57.6, 19346.0], [57.7, 19347.0], [57.8, 19347.0], [57.9, 19347.0], [58.0, 19348.0], [58.1, 19348.0], [58.2, 19348.0], [58.3, 19349.0], [58.4, 19350.0], [58.5, 19351.0], [58.6, 19351.0], [58.7, 19351.0], [58.8, 19352.0], [58.9, 19354.0], [59.0, 19354.0], [59.1, 19355.0], [59.2, 19358.0], [59.3, 19360.0], [59.4, 19361.0], [59.5, 21934.0], [59.6, 21936.0], [59.7, 21936.0], [59.8, 21938.0], [59.9, 21938.0], [60.0, 21939.0], [60.1, 21940.0], [60.2, 21941.0], [60.3, 21941.0], [60.4, 21942.0], [60.5, 21942.0], [60.6, 21943.0], [60.7, 21944.0], [60.8, 21944.0], [60.9, 21944.0], [61.0, 21944.0], [61.1, 21945.0], [61.2, 21946.0], [61.3, 21949.0], [61.4, 21950.0], [61.5, 21955.0], [61.6, 21961.0], [61.7, 22949.0], [61.8, 22951.0], [61.9, 22951.0], [62.0, 22952.0], [62.1, 22953.0], [62.2, 22953.0], [62.3, 22955.0], [62.4, 22956.0], [62.5, 22957.0], [62.6, 22958.0], [62.7, 22959.0], [62.8, 22959.0], [62.9, 22960.0], [63.0, 22961.0], [63.1, 22962.0], [63.2, 22963.0], [63.3, 22963.0], [63.4, 22965.0], [63.5, 22965.0], [63.6, 22966.0], [63.7, 22968.0], [63.8, 22971.0], [63.9, 22972.0], [64.0, 22975.0], [64.1, 22978.0], [64.2, 22983.0], [64.3, 22984.0], [64.4, 22985.0], [64.5, 22986.0], [64.6, 22986.0], [64.7, 22986.0], [64.8, 22986.0], [64.9, 22987.0], [65.0, 22988.0], [65.1, 22988.0], [65.2, 22989.0], [65.3, 22990.0], [65.4, 22990.0], [65.5, 22991.0], [65.6, 22991.0], [65.7, 22993.0], [65.8, 22994.0], [65.9, 22994.0], [66.0, 22994.0], [66.1, 22995.0], [66.2, 22996.0], [66.3, 22996.0], [66.4, 22996.0], [66.5, 22997.0], [66.6, 22997.0], [66.7, 22998.0], [66.8, 22998.0], [66.9, 22998.0], [67.0, 22999.0], [67.1, 22999.0], [67.2, 23000.0], [67.3, 23001.0], [67.4, 23001.0], [67.5, 23001.0], [67.6, 23002.0], [67.7, 23003.0], [67.8, 23004.0], [67.9, 23005.0], [68.0, 23005.0], [68.1, 23006.0], [68.2, 23007.0], [68.3, 23008.0], [68.4, 23852.0], [68.5, 23854.0], [68.6, 23857.0], [68.7, 23862.0], [68.8, 23866.0], [68.9, 23869.0], [69.0, 23877.0], [69.1, 24022.0], [69.2, 24640.0], [69.3, 24643.0], [69.4, 24644.0], [69.5, 24644.0], [69.6, 24645.0], [69.7, 24645.0], [69.8, 24646.0], [69.9, 24646.0], [70.0, 24646.0], [70.1, 24647.0], [70.2, 24647.0], [70.3, 24648.0], [70.4, 24649.0], [70.5, 24649.0], [70.6, 24650.0], [70.7, 24650.0], [70.8, 24651.0], [70.9, 24651.0], [71.0, 24651.0], [71.1, 24652.0], [71.2, 24653.0], [71.3, 24654.0], [71.4, 24655.0], [71.5, 24655.0], [71.6, 24655.0], [71.7, 24655.0], [71.8, 24656.0], [71.9, 24657.0], [72.0, 24657.0], [72.1, 24659.0], [72.2, 24660.0], [72.3, 24661.0], [72.4, 24662.0], [72.5, 24664.0], [72.6, 24669.0], [72.7, 24670.0], [72.8, 24670.0], [72.9, 24675.0], [73.0, 24966.0], [73.1, 24968.0], [73.2, 24969.0], [73.3, 24972.0], [73.4, 24972.0], [73.5, 24974.0], [73.6, 24975.0], [73.7, 24976.0], [73.8, 24977.0], [73.9, 24978.0], [74.0, 24980.0], [74.1, 24980.0], [74.2, 24981.0], [74.3, 24983.0], [74.4, 24985.0], [74.5, 24986.0], [74.6, 24987.0], [74.7, 24988.0], [74.8, 24990.0], [74.9, 24991.0], [75.0, 24992.0], [75.1, 24993.0], [75.2, 24996.0], [75.3, 24997.0], [75.4, 25002.0], [75.5, 25006.0], [75.6, 25478.0], [75.7, 25480.0], [75.8, 25481.0], [75.9, 25483.0], [76.0, 25484.0], [76.1, 25484.0], [76.2, 25485.0], [76.3, 25485.0], [76.4, 25486.0], [76.5, 25487.0], [76.6, 25488.0], [76.7, 25488.0], [76.8, 25489.0], [76.9, 25490.0], [77.0, 25491.0], [77.1, 25491.0], [77.2, 25492.0], [77.3, 25493.0], [77.4, 25493.0], [77.5, 25494.0], [77.6, 25495.0], [77.7, 25496.0], [77.8, 25496.0], [77.9, 25498.0], [78.0, 25498.0], [78.1, 25498.0], [78.2, 25499.0], [78.3, 25500.0], [78.4, 25501.0], [78.5, 25501.0], [78.6, 25502.0], [78.7, 25502.0], [78.8, 25502.0], [78.9, 25503.0], [79.0, 25503.0], [79.1, 25503.0], [79.2, 25504.0], [79.3, 25504.0], [79.4, 25504.0], [79.5, 25505.0], [79.6, 25505.0], [79.7, 25505.0], [79.8, 25506.0], [79.9, 25506.0], [80.0, 25506.0], [80.1, 25507.0], [80.2, 25507.0], [80.3, 25507.0], [80.4, 25507.0], [80.5, 25507.0], [80.6, 25508.0], [80.7, 25508.0], [80.8, 25508.0], [80.9, 25508.0], [81.0, 25509.0], [81.1, 25509.0], [81.2, 25509.0], [81.3, 25510.0], [81.4, 25510.0], [81.5, 25510.0], [81.6, 25510.0], [81.7, 25511.0], [81.8, 25511.0], [81.9, 25511.0], [82.0, 25511.0], [82.1, 25512.0], [82.2, 25512.0], [82.3, 25513.0], [82.4, 25513.0], [82.5, 25513.0], [82.6, 25513.0], [82.7, 25513.0], [82.8, 25514.0], [82.9, 25514.0], [83.0, 25514.0], [83.1, 25514.0], [83.2, 25515.0], [83.3, 25515.0], [83.4, 25515.0], [83.5, 25515.0], [83.6, 25515.0], [83.7, 25516.0], [83.8, 25516.0], [83.9, 25516.0], [84.0, 25516.0], [84.1, 25517.0], [84.2, 25517.0], [84.3, 25517.0], [84.4, 25518.0], [84.5, 25518.0], [84.6, 25518.0], [84.7, 25518.0], [84.8, 25519.0], [84.9, 25520.0], [85.0, 25520.0], [85.1, 25520.0], [85.2, 25521.0], [85.3, 25521.0], [85.4, 25521.0], [85.5, 25522.0], [85.6, 25522.0], [85.7, 25523.0], [85.8, 25523.0], [85.9, 25523.0], [86.0, 25524.0], [86.1, 25524.0], [86.2, 25525.0], [86.3, 25525.0], [86.4, 25526.0], [86.5, 25527.0], [86.6, 25527.0], [86.7, 25527.0], [86.8, 25528.0], [86.9, 25528.0], [87.0, 25529.0], [87.1, 25530.0], [87.2, 25532.0], [87.3, 25532.0], [87.4, 25534.0], [87.5, 25539.0], [87.6, 25862.0], [87.7, 25863.0], [87.8, 25864.0], [87.9, 25864.0], [88.0, 25866.0], [88.1, 25866.0], [88.2, 25867.0], [88.3, 25870.0], [88.4, 25871.0], [88.5, 25873.0], [88.6, 25886.0], [88.7, 25889.0], [88.8, 25890.0], [88.9, 25890.0], [89.0, 25891.0], [89.1, 25891.0], [89.2, 25892.0], [89.3, 25892.0], [89.4, 25892.0], [89.5, 25892.0], [89.6, 25893.0], [89.7, 25893.0], [89.8, 25894.0], [89.9, 25894.0], [90.0, 25895.0], [90.1, 25896.0], [90.2, 25897.0], [90.3, 25898.0], [90.4, 25898.0], [90.5, 25899.0], [90.6, 26369.0], [90.7, 26373.0], [90.8, 26375.0], [90.9, 26376.0], [91.0, 26377.0], [91.1, 26379.0], [91.2, 26380.0], [91.3, 26380.0], [91.4, 26381.0], [91.5, 26381.0], [91.6, 26382.0], [91.7, 26382.0], [91.8, 26383.0], [91.9, 26383.0], [92.0, 26384.0], [92.1, 26384.0], [92.2, 26385.0], [92.3, 26385.0], [92.4, 26386.0], [92.5, 26386.0], [92.6, 26387.0], [92.7, 26388.0], [92.8, 26388.0], [92.9, 26389.0], [93.0, 26389.0], [93.1, 26390.0], [93.2, 26390.0], [93.3, 26390.0], [93.4, 26391.0], [93.5, 26391.0], [93.6, 26392.0], [93.7, 26392.0], [93.8, 26394.0], [93.9, 26394.0], [94.0, 26395.0], [94.1, 26395.0], [94.2, 26396.0], [94.3, 26396.0], [94.4, 26397.0], [94.5, 26397.0], [94.6, 26398.0], [94.7, 26398.0], [94.8, 26399.0], [94.9, 26399.0], [95.0, 26399.0], [95.1, 26399.0], [95.2, 26400.0], [95.3, 26400.0], [95.4, 26401.0], [95.5, 26401.0], [95.6, 26401.0], [95.7, 26401.0], [95.8, 26402.0], [95.9, 26403.0], [96.0, 26403.0], [96.1, 26403.0], [96.2, 26404.0], [96.3, 26405.0], [96.4, 26405.0], [96.5, 26406.0], [96.6, 26407.0], [96.7, 26408.0], [96.8, 26409.0], [96.9, 26409.0], [97.0, 26410.0], [97.1, 26410.0], [97.2, 26410.0], [97.3, 26410.0], [97.4, 26411.0], [97.5, 26412.0], [97.6, 26413.0], [97.7, 26413.0], [97.8, 26414.0], [97.9, 26415.0], [98.0, 26415.0], [98.1, 26416.0], [98.2, 26417.0], [98.3, 26417.0], [98.4, 26418.0], [98.5, 26420.0], [98.6, 26421.0], [98.7, 26422.0], [98.8, 26424.0], [98.9, 26424.0], [99.0, 26425.0], [99.1, 26426.0], [99.2, 26428.0], [99.3, 26433.0], [99.4, 26437.0], [99.5, 26867.0], [99.6, 26873.0], [99.7, 26876.0], [99.8, 26880.0], [99.9, 26891.0], [100.0, 26920.0]], "isOverall": false, "label": "GET /", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 3300.0, "maxY": 297.0, "series": [{"data": [[3300.0, 134.0], [3600.0, 3.0], [4400.0, 53.0], [4500.0, 4.0], [7500.0, 4.0], [7600.0, 16.0], [7700.0, 14.0], [8200.0, 46.0], [9100.0, 93.0], [8900.0, 1.0], [9700.0, 69.0], [9300.0, 64.0], [10600.0, 4.0], [10900.0, 22.0], [10800.0, 1.0], [11200.0, 3.0], [11900.0, 25.0], [12000.0, 14.0], [12300.0, 2.0], [13600.0, 2.0], [14200.0, 28.0], [14000.0, 1.0], [13900.0, 2.0], [14100.0, 20.0], [14300.0, 128.0], [14700.0, 235.0], [14400.0, 24.0], [14600.0, 32.0], [14800.0, 132.0], [14500.0, 1.0], [14900.0, 96.0], [15000.0, 29.0], [15100.0, 8.0], [15200.0, 11.0], [15500.0, 24.0], [15400.0, 31.0], [16800.0, 9.0], [16900.0, 21.0], [17300.0, 110.0], [17400.0, 68.0], [18400.0, 1.0], [18000.0, 19.0], [17900.0, 40.0], [17800.0, 55.0], [17500.0, 12.0], [18100.0, 12.0], [18700.0, 1.0], [19300.0, 176.0], [21500.0, 1.0], [22400.0, 1.0], [21900.0, 68.0], [23400.0, 1.0], [22900.0, 175.0], [23000.0, 39.0], [23800.0, 20.0], [23900.0, 2.0], [24000.0, 2.0], [25500.0, 297.0], [24900.0, 76.0], [25400.0, 84.0], [25000.0, 8.0], [25200.0, 1.0], [24600.0, 121.0], [25800.0, 98.0], [26300.0, 146.0], [26400.0, 137.0], [26800.0, 17.0], [26900.0, 1.0]], "isOverall": false, "label": "GET /", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 26900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3195.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3195.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3195.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 403.23958333333337, "minX": 1.77692916E12, "maxY": 884.9218626677197, "series": [{"data": [[1.77692922E12, 884.9218626677197], [1.77692928E12, 761.0265544041448], [1.77692916E12, 403.23958333333337]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77692928E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3374.5895522388064, "minX": 321.0, "maxY": 25384.039215686284, "series": [{"data": [[522.0, 12017.28571428571], [640.0, 12318.0], [321.0, 3374.5895522388064], [402.0, 10325.842931937179], [877.0, 25384.039215686284], [878.0, 21303.38418079098], [894.0, 15723.182758620695], [911.0, 22078.451127819546], [1021.0, 19344.03977272728], [511.0, 19501.356097560983]], "isOverall": false, "label": "GET /", "isController": false}, {"data": [[767.1564945226916, 18170.339280125205]], "isOverall": false, "label": "GET /-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1021.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 832.0, "minX": 1.77692916E12, "maxY": 6562.0, "series": [{"data": [[1.77692922E12, 5384.75], [1.77692928E12, 6562.0], [1.77692916E12, 1632.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77692922E12, 2745.1666666666665], [1.77692928E12, 3345.3333333333335], [1.77692916E12, 832.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77692928E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 10336.218750000005, "minX": 1.77692916E12, "maxY": 20391.479873717446, "series": [{"data": [[1.77692922E12, 20391.479873717446], [1.77692928E12, 18296.062823834214], [1.77692916E12, 10336.218750000005]], "isOverall": false, "label": "GET /", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77692928E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 7710.156250000001, "minX": 1.77692916E12, "maxY": 18724.038674033152, "series": [{"data": [[1.77692922E12, 18724.038674033152], [1.77692928E12, 17364.78303108807], [1.77692916E12, 7710.156250000001]], "isOverall": false, "label": "GET /", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77692928E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2789.0755208333317, "minX": 1.77692916E12, "maxY": 7140.298575129542, "series": [{"data": [[1.77692922E12, 4423.498816101029], [1.77692928E12, 7140.298575129542], [1.77692916E12, 2789.0755208333317]], "isOverall": false, "label": "GET /", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77692928E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3370.0, "minX": 1.77692916E12, "maxY": 26920.0, "series": [{"data": [[1.77692922E12, 26920.0], [1.77692928E12, 26438.0], [1.77692916E12, 14736.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77692922E12, 25531.2], [1.77692928E12, 26398.0], [1.77692916E12, 14732.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77692922E12, 26873.64], [1.77692928E12, 26424.55], [1.77692916E12, 14735.15]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77692922E12, 25891.6], [1.77692928E12, 26410.0], [1.77692916E12, 14733.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77692922E12, 14128.0], [1.77692928E12, 3370.0], [1.77692916E12, 3683.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77692922E12, 21944.0], [1.77692928E12, 19336.5], [1.77692916E12, 9118.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77692928E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3374.0, "minX": 1.0, "maxY": 25507.0, "series": [{"data": [[2.0, 12318.0], [133.0, 21935.0], [135.0, 24651.0], [134.0, 3374.0], [142.0, 14374.0], [176.0, 19344.0], [798.0, 22986.0], [256.0, 12036.0], [1.0, 18720.0], [70.0, 9787.0], [89.0, 9340.0], [447.0, 14806.0], [126.0, 7561.0], [510.0, 25507.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 798.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3282.0, "minX": 1.0, "maxY": 23584.0, "series": [{"data": [[2.0, 11048.5], [133.0, 21225.0], [135.0, 23584.0], [134.0, 3282.0], [142.0, 13331.5], [176.0, 18410.0], [798.0, 20350.0], [256.0, 8309.5], [1.0, 17125.0], [70.0, 9573.0], [89.0, 9186.0], [447.0, 12812.0], [126.0, 7249.5], [510.0, 23427.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 798.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 14.9, "minX": 1.77692916E12, "maxY": 19.383333333333333, "series": [{"data": [[1.77692922E12, 18.966666666666665], [1.77692928E12, 19.383333333333333], [1.77692916E12, 14.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77692928E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.4, "minX": 1.77692916E12, "maxY": 25.733333333333334, "series": [{"data": [[1.77692922E12, 21.116666666666667], [1.77692928E12, 25.733333333333334], [1.77692916E12, 6.4]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77692928E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.4, "minX": 1.77692916E12, "maxY": 25.733333333333334, "series": [{"data": [[1.77692922E12, 21.116666666666667], [1.77692928E12, 25.733333333333334], [1.77692916E12, 6.4]], "isOverall": false, "label": "GET /-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77692928E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.4, "minX": 1.77692916E12, "maxY": 25.733333333333334, "series": [{"data": [[1.77692922E12, 21.116666666666667], [1.77692928E12, 25.733333333333334], [1.77692916E12, 6.4]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77692928E12, "title": "Total Transactions Per Second"}},
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

