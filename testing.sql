/*
 Navicat Premium Data Transfer

 Source Server         : localhost-docker
 Source Server Type    : MySQL
 Source Server Version : 100408
 Source Host           : 127.0.0.1:3306
 Source Schema         : testing

 Target Server Type    : MySQL
 Target Server Version : 100408
 File Encoding         : 65001

 Date: 29/10/2019 09:04:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tblProduct
-- ----------------------------
DROP TABLE IF EXISTS `tblProduct`;
CREATE TABLE `tblProduct`  (
  `product_idx` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `product_price` decimal(15, 0) NULL DEFAULT NULL,
  PRIMARY KEY (`product_idx`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tblProduct
-- ----------------------------
INSERT INTO `tblProduct` VALUES (1, 'Produk Varian 1', 2000);
INSERT INTO `tblProduct` VALUES (2, 'Produc Varian 2', 5000);
INSERT INTO `tblProduct` VALUES (3, 'Produc Varian 3', 4000);
INSERT INTO `tblProduct` VALUES (4, 'Produc Varian 4', 6000);
INSERT INTO `tblProduct` VALUES (5, 'Produc Varian 5', 7000);
INSERT INTO `tblProduct` VALUES (7, 'Produk Varian Baru 9', 100000);
INSERT INTO `tblProduct` VALUES (8, 'Produk Varian Baru 10', 120000);

SET FOREIGN_KEY_CHECKS = 1;
