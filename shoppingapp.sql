-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 11, 2023 at 10:59 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shoppingapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `Itemid` int(11) NOT NULL,
  `categoryid` varchar(200) NOT NULL,
  `itemname` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `link` text NOT NULL,
  `id` varchar(100) NOT NULL,
  `quntity` int(11) NOT NULL DEFAULT 1,
  `total` double NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`Itemid`, `categoryid`, `itemname`, `price`, `link`, `id`, `quntity`, `total`) VALUES
(117, '044', 'Hair Dryer', 2250, 'https://www.conair.com/on/demandware.static/-/Sites-master-us/default/dw6b7669b3/no_background/nzltvxba9m1ijj0vqymt.png', '405', 3, 6750),
(119, '033', 'Coffee Table', 44500, 'https://images.dwell.com/photos/7039023947501715456/7095172018656227328/large.png', '302', 3, 133500),
(120, '033', 'Dining Table', 15500, 'https://www.adorainteriors.com/wp-content/uploads/2021/08/2-1.png', '305', 2, 31000),
(121, '022', 'Smartphone', 80000, 'https://www.dxomark.fr/wp-content/uploads/drafts/post-157253/MicrosoftTeams-image-100.png', '202', 5, 400000),
(122, '022', 'Laptop', 150000, 'https://wish.lk/wp-content/uploads/2022/10/Macbook-Pro-M2-Space-Gray.png', '204', 2, 300000),
(123, '033', 'Wooden Chair', 5600, 'https://pagebuilder.webshopworks.com/202-medium_default/wooden-chair.jpg', '301', 1, 5600),
(124, '011', 'Sneakers', 3500, 'https://specials-images.forbesimg.com/imageserve/64650677981fc0e76246245d/On-Cloud-5-Sneaker/960x0.jpg?cropX1=0&cropX2=1400&cropY1=273&cropY2=1323', '104', 1, 3500),
(128, '044', 'Shampoo', 350, 'https://images.baleomol.com/production/uploads/jackricky14MiXJ/2022/product/1010427/16667520197447504050431802a1be57d6948f6891e6b1bf1bc00d1removebgpreviewpng.png?w=500&h=500', '404', 1, 350);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`Itemid`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `Itemid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=130;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
