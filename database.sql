
-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 22, 2021 at 07:36 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `heroes_cards`
--

-- --------------------------------------------------------

--
-- Table structure for table `heroes`
--

CREATE TABLE `heroes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `Intelligence` int(11) NOT NULL,
  `Force` int(11) NOT NULL,
  `Resistance` int(11) NOT NULL,
  `Role` enum('Guerrier','Soigneur','Mage','') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `heroes`
--

INSERT INTO `heroes` (`id`, `name`, `Intelligence`, `Force`, `Resistance`, `Role`) VALUES
(1, 'Superman', 25, 45, 55, 'Guerrier'),
(2, 'Flash', 10, 22, 85, 'Mage'),
(3, 'Green lantern', 35, 65, 45, 'Soigneur'),
(4, 'Wolverine', 55, 75, 15, 'Guerrier'),
(5, 'Thor', 85, 10, 65, 'Guerrier');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `heroes`
--
ALTER TABLE `heroes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `heroes`
--
ALTER TABLE `heroes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;