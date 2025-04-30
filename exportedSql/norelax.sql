-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Ápr 28. 11:30
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS `norelax` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `norelax`;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `norelax`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jwttoken`
--

CREATE TABLE `jwttoken` (
  `id` int(11) NOT NULL,
  `token` varchar(191) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `accountType` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `date` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `status` varchar(191) NOT NULL DEFAULT 'pending',
  `userId` int(11) NOT NULL,
  `fullPrice` int(11) NOT NULL,
  `updated` datetime(3) NOT NULL,
  `reservationId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `orderitem`
--

CREATE TABLE `orderitem` (
  `id` int(11) NOT NULL,
  `productName` varchar(191) NOT NULL,
  `unit` varchar(191) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `orderId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `productgroups`
--

CREATE TABLE `productgroups` (
  `id` int(11) NOT NULL,
  `groupName` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `productgroups`
--

INSERT INTO `productgroups` (`id`, `groupName`) VALUES
(1, 'drinks'),
(2, 'foods');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `productName` varchar(191) NOT NULL,
  `unit` varchar(191) NOT NULL,
  `price` int(11) NOT NULL,
  `productGroupId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `products`
--

INSERT INTO `products` (`id`, `productName`, `unit`, `price`, `productGroupId`) VALUES
(1, 'Staropramen csapolt', '5 dl', 890, 1),
(2, 'Borsodi csapolt', '5 dl', 690, 1),
(3, 'Mort Subite csapolt', '5 dl', 1490, 1),
(4, 'Hoegaarden csapolt', '5 dl', 1490, 1),
(5, 'Heineken csapolt', '5 dl', 990, 1),
(6, 'Törley Irsai Olivér', '1 dl', 400, 1),
(7, 'Törley Rosé', '1 dl', 400, 1),
(8, 'Kisfröccs', '2 dl', 450, 1),
(9, 'Nagyfröccs', '3 dl', 850, 1),
(10, 'Hosszúlépés', '3 dl', 550, 1),
(11, 'Házmester', '5 dl', 1200, 1),
(12, 'Vice házmester', '5 dl', 950, 1),
(13, 'Borsodi Citrom', '5 dl', 600, 1),
(14, 'Borsodi Grapefruit', '5 dl', 600, 1),
(15, 'Stella Artois alkoholmentes', '5 dl', 600, 1),
(16, 'Staropramen', '5 dl', 790, 1),
(17, 'Stella Artois', '5 dl', 690, 1),
(18, 'Jim Bean Bourbon', '0,4 dl', 900, 1),
(19, 'Johnnie Walker', '0,4 dl', 990, 1),
(20, 'Ballantines', '0,4 dl', 690, 1),
(21, 'Captain Morgan Black', '0,4 dl', 890, 1),
(22, 'Beefeter Gin', '0,4 dl', 890, 1),
(23, 'Tequila Sierra', '0,4 dl', 890, 1),
(24, 'Jägermeister', '0,4 dl', 990, 1),
(25, 'Finlandia', '0,4 dl', 890, 1),
(26, 'Jack Daniels Honey', '0,4 dl', 1050, 1),
(27, 'Bacardi Carta Blanca', '0,4 dl', 890, 1),
(28, 'Bombay Saphire', '0,4 dl', 1090, 1),
(29, 'Kalumba', '0,4 dl', 700, 1),
(30, 'Grey Goose', '0,4 dl', 1990, 1),
(31, 'Tubi 60', '0,4 dl', 1990, 1),
(32, 'Diplomático', '0,4 dl', 1990, 1),
(33, 'Unicum', '0,4 dl', 790, 1),
(34, 'Malibu', '0,4 dl', 850, 1),
(35, 'Tátratea', '0,4 dl', 1090, 1),
(36, 'Panyolai', '0,4 dl', 1200, 1),
(37, 'Jameson', '0,4 dl', 1090, 1),
(38, 'Jameson IPA', '0,4 dl', 1250, 1),
(39, 'Martini', '1 dl', 1190, 1),
(40, 'Aperol', '1 dl', 990, 1),
(41, 'Coca Cola', '5 dl', 490, 1),
(42, 'Coca Cola Zero', '5 dl', 490, 1),
(43, 'Kinley Tonic', '5 dl', 490, 1),
(44, 'Kinley Gyömbér', '5 dl', 490, 1),
(45, 'Fanta', '5 dl', 490, 1),
(46, 'Cappy Barack', '5 dl', 490, 1),
(47, 'Cappy Körte', '5 dl', 490, 1),
(48, 'Cappy Narancs', '5 dl', 490, 1),
(49, 'Cappy Alma', '5 dl', 490, 1),
(50, 'Fuze Tea', '5 dl', 490, 1),
(51, 'Hell', '2,5 dl', 490, 1),
(52, 'Sommersby', '5 dl', 700, 1),
(53, 'Whisky-Cola', '4 dl', 1500, 1),
(54, 'Gin-Tonic', '4 dl', 1500, 1),
(55, 'Vodka szóda', '4 dl', 1500, 1),
(56, 'Vodka narancs', '4 dl', 1500, 1),
(57, 'Cuba Libre', '4 dl', 1500, 1),
(58, 'Mojito', '4 dl', 1500, 1),
(59, 'Malibu alma', '4 dl', 1500, 1),
(60, 'Melegszendvics toast kenyérből', '1 adag', 500, 2),
(61, 'Melegszendvics baguette', '1 adag', 850, 2),
(62, 'Sült krumpli', '1 adag', 700, 2),
(63, 'Sült kolbász', '1 adag', 1000, 2),
(64, 'Sült krumpli és sült kolbász', '1 adag', 1500, 2),
(65, 'Zsíros kenyér', '1 adag', 200, 2),
(66, 'Sós mogyoró', '1 adag', 400, 2),
(67, 'Chips', '1 adag', 650, 2),
(68, 'Popcorn', '1 adag', 400, 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `reservation`
--

CREATE TABLE `reservation` (
  `id` int(11) NOT NULL,
  `isReserved` tinyint(1) NOT NULL DEFAULT 0,
  `reservationDate` datetime(3) DEFAULT current_timestamp(3),
  `tableNumber` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `seats` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `firstName` varchar(191) NOT NULL,
  `lastName` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `accounType` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `accountIsActive` tinyint(1) NOT NULL DEFAULT 1,
  `phoneNumber` varchar(191) DEFAULT NULL,
  `birthDay` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `user`
--

INSERT INTO `user` (`id`, `firstName`, `lastName`, `email`, `password`, `accounType`, `createdAt`, `accountIsActive`, `phoneNumber`, `birthDay`) VALUES
(1, 'norelax', 'norelax', 'norelax@gmail.com', '$2b$10$JAECrsCEYEUmERknpF9YVOdmDarqdT3x2fcoJPMHfhRmqdaisOWn.', 1, '2025-04-28 09:29:35.446', 1, NULL, '0000-00-00');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `jwttoken`
--
ALTER TABLE `jwttoken`
  ADD PRIMARY KEY (`id`),
  ADD KEY `JWTToken_userId_fkey` (`userId`);

--
-- A tábla indexei `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Order_userId_fkey` (`userId`),
  ADD KEY `Order_reservationId_fkey` (`reservationId`);

--
-- A tábla indexei `orderitem`
--
ALTER TABLE `orderitem`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Orderitem_orderId_fkey` (`orderId`);

--
-- A tábla indexei `productgroups`
--
ALTER TABLE `productgroups`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Products_productGroupId_fkey` (`productGroupId`);

--
-- A tábla indexei `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Reservation_userId_fkey` (`userId`);

--
-- A tábla indexei `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `jwttoken`
--
ALTER TABLE `jwttoken`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT a táblához `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT a táblához `orderitem`
--
ALTER TABLE `orderitem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT a táblához `productgroups`
--
ALTER TABLE `productgroups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT a táblához `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT a táblához `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `jwttoken`
--
ALTER TABLE `jwttoken`
  ADD CONSTRAINT `JWTToken_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Megkötések a táblához `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `Order_reservationId_fkey` FOREIGN KEY (`reservationId`) REFERENCES `reservation` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Order_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Megkötések a táblához `orderitem`
--
ALTER TABLE `orderitem`
  ADD CONSTRAINT `Orderitem_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `order` (`id`) ON UPDATE CASCADE;

--
-- Megkötések a táblához `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `Products_productGroupId_fkey` FOREIGN KEY (`productGroupId`) REFERENCES `productgroups` (`id`) ON UPDATE CASCADE;

--
-- Megkötések a táblához `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `Reservation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
