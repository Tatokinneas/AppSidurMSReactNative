import React, { useState } from "react";
/* import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"; */
import Carousel from "../Components/CarouselNuevo";

//import logo from "../assets/Logo MS.png";
import birkatHashajar1 from "../assets/Photos/SIDUR-001.png";
import birkatHashajar2 from "../assets/Photos/SIDUR-002.png";
import birkatHashajar3 from "../assets/Photos/SIDUR-003.png";
import birkatHashajar4 from "../assets/Photos/SIDUR-004.png";
import birkatHashajar5 from "../assets/Photos/SIDUR-005.png";
import birkatHashajar6 from "../assets/Photos/SIDUR-006.png";
import birkatHashajar7 from "../assets/Photos/SIDUR-007.png";
import birkatHashajar8 from "../assets/Photos/SIDUR-008.png";
import birkatHashajar9 from "../assets/Photos/SIDUR-009.png";
import birkatHashajar10 from "../assets/Photos/SIDUR-010.png";
import birkatHashajar11 from "../assets/Photos/SIDUR-011.png";
import birkatHashajar12 from "../assets/Photos/SIDUR-012.png";
import birkatHashajar13 from "../assets/Photos/SIDUR-013.png";
import birkatHashajar14 from "../assets/Photos/SIDUR-014.png";
import birkatHashajar15 from "../assets/Photos/SIDUR-015.png";
import birkatHashajar16 from "../assets/Photos/SIDUR-016.png";
import birkatHashajar17 from "../assets/Photos/SIDUR-017.png";
import birkatHashajar18 from "../assets/Photos/SIDUR-018.png";
import birkatHashajar19 from "../assets/Photos/SIDUR-019.png";
import birkatHashajar20 from "../assets/Photos/SIDUR-020.png";
import birkatHashajar21 from "../assets/Photos/SIDUR-021.png";
import birkatHashajar22 from "../assets/Photos/SIDUR-022.png";
import birkatHashajar23 from "../assets/Photos/SIDUR-023.png";
import birkatHashajar24 from "../assets/Photos/SIDUR-024.png";
import birkatHashajar25 from "../assets/Photos/SIDUR-025.png";
import birkatHashajar26 from "../assets/Photos/SIDUR-026.png";
import birkatHashajar27 from "../assets/Photos/SIDUR-027.png";
import birkatHashajar28 from "../assets/Photos/SIDUR-028.png";
import birkatHashajar29 from "../assets/Photos/SIDUR-029.png";
import birkatHashajar30 from "../assets/Photos/SIDUR-030.png";
import birkatHashajar31 from "../assets/Photos/SIDUR-031.png";
import birkatHashajar32 from "../assets/Photos/SIDUR-032.png";
import birkatHashajar33 from "../assets/Photos/SIDUR-033.png";
import birkatHashajar34 from "../assets/Photos/SIDUR-034.png";
import birkatHashajar35 from "../assets/Photos/SIDUR-035.png";
import birkatHashajar36 from "../assets/Photos/SIDUR-036.png";
import birkatHashajar37 from "../assets/Photos/SIDUR-037.png";
import birkatHashajar38 from "../assets/Photos/SIDUR-038.png";
import birkatHashajar39 from "../assets/Photos/SIDUR-039.png";
import birkatHashajar40 from "../assets/Photos/SIDUR-040.png";
import birkatHashajar41 from "../assets/Photos/SIDUR-041.png";
import birkatHashajar42 from "../assets/Photos/SIDUR-042.png";
import birkatHashajar43 from "../assets/Photos/SIDUR-043.png";
import birkatHashajar44 from "../assets/Photos/SIDUR-044.png";
import birkatHashajar45 from "../assets/Photos/SIDUR-045.png";
import kadeshLi1 from "../assets/Photos/SIDUR-046.png";
import kadeshLi2 from "../assets/Photos/SIDUR-047.png";
import kadeshLi3 from "../assets/Photos/SIDUR-048.png";
import kadeshLi4 from "../assets/Photos/SIDUR-049.png";
import kadeshLi5 from "../assets/Photos/SIDUR-050.png";
import kadeshLi6 from "../assets/Photos/SIDUR-051.png";
import kadeshLi7 from "../assets/Photos/SIDUR-052.png";
import kadeshLi8 from "../assets/Photos/SIDUR-053.png";
import Ashre1 from "../assets/Photos/SIDUR-054.png";
import Ashre2 from "../assets/Photos/SIDUR-055.png";
import Ashre3 from "../assets/Photos/SIDUR-056.png";
import Ashre4 from "../assets/Photos/SIDUR-057.png";
import Ashre5 from "../assets/Photos/SIDUR-058.png";
import Ashre6 from "../assets/Photos/SIDUR-059.png";
import Ashre7 from "../assets/Photos/SIDUR-060.png";
import Ashre8 from "../assets/Photos/SIDUR-061.png";
import Ashre9 from "../assets/Photos/SIDUR-062.png";
import Ishtabaj1 from "../assets/Photos/SIDUR-063.png";
import Ishtabaj2 from "../assets/Photos/SIDUR-064.png";
import Ishtabaj3 from "../assets/Photos/SIDUR-065.png";
import Ishtabaj4 from "../assets/Photos/SIDUR-066.png";
import Ishtabaj5 from "../assets/Photos/SIDUR-067.png";
import {
  default as Ishtabaj6,
  default as Shema1,
} from "../assets/Photos/SIDUR-068.png";
import Shema2 from "../assets/Photos/SIDUR-069.png";
import Shema3 from "../assets/Photos/SIDUR-070.png";
import Shema4 from "../assets/Photos/SIDUR-071.png";
import Shema5 from "../assets/Photos/SIDUR-072.png";
import Amida0 from "../assets/Photos/SIDUR-073.png";
import Amida1 from "../assets/Photos/SIDUR-074.png";
import Amida2 from "../assets/Photos/SIDUR-075.png";
import Amida3 from "../assets/Photos/SIDUR-076.png";
import Amida4 from "../assets/Photos/SIDUR-077.png";
import Amida5 from "../assets/Photos/SIDUR-078.png";
import Amida6 from "../assets/Photos/SIDUR-079.png";
import Amida7 from "../assets/Photos/SIDUR-080.png";
import Amida8 from "../assets/Photos/SIDUR-081.png";
import Amida9 from "../assets/Photos/SIDUR-082.png";
import Amida10 from "../assets/Photos/SIDUR-083.png";
import Amida11 from "../assets/Photos/SIDUR-084.png";
import Amida12 from "../assets/Photos/SIDUR-085.png";
import Amida13 from "../assets/Photos/SIDUR-086.png";
import Amida14 from "../assets/Photos/SIDUR-087.png";
import Amida15 from "../assets/Photos/SIDUR-088.png";
import Amida16 from "../assets/Photos/SIDUR-089.png";
import Amida17 from "../assets/Photos/SIDUR-090.png";
import Amida18 from "../assets/Photos/SIDUR-091.png";
import Amida19 from "../assets/Photos/SIDUR-092.png";
import Amida20 from "../assets/Photos/SIDUR-093.png";
import Amida21 from "../assets/Photos/SIDUR-094.png";
import Amida22 from "../assets/Photos/SIDUR-095.png";
import Amida23 from "../assets/Photos/SIDUR-096.png";
import Amida24 from "../assets/Photos/SIDUR-097.png";
import Amida25 from "../assets/Photos/SIDUR-098.png";
import Amida26 from "../assets/Photos/SIDUR-099.png";
import Amida27 from "../assets/Photos/SIDUR-100.png";
import Amida28 from "../assets/Photos/SIDUR-101.png";
import Amida29 from "../assets/Photos/SIDUR-102.png";
import Amida30 from "../assets/Photos/SIDUR-103.png";
import Amida31 from "../assets/Photos/SIDUR-104.png";
import Amida32 from "../assets/Photos/SIDUR-105.png";
import Amida33 from "../assets/Photos/SIDUR-106.png";
import Amida34 from "../assets/Photos/SIDUR-107.png";
import Amida35 from "../assets/Photos/SIDUR-108.png";
import Amida36 from "../assets/Photos/SIDUR-109.png";
import Amida37 from "../assets/Photos/SIDUR-110.png";
import Amida38 from "../assets/Photos/SIDUR-111.png";
import Amida39 from "../assets/Photos/SIDUR-112.png";
import Amida40 from "../assets/Photos/SIDUR-113.png";
import Amida41 from "../assets/Photos/SIDUR-114.png";
import Amida42 from "../assets/Photos/SIDUR-115.png";
import Amida43 from "../assets/Photos/SIDUR-116.png";
import Amida44 from "../assets/Photos/SIDUR-117.png";
import Amida45 from "../assets/Photos/SIDUR-118.png";
import Amida46 from "../assets/Photos/SIDUR-119.png";
import Amida47 from "../assets/Photos/SIDUR-120.png";
import Amida48 from "../assets/Photos/SIDUR-121.png";
import Amida49 from "../assets/Photos/SIDUR-122.png";
import Amida50 from "../assets/Photos/SIDUR-123.png";
import Amida51 from "../assets/Photos/SIDUR-124.png";
import Amida52 from "../assets/Photos/SIDUR-125.png";
import Amida53 from "../assets/Photos/SIDUR-126.png";
import Amida54 from "../assets/Photos/SIDUR-127.png";
import Amida55 from "../assets/Photos/SIDUR-128.png";
import {
  default as Amida56,
  default as Kave1,
} from "../assets/Photos/SIDUR-129.png";
import Kave2 from "../assets/Photos/SIDUR-130.png";
import Kave3 from "../assets/Photos/SIDUR-131.png";
import Kave4 from "../assets/Photos/SIDUR-132.png";
import Kave5 from "../assets/Photos/SIDUR-133.png";
import Kave6 from "../assets/Photos/SIDUR-134.png";
import Kave7 from "../assets/Photos/SIDUR-135.png";
import Kave8 from "../assets/Photos/SIDUR-136.png";
import Kave9 from "../assets/Photos/SIDUR-137.png";
import Kave10 from "../assets/Photos/SIDUR-138.png";
import Kave11 from "../assets/Photos/SIDUR-139.png";
import Kave12 from "../assets/Photos/SIDUR-140.png";
import Korbanot1 from "../assets/Photos/SIDUR-141.png";
import Korbanot2 from "../assets/Photos/SIDUR-142.png";
import Korbanot3 from "../assets/Photos/SIDUR-143.png";
import Korbanot4 from "../assets/Photos/SIDUR-144.png";
import Korbanot5 from "../assets/Photos/SIDUR-145.png";
import AshreM1 from "../assets/Photos/SIDUR-146.png";
import AshreM2 from "../assets/Photos/SIDUR-147.png";
import AshreM3 from "../assets/Photos/SIDUR-148.png";
import AshreM4 from "../assets/Photos/SIDUR-149.png";
import AshreM5 from "../assets/Photos/SIDUR-150.png";
import AshreM6 from "../assets/Photos/SIDUR-151.png";
import AshreM7 from "../assets/Photos/SIDUR-152.png";
import AshreM8 from "../assets/Photos/SIDUR-153.png";
import AshreM9 from "../assets/Photos/SIDUR-154.png";
import AshreM10 from "../assets/Photos/SIDUR-155.png";
import AshreM11 from "../assets/Photos/SIDUR-156.png";
import AshreM12 from "../assets/Photos/SIDUR-157.png";
import AshreM13 from "../assets/Photos/SIDUR-158.png";
import AshreM14 from "../assets/Photos/SIDUR-159.png";
import AshreM15 from "../assets/Photos/SIDUR-160.png";
import AshreM16 from "../assets/Photos/SIDUR-161.png";
import AshreM17 from "../assets/Photos/SIDUR-162.png";
import AshreM18 from "../assets/Photos/SIDUR-163.png";
import AshreM19 from "../assets/Photos/SIDUR-164.png";
import AshreM20 from "../assets/Photos/SIDUR-165.png";
import AshreM21 from "../assets/Photos/SIDUR-166.png";
import yehiShem1 from "../assets/Photos/SIDUR-167.png";
import yehiShem2 from "../assets/Photos/SIDUR-168.png";
import yehiShem3 from "../assets/Photos/SIDUR-169.png";
import yehiShem4 from "../assets/Photos/SIDUR-170.png";
import yehiShem5 from "../assets/Photos/SIDUR-171.png";
import yehiShem6 from "../assets/Photos/SIDUR-172.png";
import yehiShem7 from "../assets/Photos/SIDUR-173.png";
import yehiShem8 from "../assets/Photos/SIDUR-174.png";
import yehiShem9 from "../assets/Photos/SIDUR-175.png";
import arbit1 from "../assets/Photos/SIDUR-176.png";
import arbit2 from "../assets/Photos/SIDUR-177.png";
import arbit3 from "../assets/Photos/SIDUR-178.png";
import arbit4 from "../assets/Photos/SIDUR-179.png";
import arbit5 from "../assets/Photos/SIDUR-180.png";
import arbit6 from "../assets/Photos/SIDUR-181.png";
import arbit7 from "../assets/Photos/SIDUR-182.png";
import arbit8 from "../assets/Photos/SIDUR-183.png";
import arbit9 from "../assets/Photos/SIDUR-184.png";
import arbit10 from "../assets/Photos/SIDUR-185.png";
import arbit11 from "../assets/Photos/SIDUR-186.png";
import arbit12 from "../assets/Photos/SIDUR-187.png";
import arbit13 from "../assets/Photos/SIDUR-188.png";
import arbit14 from "../assets/Photos/SIDUR-189.png";
import arbit15 from "../assets/Photos/SIDUR-190.png";
import arbit16 from "../assets/Photos/SIDUR-191.png";
import arbit17 from "../assets/Photos/SIDUR-192.png";
import arbit18 from "../assets/Photos/SIDUR-193.png";
import arbit19 from "../assets/Photos/SIDUR-194.png";
import arbit20 from "../assets/Photos/SIDUR-195.png";
import arbit21 from "../assets/Photos/SIDUR-196.png";
import arbit22 from "../assets/Photos/SIDUR-197.png";
import arbit23 from "../assets/Photos/SIDUR-198.png";
import arbit24 from "../assets/Photos/SIDUR-199.png";
import arbit25 from "../assets/Photos/SIDUR-200.png";
import arbit26 from "../assets/Photos/SIDUR-201.png";
import arbit27 from "../assets/Photos/SIDUR-202.png";
import arbit28 from "../assets/Photos/SIDUR-203.png";
import arbit29 from "../assets/Photos/SIDUR-204.png";
import arbit30 from "../assets/Photos/SIDUR-205.png";
import keriatShema1 from "../assets/Photos/SIDUR-206.png";
import keriatShema2 from "../assets/Photos/SIDUR-207.png";
import keriatShema3 from "../assets/Photos/SIDUR-208.png";
import keriatShema4 from "../assets/Photos/SIDUR-209.png";
import keriatShema5 from "../assets/Photos/SIDUR-210.png";
import keriatShema6 from "../assets/Photos/SIDUR-211.png";
import birkatHalebana1 from "../assets/Photos/SIDUR-212.png";
import birkatHalebana2 from "../assets/Photos/SIDUR-213.png";
import birkatHalebana3 from "../assets/Photos/SIDUR-214.png";
import birkatHalebana4 from "../assets/Photos/SIDUR-215.png";
import birkatHalebana5 from "../assets/Photos/SIDUR-216.png";
import birkatHalebana6 from "../assets/Photos/SIDUR-217.png";
import sefiratHaomer1 from "../assets/Photos/SIDUR-218.png";
import sefiratHaomer2 from "../assets/Photos/SIDUR-219.png";
import sefiratHaomer3 from "../assets/Photos/SIDUR-220.png";
import sefiratHaomer4 from "../assets/Photos/SIDUR-221.png";
import sefiratHaomer5 from "../assets/Photos/SIDUR-222.png";
import shirHashirim1 from "../assets/Photos/SIDUR-223.png";
import shirHashirim2 from "../assets/Photos/SIDUR-224.png";
import shirHashirim3 from "../assets/Photos/SIDUR-225.png";
import shirHashirim4 from "../assets/Photos/SIDUR-226.png";
import shirHashirim5 from "../assets/Photos/SIDUR-227.png";
import shirHashirim6 from "../assets/Photos/SIDUR-228.png";
import shirHashirim7 from "../assets/Photos/SIDUR-229.png";
import shirHashirim8 from "../assets/Photos/SIDUR-230.png";
import shirHashirim9 from "../assets/Photos/SIDUR-231.png";
import shirHashirim10 from "../assets/Photos/SIDUR-232.png";
import kabalatShabat1 from "../assets/Photos/SIDUR-233.png";
import kabalatShabat2 from "../assets/Photos/SIDUR-234.png";
import kabalatShabat3 from "../assets/Photos/SIDUR-235.png";
import kabalatShabat4 from "../assets/Photos/SIDUR-236.png";
import kabalatShabat5 from "../assets/Photos/SIDUR-237.png";
import kabalatShabat6 from "../assets/Photos/SIDUR-238.png";
import kabalatShabat7 from "../assets/Photos/SIDUR-239.png";
import kabalatShabat8 from "../assets/Photos/SIDUR-240.png";
import kabalatShabat9 from "../assets/Photos/SIDUR-241.png";
import arbitShabat1 from "../assets/Photos/SIDUR-242.png";
import arbitShabat2 from "../assets/Photos/SIDUR-243.png";
import arbitShabat3 from "../assets/Photos/SIDUR-244.png";
import arbitShabat4 from "../assets/Photos/SIDUR-245.png";
import arbitShabat5 from "../assets/Photos/SIDUR-246.png";
import arbitShabat6 from "../assets/Photos/SIDUR-247.png";
import arbitShabat7 from "../assets/Photos/SIDUR-248.png";
import arbitShabat8 from "../assets/Photos/SIDUR-249.png";
import arbitShabat9 from "../assets/Photos/SIDUR-250.png";
import arbitShabat10 from "../assets/Photos/SIDUR-251.png";
import arbitShabat11 from "../assets/Photos/SIDUR-252.png";
import arbitShabat12 from "../assets/Photos/SIDUR-253.png";
import arbitShabat13 from "../assets/Photos/SIDUR-254.png";
import arbitShabat14 from "../assets/Photos/SIDUR-255.png";
import arbitShabat15 from "../assets/Photos/SIDUR-256.png";
import arbitShabat16 from "../assets/Photos/SIDUR-257.png";
import arbitShabat17 from "../assets/Photos/SIDUR-258.png";
import arbitShabat18 from "../assets/Photos/SIDUR-259.png";
import arbitShabat19 from "../assets/Photos/SIDUR-260.png";
import arbitShabat20 from "../assets/Photos/SIDUR-261.png";
import Kidush1 from "../assets/Photos/SIDUR-262.png";
import Kidush2 from "../assets/Photos/SIDUR-263.png";
import Kidush3 from "../assets/Photos/SIDUR-264.png";
import Kidush4 from "../assets/Photos/SIDUR-265.png";
import birkatHamazon1 from "../assets/Photos/SIDUR-266.png";
import birkatHamazon2 from "../assets/Photos/SIDUR-267.png";
import birkatHamazon3 from "../assets/Photos/SIDUR-268.png";
import birkatHamazon4 from "../assets/Photos/SIDUR-269.png";
import birkatHamazon5 from "../assets/Photos/SIDUR-270.png";
import birkatHamazon6 from "../assets/Photos/SIDUR-271.png";
import birkatHamazon7 from "../assets/Photos/SIDUR-272.png";
import birkatHamazon8 from "../assets/Photos/SIDUR-273.png";
import birkatHamazon9 from "../assets/Photos/SIDUR-274.png";
import birkatHamazon10 from "../assets/Photos/SIDUR-275.png";
import birkatHamazon11 from "../assets/Photos/SIDUR-276.png";
import birkatHamazon12 from "../assets/Photos/SIDUR-277.png";
import birkatHamazon13 from "../assets/Photos/SIDUR-278.png";
import shajritShabat1 from "../assets/Photos/SIDUR-279.png";
import shajritShabat2 from "../assets/Photos/SIDUR-280.png";
import shajritShabat3 from "../assets/Photos/SIDUR-281.png";
import shajritShabat4 from "../assets/Photos/SIDUR-282.png";
import shajritShabat5 from "../assets/Photos/SIDUR-283.png";
import shajritShabat6 from "../assets/Photos/SIDUR-284.png";
import shajritShabat7 from "../assets/Photos/SIDUR-285.png";
import shajritShabat8 from "../assets/Photos/SIDUR-286.png";
import shajritShabat9 from "../assets/Photos/SIDUR-287.png";
import shajritShabat10 from "../assets/Photos/SIDUR-288.png";
import shajritShabat11 from "../assets/Photos/SIDUR-289.png";
import shajritShabat12 from "../assets/Photos/SIDUR-290.png";
import shajritShabat13 from "../assets/Photos/SIDUR-291.png";
import shajritShabat14 from "../assets/Photos/SIDUR-292.png";
import shajritShabat15 from "../assets/Photos/SIDUR-293.png";
import shajritShabat16 from "../assets/Photos/SIDUR-294.png";
import shajritShabat17 from "../assets/Photos/SIDUR-295.png";
import shajritShabat18 from "../assets/Photos/SIDUR-296.png";
import shajritShabat19 from "../assets/Photos/SIDUR-297.png";
import shajritShabat20 from "../assets/Photos/SIDUR-298.png";
import shajritShabat21 from "../assets/Photos/SIDUR-299.png";
import shajritShabat22 from "../assets/Photos/SIDUR-300.png";
import shajritShabat23 from "../assets/Photos/SIDUR-301.png";
import shajritShabat24 from "../assets/Photos/SIDUR-302.png";
import shajritShabat25 from "../assets/Photos/SIDUR-303.png";
import shajritShabat26 from "../assets/Photos/SIDUR-304.png";
import shajritShabat27 from "../assets/Photos/SIDUR-305.png";
import shajritShabat28 from "../assets/Photos/SIDUR-306.png";
import shajritShabat29 from "../assets/Photos/SIDUR-307.png";
import shajritShabat30 from "../assets/Photos/SIDUR-308.png";
import shajritShabat31 from "../assets/Photos/SIDUR-309.png";
import shajritShabat32 from "../assets/Photos/SIDUR-310.png";
import shajritShabat33 from "../assets/Photos/SIDUR-311.png";
import shajritShabat34 from "../assets/Photos/SIDUR-312.png";
import shajritShabat35 from "../assets/Photos/SIDUR-313.png";
import shajritShabat36 from "../assets/Photos/SIDUR-314.png";
import shajritShabat37 from "../assets/Photos/SIDUR-315.png";
import shajritShabat38 from "../assets/Photos/SIDUR-316.png";
import shajritShabat39 from "../assets/Photos/SIDUR-317.png";
import shajritShabat40 from "../assets/Photos/SIDUR-318.png";
import shajritShabat41 from "../assets/Photos/SIDUR-319.png";
import shajritShabat42 from "../assets/Photos/SIDUR-320.png";
import shajritShabat43 from "../assets/Photos/SIDUR-321.png";
import shajritShabat44 from "../assets/Photos/SIDUR-322.png";
import shajritShabat45 from "../assets/Photos/SIDUR-323.png";
import shajritShabat46 from "../assets/Photos/SIDUR-324.png";
import shajritShabat47 from "../assets/Photos/SIDUR-325.png";
import shajritShabat48 from "../assets/Photos/SIDUR-326.png";
import shajritShabat49 from "../assets/Photos/SIDUR-327.png";
import shajritShabat50 from "../assets/Photos/SIDUR-328.png";
import shajritShabat51 from "../assets/Photos/SIDUR-329.png";
import shajritShabat52 from "../assets/Photos/SIDUR-330.png";
import shajritShabat53 from "../assets/Photos/SIDUR-331.png";
import shajritShabat54 from "../assets/Photos/SIDUR-332.png";
import shajritShabat55 from "../assets/Photos/SIDUR-333.png";
import petijatHaejal1 from "../assets/Photos/SIDUR-334.png";
import petijatHaejal2 from "../assets/Photos/SIDUR-335.png";
import petijatHaejal3 from "../assets/Photos/SIDUR-336.png";
import petijatHaejal4 from "../assets/Photos/SIDUR-337.png";
import petijatHaejal5 from "../assets/Photos/SIDUR-338.png";
import petijatHaejal6 from "../assets/Photos/SIDUR-339.png";
import petijatHaejal7 from "../assets/Photos/SIDUR-340.png";
import petijatHaejal8 from "../assets/Photos/SIDUR-341.png";
import petijatHaejal9 from "../assets/Photos/SIDUR-342.png";
import petijatHaejal10 from "../assets/Photos/SIDUR-343.png";
import petijatHaejal11 from "../assets/Photos/SIDUR-344.png";
import {
  default as musaf1,
  default as petijatHaejal12,
} from "../assets/Photos/SIDUR-345.png";
import musaf2 from "../assets/Photos/SIDUR-346.png";
import musaf3 from "../assets/Photos/SIDUR-347.png";
import musaf4 from "../assets/Photos/SIDUR-348.png";
import musaf5 from "../assets/Photos/SIDUR-349.png";
import musaf6 from "../assets/Photos/SIDUR-350.png";
import musaf7 from "../assets/Photos/SIDUR-351.png";
import musaf8 from "../assets/Photos/SIDUR-352.png";
import musaf9 from "../assets/Photos/SIDUR-353.png";
import musaf10 from "../assets/Photos/SIDUR-354.png";
import musaf11 from "../assets/Photos/SIDUR-355.png";
import musaf12 from "../assets/Photos/SIDUR-356.png";
import musaf13 from "../assets/Photos/SIDUR-357.png";
import musaf14 from "../assets/Photos/SIDUR-358.png";
import musaf15 from "../assets/Photos/SIDUR-359.png";
import musaf16 from "../assets/Photos/SIDUR-360.png";
import musaf17 from "../assets/Photos/SIDUR-361.png";
import musaf18 from "../assets/Photos/SIDUR-362.png";
import musaf19 from "../assets/Photos/SIDUR-363.png";
import musaf20 from "../assets/Photos/SIDUR-364.png";
import musaf21 from "../assets/Photos/SIDUR-365.png";
import musaf22 from "../assets/Photos/SIDUR-366.png";
import musaf23 from "../assets/Photos/SIDUR-367.png";
import musaf24 from "../assets/Photos/SIDUR-368.png";
import minjaShabat1 from "../assets/Photos/SIDUR-370.png";
import minjaShabat2 from "../assets/Photos/SIDUR-371.png";
import minjaShabat3 from "../assets/Photos/SIDUR-372.png";
import minjaShabat4 from "../assets/Photos/SIDUR-373.png";
import minjaShabat5 from "../assets/Photos/SIDUR-374.png";
import minjaShabat6 from "../assets/Photos/SIDUR-375.png";
import minjaShabat7 from "../assets/Photos/SIDUR-376.png";
import minjaShabat8 from "../assets/Photos/SIDUR-377.png";
import minjaShabat9 from "../assets/Photos/SIDUR-378.png";
import minjaShabat10 from "../assets/Photos/SIDUR-379.png";
import minjaShabat11 from "../assets/Photos/SIDUR-380.png";
import minjaShabat12 from "../assets/Photos/SIDUR-381.png";
import minjaShabat13 from "../assets/Photos/SIDUR-382.png";
import minjaShabat14 from "../assets/Photos/SIDUR-383.png";
import minjaShabat15 from "../assets/Photos/SIDUR-384.png";
import minjaShabat16 from "../assets/Photos/SIDUR-385.png";
import minjaShabat17 from "../assets/Photos/SIDUR-386.png";
import minjaShabat18 from "../assets/Photos/SIDUR-387.png";
import minjaShabat19 from "../assets/Photos/SIDUR-388.png";
import minjaShabat20 from "../assets/Photos/SIDUR-389.png";
import minjaShabat21 from "../assets/Photos/SIDUR-390.png";
import minjaShabat22 from "../assets/Photos/SIDUR-391.png";
import minjaShabat23 from "../assets/Photos/SIDUR-392.png";
import minjaShabat24 from "../assets/Photos/SIDUR-393.png";
import minjaShabat25 from "../assets/Photos/SIDUR-394.png";
import minjaShabat26 from "../assets/Photos/SIDUR-395.png";
import minjaShabat27 from "../assets/Photos/SIDUR-396.png";
import minjaShabat28 from "../assets/Photos/SIDUR-397.png";
import minjaShabat29 from "../assets/Photos/SIDUR-398.png";
import minjaShabat30 from "../assets/Photos/SIDUR-399.png";
import Habdalah1 from "../assets/Photos/SIDUR-400.png";
import Habdalah2 from "../assets/Photos/SIDUR-401.png";
import Habdalah3 from "../assets/Photos/SIDUR-402.png";
import Habdalah4 from "../assets/Photos/SIDUR-403.png";
import Habdalah5 from "../assets/Photos/SIDUR-404.png";
import Habdalah6 from "../assets/Photos/SIDUR-405.png";
import Halel1 from "../assets/Photos/SIDUR-406.png";
import Halel2 from "../assets/Photos/SIDUR-407.png";
import Halel3 from "../assets/Photos/SIDUR-408.png";
import Halel4 from "../assets/Photos/SIDUR-409.png";
import Halel5 from "../assets/Photos/SIDUR-410.png";
import Halel6 from "../assets/Photos/SIDUR-411.png";
import Halel7 from "../assets/Photos/SIDUR-412.png";
import {
  default as Halel8,
  default as seferRoshJodesh1,
} from "../assets/Photos/SIDUR-413.png";
import seferRoshJodesh2 from "../assets/Photos/SIDUR-414.png";
import seferRoshJodesh3 from "../assets/Photos/SIDUR-415.png";
import seferRoshJodesh4 from "../assets/Photos/SIDUR-416.png";
import seferRoshJodesh5 from "../assets/Photos/SIDUR-417.png";
import seferRoshJodesh6 from "../assets/Photos/SIDUR-418.png";
import seferRoshJodesh7 from "../assets/Photos/SIDUR-419.png";
import seferRoshJodesh8 from "../assets/Photos/SIDUR-420.png";
import seferRoshJodesh9 from "../assets/Photos/SIDUR-421.png";
import seferRoshJodesh10 from "../assets/Photos/SIDUR-422.png";
import musafRoshJodeshJol1 from "../assets/Photos/SIDUR-423.png";
import musafRoshJodeshJol2 from "../assets/Photos/SIDUR-424.png";
import musafRoshJodeshJol3 from "../assets/Photos/SIDUR-425.png";
import musafRoshJodeshJol4 from "../assets/Photos/SIDUR-426.png";
import musafRoshJodeshJol5 from "../assets/Photos/SIDUR-427.png";
import musafRoshJodeshJol6 from "../assets/Photos/SIDUR-428.png";
import musafRoshJodeshJol7 from "../assets/Photos/SIDUR-429.png";
import musafRoshJodeshJol8 from "../assets/Photos/SIDUR-430.png";
import musafRoshJodeshJol9 from "../assets/Photos/SIDUR-431.png";
import musafRoshJodeshJol10 from "../assets/Photos/SIDUR-432.png";
import musafRoshJodeshJol11 from "../assets/Photos/SIDUR-433.png";
import musafRoshJodeshJol12 from "../assets/Photos/SIDUR-434.png";
import musafRoshJodeshJol13 from "../assets/Photos/SIDUR-435.png";
import musafRoshJodeshJol14 from "../assets/Photos/SIDUR-436.png";
import musafRoshJodeshShabat1 from "../assets/Photos/SIDUR-437.png";
import musafRoshJodeshShabat2 from "../assets/Photos/SIDUR-438.png";
import musafRoshJodeshShabat3 from "../assets/Photos/SIDUR-439.png";
import musafRoshJodeshShabat4 from "../assets/Photos/SIDUR-440.png";
import musafRoshJodeshShabat5 from "../assets/Photos/SIDUR-441.png";
import musafRoshJodeshShabat6 from "../assets/Photos/SIDUR-442.png";
import musafRoshJodeshShabat7 from "../assets/Photos/SIDUR-443.png";
import musafRoshJodeshShabat8 from "../assets/Photos/SIDUR-444.png";
import musafRoshJodeshShabat9 from "../assets/Photos/SIDUR-445.png";
import musafRoshJodeshShabat10 from "../assets/Photos/SIDUR-446.png";
import musafRoshJodeshShabat11 from "../assets/Photos/SIDUR-447.png";
import musafRoshJodeshShabat12 from "../assets/Photos/SIDUR-448.png";
import mizmorim1 from "../assets/Photos/SIDUR-449.png";
import mizmorim2 from "../assets/Photos/SIDUR-450.png";
import mizmorim3 from "../assets/Photos/SIDUR-451.png";
import mizmorim4 from "../assets/Photos/SIDUR-452.png";
import mizmorim5 from "../assets/Photos/SIDUR-453.png";
import mizmorim6 from "../assets/Photos/SIDUR-454.png";
import {
  default as amidaYomtob1,
  default as mizmorim7,
} from "../assets/Photos/SIDUR-455.png";
import amidaYomtob2 from "../assets/Photos/SIDUR-456.png";
import amidaYomtob3 from "../assets/Photos/SIDUR-457.png";
import amidaYomtob4 from "../assets/Photos/SIDUR-458.png";
import amidaYomtob5 from "../assets/Photos/SIDUR-459.png";
import amidaYomtob6 from "../assets/Photos/SIDUR-460.png";
import amidaYomtob7 from "../assets/Photos/SIDUR-461.png";
import amidaYomtob8 from "../assets/Photos/SIDUR-462.png";
import amidaYomtob9 from "../assets/Photos/SIDUR-463.png";
import amidaYomtob10 from "../assets/Photos/SIDUR-464.png";
import amidaYomtob11 from "../assets/Photos/SIDUR-465.png";
import amidaYomtob12 from "../assets/Photos/SIDUR-466.png";
import amidaYomtob13 from "../assets/Photos/SIDUR-467.png";
import amidaYomtob14 from "../assets/Photos/SIDUR-468.png";
import amidaYomtob15 from "../assets/Photos/SIDUR-469.png";
import {
  default as amidaMusaf1,
  default as amidaYomtob16,
} from "../assets/Photos/SIDUR-470.png";
import amidaMusaf2 from "../assets/Photos/SIDUR-471.png";
import amidaMusaf3 from "../assets/Photos/SIDUR-472.png";
import amidaMusaf4 from "../assets/Photos/SIDUR-473.png";
import amidaMusaf5 from "../assets/Photos/SIDUR-474.png";
import amidaMusaf6 from "../assets/Photos/SIDUR-475.png";
import amidaMusaf7 from "../assets/Photos/SIDUR-476.png";
import amidaMusaf8 from "../assets/Photos/SIDUR-477.png";
import amidaMusaf9 from "../assets/Photos/SIDUR-478.png";
import amidaMusaf10 from "../assets/Photos/SIDUR-479.png";
import amidaMusaf11 from "../assets/Photos/SIDUR-480.png";
import velas1 from "../assets/Photos/SIDUR-481.png";
import velas2 from "../assets/Photos/SIDUR-482.png";
import velas3 from "../assets/Photos/SIDUR-483.png";
import seferJanuca1 from "../assets/Photos/SIDUR-484.png";
import seferJanuca2 from "../assets/Photos/SIDUR-485.png";
import seferJanuca3 from "../assets/Photos/SIDUR-486.png";
import seferJanuca4 from "../assets/Photos/SIDUR-487.png";
import seferJanuca5 from "../assets/Photos/SIDUR-488.png";
import seferJanuca6 from "../assets/Photos/SIDUR-489.png";
import seferJanuca7 from "../assets/Photos/SIDUR-490.png";
import seferJanuca8 from "../assets/Photos/SIDUR-491.png";
import seferJanuca9 from "../assets/Photos/SIDUR-492.png";
import shabatShekalim1 from "../assets/Photos/SIDUR-493.png";
import shabatZajor1 from "../assets/Photos/SIDUR-495.png";
import {
  default as purim1,
  default as shabatZajor2,
} from "../assets/Photos/SIDUR-496.png";
import purim2 from "../assets/Photos/SIDUR-497.png";
import purim3 from "../assets/Photos/SIDUR-498.png";
import purim4 from "../assets/Photos/SIDUR-499.png";
import shabatonimDiferentes1 from "../assets/Photos/SIDUR-500.png";
import birkatHailanot1 from "../assets/Photos/SIDUR-501.png";
import birkatHailanot2 from "../assets/Photos/SIDUR-502.png";
import birkatHailanot3 from "../assets/Photos/SIDUR-503.png";
import birkatHailanot4 from "../assets/Photos/SIDUR-504.png";
import birkatHailanot5 from "../assets/Photos/SIDUR-505.png";
import birkatHailanot6 from "../assets/Photos/SIDUR-506.png";
import birkatHailanot7 from "../assets/Photos/SIDUR-507.png";
import birkatHailanot8 from "../assets/Photos/SIDUR-508.png";
import limudNisan1 from "../assets/Photos/SIDUR-509.png";
import limudNisan2 from "../assets/Photos/SIDUR-510.png";
import limudNisan3 from "../assets/Photos/SIDUR-511.png";
import limudNisan4 from "../assets/Photos/SIDUR-512.png";
import limudNisan5 from "../assets/Photos/SIDUR-513.png";
import limudNisan6 from "../assets/Photos/SIDUR-514.png";
import limudNisan7 from "../assets/Photos/SIDUR-515.png";
import limudNisan8 from "../assets/Photos/SIDUR-516.png";
import limudNisan9 from "../assets/Photos/SIDUR-517.png";
import limudNisan10 from "../assets/Photos/SIDUR-518.png";
import limudNisan11 from "../assets/Photos/SIDUR-519.png";
import limudNisan12 from "../assets/Photos/SIDUR-520.png";
import limudNisan13 from "../assets/Photos/SIDUR-521.png";
import yomHazikaron1 from "../assets/Photos/SIDUR-523.png";
import yomHazikaron2 from "../assets/Photos/SIDUR-524.png";
import tefilaShalomAlIsrael1 from "../assets/Photos/SIDUR-525.png";
import tefilaShalomAlIsrael2 from "../assets/Photos/SIDUR-526.png";
import Boda1 from "../assets/Photos/SIDUR-527.png";
import Boda2 from "../assets/Photos/SIDUR-528.png";
import Boda3 from "../assets/Photos/SIDUR-529.png";
import britMila1 from "../assets/Photos/SIDUR-530.png";
import britMila2 from "../assets/Photos/SIDUR-531.png";
import britMila3 from "../assets/Photos/SIDUR-532.png";
import britMila4 from "../assets/Photos/SIDUR-533.png";
import britMila5 from "../assets/Photos/SIDUR-534.png";
import britMila6 from "../assets/Photos/SIDUR-535.png";
import britMila7 from "../assets/Photos/SIDUR-536.png";
import britMila8 from "../assets/Photos/SIDUR-537.png";
import britMila9 from "../assets/Photos/SIDUR-538.png";
import pidionHaben1 from "../assets/Photos/SIDUR-539.png";
import pidionHaben2 from "../assets/Photos/SIDUR-540.png";
import pidionHaben3 from "../assets/Photos/SIDUR-541.png";
import pidionHaben4 from "../assets/Photos/SIDUR-542.png";
import berajot1 from "../assets/Photos/SIDUR-543.png";
import berajot2 from "../assets/Photos/SIDUR-544.png";
import berajot3 from "../assets/Photos/SIDUR-545.png";
import berajot4 from "../assets/Photos/SIDUR-546.png";
import berajot5 from "../assets/Photos/SIDUR-547.png";
import abelut1 from "../assets/Photos/SIDUR-548.png";
import abelut2 from "../assets/Photos/SIDUR-549.png";
import abelut3 from "../assets/Photos/SIDUR-550.png";
import abelut4 from "../assets/Photos/SIDUR-551.png";
import guedalia1 from "../assets/Photos/SIDUR-552.png";
import guedalia2 from "../assets/Photos/SIDUR-553.png";
import guedalia3 from "../assets/Photos/SIDUR-554.png";
import guedalia4 from "../assets/Photos/SIDUR-555.png";
import guedalia5 from "../assets/Photos/SIDUR-556.png";
import guedalia6 from "../assets/Photos/SIDUR-557.png";
import guedalia7 from "../assets/Photos/SIDUR-558.png";
import guedalia8 from "../assets/Photos/SIDUR-559.png";
import guedalia9 from "../assets/Photos/SIDUR-560.png";
import guedalia10 from "../assets/Photos/SIDUR-561.png";
import asaraBetebet1 from "../assets/Photos/SIDUR-562.png";
import asaraBetebet2 from "../assets/Photos/SIDUR-563.png";
import asaraBetebet3 from "../assets/Photos/SIDUR-564.png";
import asaraBetebet4 from "../assets/Photos/SIDUR-565.png";
import {
  default as asaraBetebet5,
  default as ayunoEsther1,
} from "../assets/Photos/SIDUR-566.png";
import ayunoEsther2 from "../assets/Photos/SIDUR-567.png";
import ayunoEsther3 from "../assets/Photos/SIDUR-568.png";
import ayunoEsther4 from "../assets/Photos/SIDUR-569.png";
import ayunoEsther5 from "../assets/Photos/SIDUR-570.png";
import ayunoEsther6 from "../assets/Photos/SIDUR-571.png";
import {
  default as ayunoEsther7,
  default as tamuz1,
} from "../assets/Photos/SIDUR-572.png";
import tamuz2 from "../assets/Photos/SIDUR-573.png";
import tamuz3 from "../assets/Photos/SIDUR-574.png";
import tamuz4 from "../assets/Photos/SIDUR-575.png";
import tamuz5 from "../assets/Photos/SIDUR-576.png";
import tamuz6 from "../assets/Photos/SIDUR-577.png";
import minjaAyuno1 from "../assets/Photos/SIDUR-578.png";
import minjaAyuno2 from "../assets/Photos/SIDUR-579.png";
import minjaAyuno3 from "../assets/Photos/SIDUR-580.png";
import minjaAyuno4 from "../assets/Photos/SIDUR-581.png";
import minjaAyuno5 from "../assets/Photos/SIDUR-582.png";
import bereshit1 from "../assets/Photos/SIDUR-583.png";
import bereshit2 from "../assets/Photos/SIDUR-584.png";
import bereshit3 from "../assets/Photos/SIDUR-585.png";
import bereshit4 from "../assets/Photos/SIDUR-586.png";
import bereshit5 from "../assets/Photos/SIDUR-587.png";
import bereshit6 from "../assets/Photos/SIDUR-588.png";
import bereshit7 from "../assets/Photos/SIDUR-589.png";
import bereshit8 from "../assets/Photos/SIDUR-590.png";
import bereshit9 from "../assets/Photos/SIDUR-591.png";
import {
  default as bereshit10,
  default as shemot1,
} from "../assets/Photos/SIDUR-592.png";
import shemot2 from "../assets/Photos/SIDUR-593.png";
import shemot3 from "../assets/Photos/SIDUR-594.png";
import shemot4 from "../assets/Photos/SIDUR-595.png";
import shemot5 from "../assets/Photos/SIDUR-596.png";
import shemot6 from "../assets/Photos/SIDUR-597.png";
import shemot7 from "../assets/Photos/SIDUR-598.png";
import shemot8 from "../assets/Photos/SIDUR-599.png";
import shemot9 from "../assets/Photos/SIDUR-600.png";
import {
  default as shemot10,
  default as vaikra1,
} from "../assets/Photos/SIDUR-601.png";
import vaikra2 from "../assets/Photos/SIDUR-602.png";
import vaikra3 from "../assets/Photos/SIDUR-603.png";
import vaikra4 from "../assets/Photos/SIDUR-604.png";
import vaikra5 from "../assets/Photos/SIDUR-605.png";
import vaikra6 from "../assets/Photos/SIDUR-606.png";
import vaikra7 from "../assets/Photos/SIDUR-607.png";
import vaikra8 from "../assets/Photos/SIDUR-608.png";
import bamidbar1 from "../assets/Photos/SIDUR-609.png";
import bamidbar2 from "../assets/Photos/SIDUR-610.png";
import bamidbar3 from "../assets/Photos/SIDUR-611.png";
import bamidbar4 from "../assets/Photos/SIDUR-612.png";
import bamidbar5 from "../assets/Photos/SIDUR-613.png";
import bamidbar6 from "../assets/Photos/SIDUR-614.png";
import bamidbar7 from "../assets/Photos/SIDUR-615.png";
import {
  default as bamidbar8,
  default as debarim1,
} from "../assets/Photos/SIDUR-616.png";
import debarim2 from "../assets/Photos/SIDUR-617.png";
import debarim3 from "../assets/Photos/SIDUR-618.png";
import debarim4 from "../assets/Photos/SIDUR-619.png";
import debarim5 from "../assets/Photos/SIDUR-620.png";
import debarim6 from "../assets/Photos/SIDUR-621.png";
import debarim7 from "../assets/Photos/SIDUR-622.png";
import debarim8 from "../assets/Photos/SIDUR-623.png";
import debarim9 from "../assets/Photos/SIDUR-624.png";
import debarim10 from "../assets/Photos/SIDUR-625.png";
import debarim11 from "../assets/Photos/SIDUR-626.png";
import debarim12 from "../assets/Photos/SIDUR-627.png";

const PDF = ({ navigation, route }) => {
  const { ruta } = route.params;
  console.log(ruta);

  const [birkatHashajar, setbirkatHashajar] = useState([
    { id: 1, image: birkatHashajar1 },
    { id: 2, image: birkatHashajar2 },
    { id: 3, image: birkatHashajar3 },
    { id: 4, image: birkatHashajar4 },
    { id: 5, image: birkatHashajar5 },
    { id: 6, image: birkatHashajar6 },
    { id: 7, image: birkatHashajar7 },
    { id: 8, image: birkatHashajar8 },
    { id: 9, image: birkatHashajar9 },
    { id: 10, image: birkatHashajar10 },
    { id: 11, image: birkatHashajar11 },
    { id: 12, image: birkatHashajar12 },
    { id: 13, image: birkatHashajar13 },
    { id: 14, image: birkatHashajar14 },
    { id: 15, image: birkatHashajar15 },
    { id: 16, image: birkatHashajar16 },
    { id: 17, image: birkatHashajar17 },
    { id: 18, image: birkatHashajar18 },
    { id: 19, image: birkatHashajar19 },
    { id: 20, image: birkatHashajar20 },
    { id: 21, image: birkatHashajar21 },
    { id: 22, image: birkatHashajar22 },
    { id: 23, image: birkatHashajar23 },
    { id: 24, image: birkatHashajar24 },
    { id: 25, image: birkatHashajar25 },
    { id: 26, image: birkatHashajar26 },
    { id: 27, image: birkatHashajar27 },
    { id: 28, image: birkatHashajar28 },
    { id: 29, image: birkatHashajar29 },
    { id: 30, image: birkatHashajar30 },
    { id: 31, image: birkatHashajar31 },
    { id: 32, image: birkatHashajar32 },
    { id: 33, image: birkatHashajar33 },
    { id: 34, image: birkatHashajar34 },
    { id: 35, image: birkatHashajar35 },
    { id: 36, image: birkatHashajar36 },
    { id: 37, image: birkatHashajar37 },
    { id: 38, image: birkatHashajar38 },
    { id: 39, image: birkatHashajar39 },
    { id: 40, image: birkatHashajar40 },
    { id: 41, image: birkatHashajar41 },
    { id: 42, image: birkatHashajar42 },
    { id: 43, image: birkatHashajar43 },
    { id: 44, image: birkatHashajar44 },
    { id: 45, image: birkatHashajar45 },
  ]);

  const [kadeshLi, setkadeshLi] = useState([
    { id: 1, image: kadeshLi1 },
    { id: 2, image: kadeshLi2 },
    { id: 3, image: kadeshLi3 },
    { id: 4, image: kadeshLi4 },
    { id: 5, image: kadeshLi5 },
    { id: 6, image: kadeshLi6 },
    { id: 7, image: kadeshLi7 },
    { id: 8, image: kadeshLi8 },
  ]);
  const [Ashre, setAshre] = useState([
    { id: 1, image: Ashre },
    { id: 2, image: Ashre1 },
    { id: 3, image: Ashre2 },
    { id: 4, image: Ashre3 },
    { id: 5, image: Ashre4 },
    { id: 6, image: Ashre5 },
    { id: 7, image: Ashre6 },
    { id: 8, image: Ashre7 },
    { id: 9, image: Ashre8 },
    { id: 10, image: Ashre9 },
  ]);

  const [Ishtabaj, setIshtabaj] = useState([
    { id: 1, image: Ishtabaj1 },
    { id: 2, image: Ishtabaj2 },
    { id: 3, image: Ishtabaj3 },
    { id: 4, image: Ishtabaj4 },
    { id: 5, image: Ishtabaj5 },
    { id: 6, image: Ishtabaj6 },
  ]);

  const [Shema, setShema] = useState([
    { id: 1, image: Shema1 },
    { id: 2, image: Shema2 },
    { id: 3, image: Shema3 },
    { id: 4, image: Shema4 },
    { id: 5, image: Shema5 },
  ]);

  const [Amida, setAmida] = useState([
    { id: 0, image: Amida0 },
    { id: 1, image: Amida1 },
    { id: 2, image: Amida2 },
    { id: 3, image: Amida3 },
    { id: 4, image: Amida4 },
    { id: 5, image: Amida5 },
    { id: 6, image: Amida6 },
    { id: 7, image: Amida7 },
    { id: 8, image: Amida8 },
    { id: 9, image: Amida9 },
    { id: 10, image: Amida10 },
    { id: 11, image: Amida11 },
    { id: 12, image: Amida12 },
    { id: 13, image: Amida13 },
    { id: 14, image: Amida14 },
    { id: 15, image: Amida15 },
    { id: 16, image: Amida16 },
    { id: 17, image: Amida17 },
    { id: 18, image: Amida18 },
    { id: 19, image: Amida19 },
    { id: 20, image: Amida20 },
    { id: 21, image: Amida21 },
    { id: 22, image: Amida22 },
    { id: 23, image: Amida23 },
    { id: 24, image: Amida24 },
    { id: 25, image: Amida25 },
    { id: 26, image: Amida26 },
    { id: 27, image: Amida27 },
    { id: 28, image: Amida28 },
    { id: 29, image: Amida29 },
    { id: 30, image: Amida30 },
    { id: 31, image: Amida31 },
    { id: 32, image: Amida32 },
    { id: 33, image: Amida33 },
    { id: 34, image: Amida34 },
    { id: 35, image: Amida35 },
    { id: 36, image: Amida36 },
    { id: 37, image: Amida37 },
    { id: 38, image: Amida38 },
    { id: 39, image: Amida39 },
    { id: 40, image: Amida40 },
    { id: 41, image: Amida41 },
    { id: 42, image: Amida42 },
    { id: 43, image: Amida43 },
    { id: 44, image: Amida44 },
    { id: 45, image: Amida45 },
    { id: 46, image: Amida46 },
    { id: 47, image: Amida47 },
    { id: 48, image: Amida48 },
    { id: 49, image: Amida49 },
    { id: 50, image: Amida50 },
    { id: 51, image: Amida51 },
    { id: 52, image: Amida52 },
    { id: 53, image: Amida53 },
    { id: 54, image: Amida54 },
    { id: 55, image: Amida55 },
    { id: 56, image: Amida56 },
  ]);

  const [Kave, setKave] = useState([
    { id: 1, image: Kave1 },
    { id: 2, image: Kave2 },
    { id: 3, image: Kave3 },
    { id: 4, image: Kave4 },
    { id: 5, image: Kave5 },
    { id: 6, image: Kave6 },
    { id: 7, image: Kave7 },
    { id: 8, image: Kave8 },
    { id: 9, image: Kave9 },
    { id: 10, image: Kave10 },
    { id: 11, image: Kave11 },
    { id: 12, image: Kave12 },
  ]);

  const [Korbanot, setKorbanot] = useState([
    { id: 1, image: Korbanot1 },
    { id: 2, image: Korbanot2 },
    { id: 3, image: Korbanot3 },
    { id: 4, image: Korbanot4 },
    { id: 5, image: Korbanot5 },
  ]);

  const [AshreM, setAshreM] = useState([
    { id: 1, image: AshreM1 },
    { id: 2, image: AshreM2 },
    { id: 3, image: AshreM3 },
    { id: 4, image: AshreM4 },
    { id: 5, image: AshreM5 },
    { id: 6, image: AshreM6 },
    { id: 7, image: AshreM7 },
    { id: 8, image: AshreM8 },
    { id: 9, image: AshreM9 },
    { id: 10, image: AshreM10 },
    { id: 11, image: AshreM11 },
    { id: 12, image: AshreM12 },
    { id: 13, image: AshreM13 },
    { id: 14, image: AshreM14 },
    { id: 15, image: AshreM15 },
    { id: 16, image: AshreM16 },
    { id: 17, image: AshreM17 },
    { id: 18, image: AshreM18 },
    { id: 19, image: AshreM19 },
    { id: 20, image: AshreM20 },
    { id: 21, image: AshreM21 },
  ]);

  const [yehiShem, setyehiShem] = useState([
    { id: 1, image: yehiShem1 },
    { id: 2, image: yehiShem2 },
    { id: 3, image: yehiShem3 },
    { id: 4, image: yehiShem4 },
    { id: 5, image: yehiShem5 },
    { id: 6, image: yehiShem6 },
    { id: 7, image: yehiShem7 },
    { id: 8, image: yehiShem8 },
    { id: 9, image: yehiShem9 },
  ]);

  const [arbit, setarbit] = useState([
    { id: 1, image: arbit1 },
    { id: 2, image: arbit2 },
    { id: 3, image: arbit3 },
    { id: 4, image: arbit4 },
    { id: 5, image: arbit5 },
    { id: 6, image: arbit6 },
    { id: 7, image: arbit7 },
    { id: 8, image: arbit8 },
    { id: 9, image: arbit9 },
    { id: 10, image: arbit10 },
    { id: 11, image: arbit11 },
    { id: 12, image: arbit12 },
    { id: 13, image: arbit13 },
    { id: 14, image: arbit14 },
    { id: 15, image: arbit15 },
    { id: 16, image: arbit16 },
    { id: 17, image: arbit17 },
    { id: 18, image: arbit18 },
    { id: 19, image: arbit19 },
    { id: 20, image: arbit20 },
    { id: 21, image: arbit21 },
    { id: 22, image: arbit22 },
    { id: 23, image: arbit23 },
    { id: 24, image: arbit24 },
    { id: 25, image: arbit25 },
    { id: 26, image: arbit26 },
    { id: 27, image: arbit27 },
    { id: 28, image: arbit28 },
    { id: 29, image: arbit29 },
    { id: 30, image: arbit30 },
  ]);

  const [keriatShema, setkeriatShema] = useState([
    { id: 1, image: keriatShema1 },
    { id: 2, image: keriatShema2 },
    { id: 3, image: keriatShema3 },
    { id: 4, image: keriatShema4 },
    { id: 5, image: keriatShema5 },
    { id: 6, image: keriatShema6 },
  ]);

  const [birkatHalebana, setbirkatHalebana] = useState([
    { id: 1, image: birkatHalebana1 },
    { id: 2, image: birkatHalebana2 },
    { id: 3, image: birkatHalebana3 },
    { id: 4, image: birkatHalebana4 },
    { id: 5, image: birkatHalebana5 },
    { id: 6, image: birkatHalebana6 },
  ]);

  const [sefiratHaomer, setsefiratHaomer] = useState([
    { id: 1, image: sefiratHaomer1 },
    { id: 2, image: sefiratHaomer2 },
    { id: 3, image: sefiratHaomer3 },
    { id: 4, image: sefiratHaomer4 },
    { id: 5, image: sefiratHaomer5 },
  ]);

  const [shirHashirim, setshirHashirim] = useState([
    { id: 1, image: shirHashirim1 },
    { id: 2, image: shirHashirim2 },
    { id: 3, image: shirHashirim3 },
    { id: 4, image: shirHashirim4 },
    { id: 5, image: shirHashirim5 },
    { id: 6, image: shirHashirim6 },
    { id: 7, image: shirHashirim7 },
    { id: 8, image: shirHashirim8 },
    { id: 9, image: shirHashirim9 },
    { id: 10, image: shirHashirim10 },
  ]);

  const [kabalatShabat, setkabalatShabat] = useState([
    { id: 1, image: kabalatShabat1 },
    { id: 2, image: kabalatShabat2 },
    { id: 3, image: kabalatShabat3 },
    { id: 4, image: kabalatShabat4 },
    { id: 5, image: kabalatShabat5 },
    { id: 6, image: kabalatShabat6 },
    { id: 7, image: kabalatShabat7 },
    { id: 8, image: kabalatShabat8 },
    { id: 9, image: kabalatShabat9 },
  ]);

  const [arbitShabat, setarbitShabat] = useState([
    { id: 1, image: arbitShabat1 },
    { id: 2, image: arbitShabat2 },
    { id: 3, image: arbitShabat3 },
    { id: 4, image: arbitShabat4 },
    { id: 5, image: arbitShabat5 },
    { id: 6, image: arbitShabat6 },
    { id: 7, image: arbitShabat7 },
    { id: 8, image: arbitShabat8 },
    { id: 9, image: arbitShabat9 },
    { id: 10, image: arbitShabat10 },
    { id: 11, image: arbitShabat11 },
    { id: 12, image: arbitShabat12 },
    { id: 13, image: arbitShabat13 },
    { id: 14, image: arbitShabat14 },
    { id: 15, image: arbitShabat15 },
    { id: 16, image: arbitShabat16 },
    { id: 17, image: arbitShabat17 },
    { id: 18, image: arbitShabat18 },
    { id: 19, image: arbitShabat19 },
    { id: 20, image: arbitShabat20 },
  ]);

  const [Kidush, setKidush] = useState([
    { id: 1, image: Kidush1 },
    { id: 2, image: Kidush2 },
    { id: 3, image: Kidush3 },
    { id: 4, image: Kidush4 },
  ]);

  const [birkatHamazon, setbirkatHamazon] = useState([
    { id: 1, image: birkatHamazon1 },
    { id: 2, image: birkatHamazon2 },
    { id: 3, image: birkatHamazon3 },
    { id: 4, image: birkatHamazon4 },
    { id: 5, image: birkatHamazon5 },
    { id: 6, image: birkatHamazon6 },
    { id: 7, image: birkatHamazon7 },
    { id: 8, image: birkatHamazon8 },
    { id: 9, image: birkatHamazon9 },
    { id: 10, image: birkatHamazon10 },
    { id: 11, image: birkatHamazon11 },
    { id: 12, image: birkatHamazon12 },
    { id: 13, image: birkatHamazon13 },
  ]);

  const [shajritShabat, setshajritShabat] = useState([
    { id: 1, image: shajritShabat1 },
    { id: 2, image: shajritShabat2 },
    { id: 3, image: shajritShabat3 },
    { id: 4, image: shajritShabat4 },
    { id: 5, image: shajritShabat5 },
    { id: 6, image: shajritShabat6 },
    { id: 7, image: shajritShabat7 },
    { id: 8, image: shajritShabat8 },
    { id: 9, image: shajritShabat9 },
    { id: 10, image: shajritShabat10 },
    { id: 11, image: shajritShabat11 },
    { id: 12, image: shajritShabat12 },
    { id: 13, image: shajritShabat13 },
    { id: 14, image: shajritShabat14 },
    { id: 15, image: shajritShabat15 },
    { id: 16, image: shajritShabat16 },
    { id: 17, image: shajritShabat17 },
    { id: 18, image: shajritShabat18 },
    { id: 19, image: shajritShabat19 },
    { id: 20, image: shajritShabat20 },
    { id: 21, image: shajritShabat21 },
    { id: 22, image: shajritShabat22 },
    { id: 23, image: shajritShabat23 },
    { id: 24, image: shajritShabat24 },
    { id: 25, image: shajritShabat25 },
    { id: 26, image: shajritShabat26 },
    { id: 27, image: shajritShabat27 },
    { id: 28, image: shajritShabat28 },
    { id: 29, image: shajritShabat29 },
    { id: 30, image: shajritShabat30 },
    { id: 31, image: shajritShabat31 },
    { id: 32, image: shajritShabat32 },
    { id: 33, image: shajritShabat33 },
    { id: 34, image: shajritShabat34 },
    { id: 35, image: shajritShabat35 },
    { id: 36, image: shajritShabat36 },
    { id: 37, image: shajritShabat37 },
    { id: 38, image: shajritShabat38 },
    { id: 39, image: shajritShabat39 },
    { id: 40, image: shajritShabat40 },
    { id: 41, image: shajritShabat41 },
    { id: 42, image: shajritShabat42 },
    { id: 43, image: shajritShabat43 },
    { id: 44, image: shajritShabat44 },
    { id: 45, image: shajritShabat45 },
    { id: 46, image: shajritShabat46 },
    { id: 47, image: shajritShabat47 },
    { id: 48, image: shajritShabat48 },
    { id: 49, image: shajritShabat49 },
    { id: 50, image: shajritShabat50 },
    { id: 51, image: shajritShabat51 },
    { id: 52, image: shajritShabat52 },
    { id: 53, image: shajritShabat53 },
    { id: 54, image: shajritShabat54 },
    { id: 55, image: shajritShabat55 },
  ]);

  const [petijatHaejal, setpetijatHaejal] = useState([
    { id: 1, image: petijatHaejal1 },
    { id: 2, image: petijatHaejal2 },
    { id: 3, image: petijatHaejal3 },
    { id: 4, image: petijatHaejal4 },
    { id: 5, image: petijatHaejal5 },
    { id: 6, image: petijatHaejal6 },
    { id: 7, image: petijatHaejal7 },
    { id: 8, image: petijatHaejal8 },
    { id: 9, image: petijatHaejal9 },
    { id: 10, image: petijatHaejal10 },
    { id: 11, image: petijatHaejal11 },
    { id: 12, image: petijatHaejal12 },
  ]);

  const [musaf, setmusaf] = useState([
    { id: 1, image: musaf1 },
    { id: 2, image: musaf2 },
    { id: 3, image: musaf3 },
    { id: 4, image: musaf4 },
    { id: 5, image: musaf5 },
    { id: 6, image: musaf6 },
    { id: 7, image: musaf7 },
    { id: 8, image: musaf8 },
    { id: 9, image: musaf9 },
    { id: 10, image: musaf10 },
    { id: 11, image: musaf11 },
    { id: 12, image: musaf12 },
    { id: 13, image: musaf13 },
    { id: 14, image: musaf14 },
    { id: 15, image: musaf15 },
    { id: 16, image: musaf16 },
    { id: 17, image: musaf17 },
    { id: 18, image: musaf18 },
    { id: 19, image: musaf19 },
    { id: 20, image: musaf20 },
    { id: 21, image: musaf21 },
    { id: 22, image: musaf22 },
    { id: 23, image: musaf23 },
    { id: 24, image: musaf24 },
  ]);

  const [kidushDia, setkidushDia] = useState([{ id: 1, kidushDia }]);

  const [minjaShabat, setminjaShabat] = useState([
    { id: 1, image: minjaShabat1 },
    { id: 2, image: minjaShabat2 },
    { id: 3, image: minjaShabat3 },
    { id: 4, image: minjaShabat4 },
    { id: 5, image: minjaShabat5 },
    { id: 6, image: minjaShabat6 },
    { id: 7, image: minjaShabat7 },
    { id: 8, image: minjaShabat8 },
    { id: 9, image: minjaShabat9 },
    { id: 10, image: minjaShabat10 },
    { id: 11, image: minjaShabat11 },
    { id: 12, image: minjaShabat12 },
    { id: 13, image: minjaShabat13 },
    { id: 14, image: minjaShabat14 },
    { id: 15, image: minjaShabat15 },
    { id: 16, image: minjaShabat16 },
    { id: 17, image: minjaShabat17 },
    { id: 18, image: minjaShabat18 },
    { id: 19, image: minjaShabat19 },
    { id: 20, image: minjaShabat20 },
    { id: 21, image: minjaShabat21 },
    { id: 22, image: minjaShabat22 },
    { id: 23, image: minjaShabat23 },
    { id: 24, image: minjaShabat24 },
    { id: 25, image: minjaShabat25 },
    { id: 26, image: minjaShabat26 },
    { id: 27, image: minjaShabat27 },
    { id: 28, image: minjaShabat28 },
    { id: 29, image: minjaShabat29 },
    { id: 30, image: minjaShabat30 },
  ]);

  const [Habdalah, setHabdalah] = useState([
    { id: 1, image: Habdalah1 },
    { id: 2, image: Habdalah2 },
    { id: 3, image: Habdalah3 },
    { id: 4, image: Habdalah4 },
    { id: 5, image: Habdalah5 },
    { id: 6, image: Habdalah6 },
  ]);

  const [Halel, setHalel] = useState([
    { id: 1, image: Halel1 },
    { id: 2, image: Halel2 },
    { id: 3, image: Halel3 },
    { id: 4, image: Halel4 },
    { id: 5, image: Halel5 },
    { id: 6, image: Halel6 },
    { id: 7, image: Halel7 },
    { id: 8, image: Halel8 },
  ]);

  const [seferRoshJodesh, setseferRoshJodesh] = useState([
    { id: 1, image: seferRoshJodesh1 },
    { id: 2, image: seferRoshJodesh2 },
    { id: 3, image: seferRoshJodesh3 },
    { id: 4, image: seferRoshJodesh4 },
    { id: 5, image: seferRoshJodesh5 },
    { id: 6, image: seferRoshJodesh6 },
    { id: 7, image: seferRoshJodesh7 },
    { id: 8, image: seferRoshJodesh8 },
    { id: 9, image: seferRoshJodesh9 },
    { id: 10, image: seferRoshJodesh10 },
  ]);

  const [musafRoshJodeshJol, setmusafRoshJodeshJol] = useState([
    { id: 1, image: musafRoshJodeshJol1 },
    { id: 2, image: musafRoshJodeshJol2 },
    { id: 3, image: musafRoshJodeshJol3 },
    { id: 4, image: musafRoshJodeshJol4 },
    { id: 5, image: musafRoshJodeshJol5 },
    { id: 6, image: musafRoshJodeshJol6 },
    { id: 7, image: musafRoshJodeshJol7 },
    { id: 8, image: musafRoshJodeshJol8 },
    { id: 9, image: musafRoshJodeshJol9 },
    { id: 10, image: musafRoshJodeshJol10 },
    { id: 11, image: musafRoshJodeshJol11 },
    { id: 12, image: musafRoshJodeshJol12 },
    { id: 13, image: musafRoshJodeshJol13 },
    { id: 14, image: musafRoshJodeshJol14 },
  ]);

  const [musafRoshJodeshShabat, setmusafRoshJodeshShabat] = useState([
    { id: 1, image: musafRoshJodeshShabat1 },
    { id: 2, image: musafRoshJodeshShabat2 },
    { id: 3, image: musafRoshJodeshShabat3 },
    { id: 4, image: musafRoshJodeshShabat4 },
    { id: 5, image: musafRoshJodeshShabat5 },
    { id: 6, image: musafRoshJodeshShabat6 },
    { id: 7, image: musafRoshJodeshShabat7 },
    { id: 8, image: musafRoshJodeshShabat8 },
    { id: 9, image: musafRoshJodeshShabat9 },
    { id: 10, image: musafRoshJodeshShabat10 },
    { id: 11, image: musafRoshJodeshShabat11 },
    { id: 12, image: musafRoshJodeshShabat12 },
  ]);

  const [mizmorim, setmizmorim] = useState([
    { id: 1, image: mizmorim1 },
    { id: 2, image: mizmorim2 },
    { id: 3, image: mizmorim3 },
    { id: 4, image: mizmorim4 },
    { id: 5, image: mizmorim5 },
    { id: 6, image: mizmorim6 },
    { id: 7, image: mizmorim7 },
  ]);

  const [amidaYomtob, setamidaYomtob] = useState([
    { id: 1, image: amidaYomtob1 },
    { id: 2, image: amidaYomtob2 },
    { id: 3, image: amidaYomtob3 },
    { id: 4, image: amidaYomtob4 },
    { id: 5, image: amidaYomtob5 },
    { id: 6, image: amidaYomtob6 },
    { id: 7, image: amidaYomtob7 },
    { id: 8, image: amidaYomtob8 },
    { id: 9, image: amidaYomtob9 },
    { id: 10, image: amidaYomtob10 },
    { id: 11, image: amidaYomtob11 },
    { id: 12, image: amidaYomtob12 },
    { id: 13, image: amidaYomtob13 },
    { id: 14, image: amidaYomtob14 },
    { id: 15, image: amidaYomtob15 },
    { id: 16, image: amidaYomtob16 },
  ]);

  const [amidaMusaf, setamidaMusaf] = useState([
    { id: 1, image: amidaMusaf1 },
    { id: 2, image: amidaMusaf2 },
    { id: 3, image: amidaMusaf3 },
    { id: 4, image: amidaMusaf4 },
    { id: 5, image: amidaMusaf5 },
    { id: 6, image: amidaMusaf6 },
    { id: 7, image: amidaMusaf7 },
    { id: 8, image: amidaMusaf8 },
    { id: 9, image: amidaMusaf9 },
    { id: 10, image: amidaMusaf10 },
    { id: 11, image: amidaMusaf11 },
  ]);

  const [velas, setvelas] = useState([
    { id: 1, image: velas1 },
    { id: 2, image: velas2 },
    { id: 3, image: velas3 },
  ]);

  const [seferJanuca, setseferJanuca] = useState([
    { id: 1, image: seferJanuca1 },
    { id: 2, image: seferJanuca2 },
    { id: 3, image: seferJanuca3 },
    { id: 4, image: seferJanuca4 },
    { id: 5, image: seferJanuca5 },
    { id: 6, image: seferJanuca6 },
    { id: 7, image: seferJanuca7 },
    { id: 8, image: seferJanuca8 },
    { id: 9, image: seferJanuca9 },
  ]);

  const [shabatShekalim, setshabatShekalim] = useState([
    { id: 1, image: shabatShekalim1 },
  ]);

  const [shabatZajor, setshabatZajor] = useState([
    { id: 1, image: shabatZajor1 },
    { id: 2, image: shabatZajor2 },
  ]);

  const [purim, setpurim] = useState([
    { id: 1, image: purim1 },
    { id: 2, image: purim2 },
    { id: 3, image: purim3 },
    { id: 4, image: purim4 },
  ]);

  const [shabatonimDiferentes, setshabatonimDiferentes] = useState([
    { id: 1, image: shabatonimDiferentes1 },
  ]);

  const [birkatHailanot, setbirkatHailanot] = useState([
    { id: 1, image: birkatHailanot1 },
    { id: 2, image: birkatHailanot2 },
    { id: 3, image: birkatHailanot3 },
    { id: 4, image: birkatHailanot4 },
    { id: 5, image: birkatHailanot5 },
    { id: 6, image: birkatHailanot6 },
    { id: 7, image: birkatHailanot7 },
    { id: 8, image: birkatHailanot8 },
  ]);

  const [limudNisan, setlimudNisan] = useState([
    { id: 1, image: limudNisan1 },
    { id: 2, image: limudNisan2 },
    { id: 3, image: limudNisan3 },
    { id: 4, image: limudNisan4 },
    { id: 5, image: limudNisan5 },
    { id: 6, image: limudNisan6 },
    { id: 7, image: limudNisan7 },
    { id: 8, image: limudNisan8 },
    { id: 9, image: limudNisan9 },
    { id: 10, image: limudNisan10 },
    { id: 11, image: limudNisan11 },
    { id: 12, image: limudNisan12 },
    { id: 13, image: limudNisan13 },
  ]);

  const [shoa, setshoa] = useState([{ id: 1, image: shoa }]);

  const [yomHazikaron, setyomHazikaron] = useState([
    { id: 1, image: yomHazikaron1 },
    { id: 2, image: yomHazikaron2 },
  ]);

  const [tefilaShalomAlIsrael, settefilaShalomAlIsrael] = useState([
    { id: 1, image: tefilaShalomAlIsrael1 },
    { id: 2, image: tefilaShalomAlIsrael2 },
  ]);

  const [Boda, setBoda] = useState([
    { id: 1, image: Boda1 },
    { id: 2, image: Boda2 },
    { id: 3, image: Boda3 },
  ]);

  const [britMila, setbritMila] = useState([
    { id: 1, image: britMila1 },
    { id: 2, image: britMila2 },
    { id: 3, image: britMila3 },
    { id: 4, image: britMila4 },
    { id: 5, image: britMila5 },
    { id: 6, image: britMila6 },
    { id: 7, image: britMila7 },
    { id: 8, image: britMila8 },
    { id: 9, image: britMila9 }]);

    const [pidionHaben, setpidionHaben] = useState ([
    { id: 1, image: pidionHaben1 },
    { id: 2, image: pidionHaben2 },
    { id: 3, image: pidionHaben3 },
    { id: 4, image: pidionHaben4 },
  ]);

  

  const [berajot, setberajot] = useState([
    { id: 1, image: berajot1 },
    { id: 2, image: berajot2 },
    { id: 3, image: berajot3 },
    { id: 4, image: berajot4 },
    { id: 5, image: berajot5 },
  ]);

  const [abelut, setabelut] = useState([
    { id: 1, image: abelut1 },
    { id: 2, image: abelut2 },
    { id: 3, image: abelut3 },
    { id: 4, image: abelut4 },
  ]);

  const [guedalia, setguedalia] = useState([
    { id: 1, image: guedalia1 },
    { id: 2, image: guedalia2 },
    { id: 3, image: guedalia3 },
    { id: 4, image: guedalia4 },
    { id: 5, image: guedalia5 },
    { id: 6, image: guedalia6 },
    { id: 7, image: guedalia7 },
    { id: 8, image: guedalia8 },
    { id: 9, image: guedalia9 },
    { id: 10, image: guedalia10 },
  ]);

  const [asaraBetebet, setasaraBetebet] = useState([
    { id: 1, image: asaraBetebet1 },
    { id: 2, image: asaraBetebet2 },
    { id: 3, image: asaraBetebet3 },
    { id: 4, image: asaraBetebet4 },
    { id: 5, image: asaraBetebet5 },
  ]);

  const [ayunoEsther, setayunoEsther] = useState([
    { id: 1, image: ayunoEsther1 },
    { id: 2, image: ayunoEsther2 },
    { id: 3, image: ayunoEsther3 },
    { id: 4, image: ayunoEsther4 },
    { id: 5, image: ayunoEsther5 },
    { id: 6, image: ayunoEsther6 },
    { id: 7, image: ayunoEsther7 },
  ]);

  const [tamuz, settamuz] = useState([
    { id: 1, image: tamuz1 },
    { id: 2, image: tamuz2 },
    { id: 3, image: tamuz3 },
    { id: 4, image: tamuz4 },
    { id: 5, image: tamuz5 },
    { id: 6, image: tamuz6 },
  ]);

  const [minjaAyuno, setminjaAyuno] = useState([
    { id: 1, image: minjaAyuno1 },
    { id: 2, image: minjaAyuno2 },
    { id: 3, image: minjaAyuno3 },
    { id: 4, image: minjaAyuno4 },
    { id: 5, image: minjaAyuno5 },
  ]);

  const [bereshit, setbereshit] = useState([
    { id: 1, image: bereshit1 },
    { id: 2, image: bereshit2 },
    { id: 3, image: bereshit3 },
    { id: 4, image: bereshit4 },
    { id: 5, image: bereshit5 },
    { id: 6, image: bereshit6 },
    { id: 7, image: bereshit7 },
    { id: 8, image: bereshit8 },
    { id: 9, image: bereshit9 },
    { id: 10, image: bereshit10 },
  ]);

  const [shemot, setshemot] = useState([
    { id: 1, image: shemot1 },
    { id: 2, image: shemot2 },
    { id: 3, image: shemot3 },
    { id: 4, image: shemot4 },
    { id: 5, image: shemot5 },
    { id: 6, image: shemot6 },
    { id: 7, image: shemot7 },
    { id: 8, image: shemot8 },
    { id: 9, image: shemot9 },
    { id: 10, image: shemot10 },
  ]);

  const [vaikra, setvaikra] = useState([
    { id: 1, image: vaikra1 },
    { id: 2, image: vaikra2 },
    { id: 3, image: vaikra3 },
    { id: 4, image: vaikra4 },
    { id: 5, image: vaikra5 },
    { id: 6, image: vaikra6 },
    { id: 7, image: vaikra7 },
    { id: 8, image: vaikra8 },
  ]);

  const [bamidbar, setbamidbar] = useState([
    { id: 1, image: bamidbar1 },
    { id: 2, image: bamidbar2 },
    { id: 3, image: bamidbar3 },
    { id: 4, image: bamidbar4 },
    { id: 5, image: bamidbar5 },
    { id: 6, image: bamidbar6 },
    { id: 7, image: bamidbar7 },
    { id: 8, image: bamidbar8 },
  ]);

  const [debarim, setdebarim] = useState([
    { id: 1, image: debarim1 },
    { id: 2, image: debarim2 },
    { id: 3, image: debarim3 },
    { id: 4, image: debarim4 },
    { id: 5, image: debarim5 },
    { id: 6, image: debarim6 },
    { id: 7, image: debarim7 },
    { id: 8, image: debarim8 },
    { id: 9, image: debarim9 },
    { id: 10, image: debarim10 },
    { id: 11, image: debarim11 },
    { id: 12, image: debarim12 },
  ]);

};

export default PDF;

