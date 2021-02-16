-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 16, 2021 at 05:59 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `commerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `order_list`
--

CREATE TABLE `order_list` (
  `id` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `order_id` int(11) NOT NULL,
  `vat` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `order_list`
--

INSERT INTO `order_list` (`id`, `pid`, `qty`, `price`, `order_id`, `vat`) VALUES
(1, 6, 1, '1650.00', 4, '115.50'),
(2, 3, 4, '1300.00', 4, '91.00'),
(3, 1, 2, '1000.00', 4, '70.00'),
(4, 5, 1, '1150.00', 4, '80.50'),
(5, 4, 2, '1140.00', 4, '79.80'),
(6, 7, 2, '2650.00', 4, '185.50'),
(7, 1, 2, '1000.00', 5, '70.00'),
(8, 2, 1, '1200.00', 5, '84.00'),
(9, 1, 5, '1000.00', 7, '70.00'),
(10, 2, 2, '1200.00', 7, '84.00'),
(11, 5, 1, '1150.00', 7, '80.50');

-- --------------------------------------------------------

--
-- Table structure for table `order_shop`
--

CREATE TABLE `order_shop` (
  `id` int(11) NOT NULL,
  `subtotal` decimal(10,2) NOT NULL COMMENT 'ราคาก่อนรวมภาษี',
  `vat` decimal(10,2) NOT NULL COMMENT 'ภาษี',
  `total` decimal(10,2) NOT NULL COMMENT 'ราคารวมทั้งหมด'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `order_shop`
--

INSERT INTO `order_shop` (`id`, `subtotal`, `vat`, `total`) VALUES
(4, '17580.00', '1230.60', '18810.60'),
(5, '3200.00', '224.00', '3424.00'),
(7, '8550.00', '598.50', '9148.50');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `img` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `img`) VALUES
(1, 'Product 1', '1000.00', 'https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII'),
(2, 'Product 2', '1200.00', 'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ'),
(3, 'Product 3', '1300.00', 'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY'),
(4, 'Product 4', '1140.00', 'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk'),
(5, 'Product 5', '1150.00', 'https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs'),
(6, 'Product 6', '1650.00', 'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I'),
(7, 'Product 7', '2650.00', 'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y'),
(8, 'Product 8', '1140.00', 'https://i.picsum.photos/id/1079/4496/3000.jpg?hmac=G-dJcpU08vEMqjUz2rb3IxjOG99rcePqW9BF1IsPLf0'),
(9, 'Product 9', '1150.00', 'https://i.picsum.photos/id/106/2592/1728.jpg?hmac=E1-3Hac5ffuCVwYwexdHImxbMFRsv83exZ2EhlYxkgY'),
(10, 'Product 10', '1650.00', 'https://i.picsum.photos/id/1058/4608/3072.jpg?hmac=kfHIsJ4T3b-ily0CcdGESnuC4wwOPtnOQpcICheyvFQ'),
(11, 'Product 11', '1550.00', 'https://i.picsum.photos/id/1074/5472/3648.jpg?hmac=w-Fbv9bl0KpEUgZugbsiGk3Y2-LGAuiLZOYsRk0zo4A'),
(12, 'Product 12', '3650.00', 'https://i.picsum.photos/id/1080/6858/4574.jpg?hmac=qMYBjROs2Wu589QQXRAYsxDJu4ZuRQ4PKDpb3x_Oouw');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `order_list`
--
ALTER TABLE `order_list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `order_shop`
--
ALTER TABLE `order_shop`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `order_list`
--
ALTER TABLE `order_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `order_shop`
--
ALTER TABLE `order_shop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `order_list`
--
ALTER TABLE `order_list`
  ADD CONSTRAINT `order_list_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order_shop` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
